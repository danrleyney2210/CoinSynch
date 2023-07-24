
import { Button } from '../../atomos/button'
import * as S from './styles'
import { BsArrowRight } from 'react-icons/bs'
import foto1 from '../../../assets/svg/main1.svg'
import fotoBottom from '../../../assets/svg/backgroundDown.svg'

export const Main = () => {
  return (
    <S.Wrapper id="main">
      <S.ContentMain className='container'>
        <S.ContentText>
          <S.Title>
            Lorem ipsum dolor sit amet, consectetur
          </S.Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
          </p>

          <S.ContenetBtn>
            <Button text='SIGN UP NOW' size='large'>
              <BsArrowRight size={12} />
            </Button>
          </S.ContenetBtn>


          <S.ContentCard>
            <S.Card>
              <span>Cryptos</span>
            </S.Card>
            <S.Card>
              <span>NFTs</span>
            </S.Card>
            <S.Card>
              <span>Games</span>
            </S.Card>
          </S.ContentCard>
        </S.ContentText>

        <img src={foto1} />
      </S.ContentMain>

      <img src={fotoBottom} />

    </S.Wrapper>
  )
}


