import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 112px;
  max-width: 592px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1368px) {
    max-width: 100%;
    margin-bottom: 16px;
  }
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary[100]};
`;
export const BalanceIn = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  width: 312px;

  @media (max-width: 1368px) {
    width: 100%;
  }
`;

export const Value = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 280px;
  border-radius: 0 8px 8px;
  background-color: ${({ theme }) => theme.primary[100]};

  > h3 {
    color: ${({ theme }) => theme.secondary[600]};
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
  }

  @media (max-width: 1368px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h4 {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary[600]};
  }

  span {
    color: ${({ theme }) => theme.secondary[500]};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;
