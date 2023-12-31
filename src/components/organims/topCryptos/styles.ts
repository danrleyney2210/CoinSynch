import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 120px;

  > h1 {
    color: #5d6670;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 48px;
  }

  span {
    cursor: pointer;
    margin-top: 32px;
    text-decoration: none;
    color: ${({ theme }) => theme.primary[500]};
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 1220px) {
    padding: 80px 24px !important;
  }

  @media (max-width: 600px) {
    padding-top: 56px !important;
    padding-bottom: 56px !important;

    > h1 {
      margin-bottom: 16px;
      font-size: 20px;
    }
  }
`;

export const ContentTable = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContentAccordion = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
