import * as S from './styles'
import { Header } from '../../components/organims/header'
import { Main } from '../../components/organims/main'
import { About } from '../../components/organims/about'
import { TopCryptos } from '../../components/organims/topCryptos'
import { Footer } from '../../components/organims/footer'

export const LandingPage = () => {
  return (
    <S.Wrapper>
      <Header />
      <Main />
      <About />
      <TopCryptos />
      <Footer />
    </S.Wrapper>
  )
}

