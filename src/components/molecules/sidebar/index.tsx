
import * as S from './styles'
import Wallet from '../../../assets/icons/wallet.svg'
import Crypto from '../../../assets/icons/Crypto.svg'
import Currency from '../../../assets/icons/currency.svg'
import Graph from '../../../assets/icons/graph.svg'
import { ReactSVG } from 'react-svg'

export const Sidebar = () => {
  return (
    <S.Wrapper>
      <ReactSVG src={Wallet} />
      <ReactSVG src={Crypto} />
      <ReactSVG src={Currency} />
      <ReactSVG src={Graph} />
    </S.Wrapper>
  )
}


