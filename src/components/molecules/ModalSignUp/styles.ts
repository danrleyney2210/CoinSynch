import { styled } from "styled-components";

export const Wrapper = styled.div``;

export const TitleModal = styled.h2`
  font-size: 20px;
  color: #5d6670;
  font-weight: 400;
  text-align: center;
  margin-bottom: 24px;

  > b {
    color: ${({ theme }) => theme.primary[500]};
    font-weight: 700;

    strong {
      color: #8c8a97;
      font-weight: 700;
    }
  }
`;

export const FormSign = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > p {
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.secondary[500]};

    > b {
      color: ${({ theme }) => theme.secondary[500]};
      font-weight: 700;
    }

    > span {
      color: ${({ theme }) => theme.primary[500]};
      font-weight: 700;
    }

    > strong {
      font-weight: 700;
      color: ${({ theme }) => theme.secondary[500]};
    }
  }
`;
