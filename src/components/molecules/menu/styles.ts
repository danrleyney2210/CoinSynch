import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const ContentCoint = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`

export const Ul = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 24px;

    li {
      list-style: none;


      > a {
        text-decoration: none;
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        color: ${theme.secondary[600]};
      }
    }
  `};
`;

export const Exchange = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`

export const Coin = styled.div`
  ${({theme}) => css`
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${theme.secondary[600]};

    span:nth-child(2) {
      color: ${theme.secondary[500]};
    }

    .gain-color {
      color: #149E55;
    }
    .loss-color {
      color: #A12226;
    }
  `}
`

export const ContentButton = styled.div`
  ${({ theme }) => css`

  display: flex;
    align-items: center;
    gap: 24px;

    > span {
      color: ${theme.secondary[600]};
      font-size: 14px;
    }
  `}
`
