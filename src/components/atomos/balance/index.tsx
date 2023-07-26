
import { ReactSVG } from 'react-svg'
import * as S from './styles'
import Balance from '../../../assets/icons/legal-scale.svg'

export const Banlance = () => {
  return (
    <S.Wrapper>
      <S.BalanceIn>
        <S.Icon>
          <ReactSVG src={Balance} />
        </S.Icon>
        <S.Description>
          <h4>Balance in US$</h4>
          <span>(approximately)</span>
        </S.Description>
      </S.BalanceIn>
      <S.Value>
        <h3>$32,256.56</h3>
      </S.Value>
    </S.Wrapper>
  )
}


