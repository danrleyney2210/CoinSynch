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

  @media (max-width: 1011px) {
    justify-content: center;
    > img {
      display: none;
    }
  }
`;

export const ContenetBtn = styled.div`
  max-width: 278px;
  width: 100%;

  @media (max-width: 1011px) {
    display: flex;
    justify-content: center;
    max-width: 100%;

    button {
      width: 180px;
      font-size: 14px;
    }
  }
`;

export const ContentText = styled.div`
  ${({ theme }) => css`
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

  @media (max-width: 1011px) {
    margin-top: 56px;
    justify-content: center;

    > p {
      text-align: center;
      font-size: 14px;
      line-height: 24px;
      margin-top: 8px;
      margin-bottom: 24px;
    }
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    color: ${theme.primary[400]};
    max-width: 590px;
    font-weight: 700;
  `}

  @media (max-width: 1011px) {
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const ContentCard = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 1011px) {
    margin-top: 24px;
    justify-content: center;
  }
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.primary[100]};
    color: ${theme.primary[500]};
    padding: 6px 16px;
    border-radius: 4px;

    > span {
      font-size: 16px;
    }
  `}

  @media (max-width: 1011px) {
    padding: 6px 16px;
    > span {
      font-size: 12px;
    }
  }
`;
