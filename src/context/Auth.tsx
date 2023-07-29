import { createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { AuthContextData, IcoinProps, Props, TResponseData, TUser } from "./types";
import axios from "axios";


export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: Props) {
  const [coins, setCoins] = useState<IcoinProps[]>([] as IcoinProps[]);
  const [auth, setAuth] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<TUser>({
    email: '',
    password: ''
  } as TUser)

  const navigate = useNavigate()

  const AuthLogin = async (data: TUser) => {
    setIsLoading(true)
    setIsError(true)
    setIsLoading(false)
  }

  const getCoin = async (size: number) => {

    try {
      setIsLoading(true)
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${size}&page=1&sparkline=false`);

      if (response.data) {
        const resultAll = response.data.map((item: TResponseData) => ({
          icon: item.image,
          rank: item.market_cap_rank,
          name: item.name,
          symbol: item.symbol,
          price: item.current_price,
          change: item.price_change_24h,
          toggled: false,
        }));

        const result = resultAll.slice(0, 10);
        setCoins(result);
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Error fetching coin price:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const formatName = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const formatCoint = (coin: number) => {
    let formattedNumber = coin.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    return formattedNumber = formattedNumber.replace('$', '$ ');
  };

  const formatChange = (change: number) => {
    if (change < 0) {
      return ` - ${Math.abs(change).toFixed(2)}`
    } else {
      return `+ ${+ Math.abs(change).toFixed(2)}`
    }
  }

  useEffect(() => { getCoin(5) }, [])

  return (
    <AuthContext.Provider value={{
      coins,
      auth,
      getCoin,
      setAuth,
      user,
      AuthLogin,
      isError,
      setIsError,
      isLoading,
      formatName,
      formatCoint,
      formatChange,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
