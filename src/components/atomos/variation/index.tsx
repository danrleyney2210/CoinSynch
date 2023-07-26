import * as S from './styles'
import Eth from '../../../assets/icons/ethereum.svg'
import Graph from '../../../assets/icons/GraphCoin.svg'
import { ReactSVG } from 'react-svg'

export const Variation = () => {
  return (
    <S.Wrapper>
      <S.Daily>
        <span>Daily Variation</span>
        <S.Coin>
          <ReactSVG src={Eth} />
          <p>ETH</p>
        </S.Coin>
        <p className='gain'>+5,65%</p>
      </S.Daily>

      <ReactSVG src={Graph} />
    </S.Wrapper>
  )
}


