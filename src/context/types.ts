import { Dispatch, ReactNode, SetStateAction } from "react";

export type Props = {
  children: ReactNode;
};

export type TUser = {
  email: string;
  password: string;
};

export type AuthContextData = {
  coins: IcoinProps[];
  auth: boolean;
  getCoin: (size: number) => void;
  setAuth: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  user: TUser;
  AuthLogin: (data: TUser) => void;
  formatName(str: string): string;
  formatCoint(coin: number): string;
  formatChange(change: number): string;
};

export interface IcoinProps {
  icon: string;
  rank: number;
  name: string;
  symbol: string;
  price: number;
  change: number;
  toggled: boolean;
}

export type TResponseData = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: any;
  last_updated: string;
};
