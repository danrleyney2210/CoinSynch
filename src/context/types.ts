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
  setAuth: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  user: TUser;
  AuthLogin: (data: TUser) => void;
  formatCoint(coin: number): string;
  formatChange(change: number): string;
};

export interface IcoinProps {
  rank: number;
  name: string;
  price: number;
  change: number;
}

export type TResponseData = {
  id: string;
  rank: number;
  coin_symbol: string;
  coin_name: string;
  marketcap: number;
  circulating_supply: number;
  percent_change_5min: number;
  percent_change_15min: number;
  percent_change_1h: number;
  percent_change_2h: number;
  percent_change_24h: number;
  percent_change_4h: number;
  percent_change_7d: number;
  percent_change_14d: number;
  percent_change_30d: number;
  percent_change_ytd: number;
  percent_change_1year: number;
  coin_price: number;
  coin_price_btc: number;
};
