import * as S from './styles'
import Logo from "../../../assets/svg/logo.svg";
import { ReactSVG } from 'react-svg';
import Avatar from '../../../assets/icons/avatar.svg'
import ArrowDown from '../../../assets/icons/arrowDownSmall.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const HeaderDashboard = () => {
  const [showLogout, setShowLogout] = useState(false)
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <img src={Logo} />
      <S.ContentUser>
        <S.Avatar>
          <ReactSVG src={Avatar} />
        </S.Avatar>
        <S.Name onClick={() => setShowLogout(!showLogout)}>
          <p>Aulus</p>
          <ReactSVG src={ArrowDown} />
        </S.Name>
      </S.ContentUser>

      {showLogout && <S.Logout>
        <span onClick={() => navigate('/')}>Logout</span>
        <span>Setings</span>
      </S.Logout>}
    </S.Wrapper>
  )
}


