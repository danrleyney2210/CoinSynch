import { Table } from '../../atomos/table'
import * as S from './styles'

export const TopCryptos = () => {
  return (
    <S.Wrapper className='container'>
      <h1>Top Cryptos</h1>
      <Table />
    </S.Wrapper>
  )
}

