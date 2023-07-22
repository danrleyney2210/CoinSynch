import { Button } from '../../atomos/button'
import * as S from './styles'
import Logo from '../../../assets/svg/logo.svg'

export const Menu = () => {
  return (
    <S.Wrapper className="container">
      <S.ContentLogo>
        <img src={Logo} />
        <S.Ul>
          <li><a href="">About us</a></li>
          <li><a href="">Top Cryptos</a></li>
        </S.Ul>
      </S.ContentLogo>

      <S.ContentCoint>
        <S.Exchange>
          <S.Coin>
            <span>BIT</span>
            <span>R$ 23,62</span>
            <span>+7,082</span>
          </S.Coin>
          <S.Coin>
            <span>DOG</span>
            <span>R$ 23,62</span>
            <span className='gain-color'>+7,082</span>
          </S.Coin>
          <S.Coin>
            <span>ETH</span>
            <span>R$ 23,62</span>
            <span className='loss-color'>+7,082</span>
          </S.Coin>
        </S.Exchange>

        <S.ContentButton>
          <span>Sign in</span>
          <Button text='Sign up' size='small' />
        </S.ContentButton>
      </S.ContentCoint>
    </S.Wrapper>

  )
}


