export interface IcoinProps {
  rank: number
  name: string
  price: number,
  change: number
}

export type IPrice = {
  id: string,
  rank: number,
  coin_symbol: string,
  coin_price: number
}

export type IChange = {
  id: string
  rank: number
  coin_symbol: string
  coin_name: string
  percent_change_5min: number
  percent_change_15min: number
  percent_change_1h: number
  percent_change_2h: number
  percent_change_4h: number
  percent_change_24h: number
  percent_change_7d: number
  percent_change_14d: number
  percent_change_30d: number
  percent_change_ytd: number
  percent_change_1year: number
}
