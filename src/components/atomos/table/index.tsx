import * as S from "./styles";
import { IcoinProps } from "../../../context/types";
import { ItableProps } from "./types";
import { useAuth } from "../../../context/Auth";

export const Table = ({ data }: ItableProps) => {
  const { formatCoint, formatChange, formatName } = useAuth();

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
        {data.map((item: IcoinProps) => (
          <tr key={item.rank}>
            <td>{item.rank}</td>
            <td>
              <img src={item.icon} alt="Coin Name" />
              <p>
                {formatName(item.name)} <span>{item.symbol.toLocaleUpperCase()}</span>
              </p>
            </td>
            <td>US{formatCoint(item.price)}</td>
            <td className={item.change > 0 ? 'gain-color' : 'loss-color'}>{formatChange(item.change)}</td>
            <td>
              <button>Buy</button>
            </td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  );
};
