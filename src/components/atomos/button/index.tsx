import * as S from './styles'
import { IButtonProps } from './types'

export const Button = ({ size, text, children, ...rest }: IButtonProps) => {
  return (
    <S.Button type='button' tSize={size} {...rest} >
      {text}
      {children}
    </S.Button>
  )
}
