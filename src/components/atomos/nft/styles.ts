import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  height: 112px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);

  svg {
    border-radius: 0 8px 8px 0;
  }

  @media (max-width: 677px) {
    flex-direction: column;
    height: fit-content;

    svg {
      width: 100%;
      border-radius: 0 0 8px 8px;
      margin: 0px;
    }
  }
`;

export const Descrition = styled.div`
  padding: 16px;
  width: 140px;

  b {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.secondary[600]};
    margin-bottom: 6px;
  }

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.secondary[500]};
    margin-bottom: 16px;
    line-height: 14px;
  }

  span {
    color: ${({ theme }) => theme.primary[500]};
    font-size: 12px;
  }

  @media (max-width: 677px) {
    width: fit-content;
  }
`;
