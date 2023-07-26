import { styled } from "styled-components";

export const Wrapper = styled.div`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  padding: 24px;
  height: 389px;
  margin-top: 32px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;

    > p {
      color: ${({ theme }) => theme.secondary[600]};
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    b {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      color: ${({ theme }) => theme.secondary[600]};
      margin-bottom: 8px;
      margin-top: 24px;
    }

    span {
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: ${({ theme }) => theme.secondary[500]};
    }
  }
`;
