import { Accordion } from "../../atomos/accordion";
import { Table } from "../../atomos/table";
import * as S from "./styles";
import { AiOutlinePlus } from "react-icons/ai";

const data = [
  {
    id: 1,
    label: 'Bitcoin',
    toggled: false,
    price: 'US$ 25.499,52',
    change: '+5,65%'

  },

  {
    id: 2,
    toggled: false,
    label: 'Etherium',
    price: 'US$ 25.499,52',
    change: '+5,65%'
  },

]

export const TopCryptos = () => {
  return (
    <S.Wrapper className="container" id="topCryptos">
      <h1>Top Cryptos</h1>
      <S.ContentTable>
        <Table />
      </S.ContentTable>

      <S.ContentAccordion>
        <Accordion items={data} keepOthersOpen={true} />
      </S.ContentAccordion>

      <span>
        View more <AiOutlinePlus />
      </span>
    </S.Wrapper>
  );
};
