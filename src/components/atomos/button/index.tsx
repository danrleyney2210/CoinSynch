import * as S from './styles'
import { IButtonProps } from './types'

export const Button = ({ text }: IButtonProps) => {
  return (
    <S.Button type='button'>{text}</S.Button>
  )
}
