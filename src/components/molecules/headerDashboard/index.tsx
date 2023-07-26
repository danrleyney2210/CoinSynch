import * as S from './styles'
import Logo from "../../../assets/svg/logo.svg";
import { ReactSVG } from 'react-svg';
import Avatar from '../../../assets/icons/avatar.svg'
import ArrowDown from '../../../assets/icons/arrowDownSmall.svg'

export const HeaderDashboard = () => {
  return (
    <S.Wrapper>
      <img src={Logo} />
      <S.ContentUser>
        <S.Avatar>
          <ReactSVG src={Avatar} />
        </S.Avatar>
        <S.Name>
          <p>Aulus</p>
          <ReactSVG src={ArrowDown} />
        </S.Name>
      </S.ContentUser>
    </S.Wrapper>
  )
}


