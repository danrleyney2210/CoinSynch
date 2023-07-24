import * as S from './styles'
import Bitcoin from '../../../assets/icons/bitcoin.svg'
import BitEthereum from '../../../assets/icons/ethereum.svg'
import Cardano from '../../../assets/icons/cardano.svg'
import Solana from '../../../assets/icons/solana.svg'
import { ItableProps } from './types'

const data: ItableProps[] = [
  {
    id: '#1',
    crypton: {
      icon: Bitcoin,
      description: 'Bitcoin BTC'
    },
    price: 'US$ 25.499,52',
    change: '+5,65%',
  },
  {
    id: '#2',
    crypton: {
      icon: BitEthereum,
      description: 'Bitcoin BTC'
    },
    price: 'US$ 15.499,52',
    change: '+5,65%',
  },
  {
    id: '#3',
    crypton: {
      icon: Cardano,
      description: 'Bitcoin BTC'
    },
    price: 'US$ 5.499,52',
    change: '+5,65%',
  },
  {
    id: '#4',
    crypton: {
      icon: Solana,
      description: 'Bitcoin BTC'
    },
    price: 'US$ 2.499,52',
    change: '+5,65%',
  }
]

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
        {
          data.map((item: ItableProps) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.crypton.icon} />
                <span>{item.crypton.description}</span>
              </td>
              <td>{item.price}</td>
              <td>{item.change}</td>
              <td><button>Buy</button></td>
            </tr>
          ))
        }
      </tbody>
    </S.Table>
  )
}


