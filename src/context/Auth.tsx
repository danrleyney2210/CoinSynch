import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { AuthContextData, IcoinProps, Props, TResponseData, TUser } from "./types";
import { QC_ACCESS_KEY, QC_SECRET_ACCESS_KEY } from "../config";
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

  const getCoin = async () => {
    const headers = {
      'QC-Access-Key': QC_ACCESS_KEY,
      'QC-Secret-Key': QC_SECRET_ACCESS_KEY,
    };

    try {
      const response = await axios.get('https://quantifycrypto.com/api/v1/coins/multiple', { headers })

      if (response.data) {
        const resultAll = response.data.data.map((item: TResponseData) => ({
          rank: item.rank,
          name: item.coin_symbol,
          price: item.coin_price,
          change: item.percent_change_5min,
        }));

        const result = resultAll.slice(0, 10);
        setCoins(result);
      }
    } catch (error) {
      console.error('Error fetching coin price:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const formatCoint = (coin: number) => {
    return coin.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  const formatChange = (change: number) => {
    if (change < 0) {
      return ` - ${Math.abs(change).toFixed(2)}`
    } else {
      return `+ ${+ change}`
    }
  }

  useEffect(() => { getCoin() }, [])

  return (
    <AuthContext.Provider value={{
      coins,
      auth,
      setAuth,
      user,
      AuthLogin,
      isError,
      setIsError,
      isLoading,
      formatCoint,
      formatChange
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
