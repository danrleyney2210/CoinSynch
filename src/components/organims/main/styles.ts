import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentMain = styled.div`
  display: flex;
  justify-content: space-between;

  > img {

    margin-top: 100px;
  }
`

export const ContentText = styled.div`
${({theme}) => css`

  margin-top: 160px;
  display: flex;
  flex-direction: column;

  > p {
    margin-top: 24px;
    margin-bottom: 32px;
    max-width: 590px;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    color: ${theme.secondary[600]};
  }
`}
`;

export const Title = styled.h1`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.lg};
    color: ${theme.primary[400]};
    max-width: 590px;
    font-weight: 700;
  `}
`

export const ContentCard = styled.div`
margin-top: 80px;
  display: flex;
  gap: 32px;
  align-items: center;
`

export const Card = styled.div`
  ${({theme}) => css`

    padding:16px;
    background-color: ${theme.primary[100]};
    color: ${theme.primary[500]};



`}

`
