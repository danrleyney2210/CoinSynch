import styled from "styled-components";
import { TContentBody } from "./types";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const ContentBody = styled.div<TContentBody>`
  background-color: ${({ theme }) => theme.secondary[200]};
  height: 100vh;
  padding-top: 64px;
  padding-left: ${(props) => (props.isOpen ? "256px" : "80px")};

  h1 {
    color: #000;
  }

  @media (max-width: 1368px) {
    padding-left: 48px;
  }
`;

export const Body = styled.div`
  padding: 56px;

  @media (max-width: 1368px) {
    padding-left: 0;
  }
`;

export const Diagnostic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1368px) {
    flex-wrap: wrap;

    /* display: grid;
    grid-template-columns: repeat(2, 1fr); */
  }
`;
