import { ReactSVG } from 'react-svg'
import * as S from './styles'
import Wallet from '../../../assets/icons/wallet.svg'
import NothingWallet from '../../../assets/icons/nothingWallate.svg'

export const MyWallet = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <div>
          <ReactSVG src={Wallet} />
          <p>My Wallet</p>
        </div>
      </S.Header>

      <S.Body>
        <div>
          <ReactSVG src={NothingWallet} />
          <b>Nothing here yet...</b>
          <span>Add a crypto and start earning</span>
        </div>
      </S.Body>
    </S.Wrapper>
  )
}


