import { useState } from "react";
import { FooterDashboard } from "../../components/molecules/footerDasboard";
import { HeaderDashboard } from "../../components/molecules/headerDashboard";
import { Sidebar } from "../../components/molecules/sidebar";
import * as S from "./styles";

import { Banlance } from "../../components/atomos/balance";
import { Variation } from "../../components/atomos/variation";
import { Nft } from "../../components/atomos/nft";
import { MyWallet } from "../../components/atomos/myWallate";

export const Dashboard = () => {
  const [isOpen] = useState(false)


  return (
    <S.Wrapper>
      <S.ContentMain>
        <HeaderDashboard />
        <Sidebar />
      </S.ContentMain>

      <S.ContentBody isOpen={isOpen}>
        <S.Body>
          <S.Diagnostic>
            <Banlance />
            <Variation />
            <Nft />
          </S.Diagnostic>
          <MyWallet />

        </S.Body>
      </S.ContentBody>

      <FooterDashboard />
    </S.Wrapper>
  );
};
