import { useState } from "react";
import { useAuth } from "../../../context/Auth";
import { Accordion } from "../../atomos/accordion";
import { Table } from "../../atomos/table";
import * as S from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { Spiner } from "../../atomos/Spiner";



export const TopCryptos = () => {
  const { coins, getCoin, isLoading } = useAuth();
  const [size, setSize] = useState(5);

  const viewMore = () => {
    const size = coins.length > 5 ? 5 : 10;
    setSize(size);
    getCoin(size);
  };

  return (
    <S.Wrapper className="container" id="topCryptos">
      <h1>Top Cryptos</h1>
      <S.ContentTable>
        {
          isLoading ? <Spiner /> : <Table data={coins} />
        }
      </S.ContentTable>

      <S.ContentAccordion>
        <Accordion items={coins} keepOthersOpen={true} />
      </S.ContentAccordion>

      <span onClick={() => viewMore()}>
        {size > 5 ? (
          "View Less -"
        ) : (
          <>
            'View more' <AiOutlinePlus />
          </>
        )}
      </span>
    </S.Wrapper>
  );
};
