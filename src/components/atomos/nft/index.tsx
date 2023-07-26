import { ReactSVG } from 'react-svg'
import * as S from './styles'
import NftIcon from '../../../assets/icons/nft.svg'

export const Nft = () => {
  return (
    <S.Wrapper>
      <S.Descrition>
        <b>NFT’s NEWS</b>
        <p>New ElephantX NFT
          to be lauched!</p>
        <span>Read more +</span>
      </S.Descrition>
      <ReactSVG src={NftIcon} />
    </S.Wrapper>
  )
}

