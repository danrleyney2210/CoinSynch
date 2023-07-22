import * as S from './styles'
import Bitcoin from '../../../assets/icons/bitcoin.svg'

export const Table = () => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Crypto</th>
          <th>Price</th>
          <th>Change</th>
          <th>Trade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td className='cryptonName'><img src={Bitcoin}/><span>Bitcoin BTC</span></td>
          <td>US$ 25.499,52</td>
          <td>+5,65%</td>
          <td><button>Buy</button></td>
        </tr>
        <tr>
          <td>01</td>
          <td className='cryptonName'><img src={Bitcoin}/><span>Bitcoin BTC</span></td>
          <td>US$ 25.499,52</td>
          <td>+5,65%</td>
          <td><button>Buy</button></td>
        </tr>
        <tr>
          <td>01</td>
          <td className='cryptonName'><img src={Bitcoin}/><span>Bitcoin BTC</span></td>
          <td>US$ 25.499,52</td>
          <td>+5,65%</td>
          <td><button>Buy</button></td>
        </tr>
        <tr>
          <td>01</td>
          <td className='cryptonName'><img src={Bitcoin}/><span>Bitcoin BTC</span></td>
          <td>US$ 25.499,52</td>
          <td>+5,65%</td>
          <td><button>Buy</button></td>
        </tr>
      </tbody>
    </S.Table>
  )
}


