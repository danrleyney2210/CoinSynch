
export interface IButtonProps {
  size?: 'small' | 'medium' | 'large'
  text: string
  icon? : unknown
  children?: React.ReactNode
}

export type IButtonSizeProps = {
  tSize?: 'small' | 'medium' | 'large'
}
