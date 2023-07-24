import { Table } from "../../atomos/table";
import * as S from "./styles";
import { AiOutlinePlus } from "react-icons/ai";

export const TopCryptos = () => {
  return (
    <S.Wrapper className="container" id="topCryptos">
      <h1>Top Cryptos</h1>
      <Table />
      <span>
        View more <AiOutlinePlus />
      </span>
    </S.Wrapper>
  );
};
