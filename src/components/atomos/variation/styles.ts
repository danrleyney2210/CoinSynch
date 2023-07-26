import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 112px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 677px) {
    flex-direction: column;
    height: fit-content;
  }
`;

export const Daily = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary[500]};
    margin-bottom: 16px;
  }

  .content-coin {
    display: flex;
    flex-direction: column;
  }

  .gain {
    color: ${({ theme }) => theme.Tertiary[700]};
  }

  .loss {
    color: red;
  }

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
  }

  @media (max-width: 677px) {
    .content-coin {
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Coin = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  svg {
    width: 24px;
    height: 24px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.secondary[500]};
  }

  @media (max-width: 677px) {
    margin-bottom: 0;
  }
`;
