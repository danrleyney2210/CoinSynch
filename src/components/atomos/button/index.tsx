import * as S from './styles'
import { IButtonProps } from './types'

export const Button = ({ size, text, icon, children, ...rest }: IButtonProps) => {
  return (
    <S.Button type='button' t={size} {...rest} >
      {icon && icon}
      {text}
      {children}
    </S.Button>
  )
}
