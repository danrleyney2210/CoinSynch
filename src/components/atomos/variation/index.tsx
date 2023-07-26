import * as S from './styles'
import Eth from '../../../assets/icons/ethereum.svg'
import Graph from '../../../assets/icons/GraphCoin.svg'
import { ReactSVG } from 'react-svg'

export const Variation = () => {
  return (
    <S.Wrapper>
      <S.Daily>
        <span>Daily Variation</span>
        <div className='content-coin'>
          <S.Coin>
            <ReactSVG src={Eth} />
            <p>ETH</p>
          </S.Coin>
          <p className='gain'>+5,65%</p>
        </div>
      </S.Daily>

      <div className='content-graph'>
        <ReactSVG src={Graph} />
      </div>
    </S.Wrapper>
  )
}


