import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
`;

export const Content = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f4f3f8;
`;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const ContentBtn = styled.div`
  max-width: 100px;
  width: 100%;
`;

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

        &:hover {
          color: ${theme.primary[500]};
        }
      }
    }
  `};

  @media (max-width: 588px) {
    display: none;
  }
`;

export const ContentCoint = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const Exchange = styled.div`
  max-width: 360px;
  width: 100%;
  display: flex;
  /* background-color: #ccc; */

  overflow: hidden;

  cursor: pointer;

  > p {
    /* overflow: hidden; */
    color: ${({ theme }) => theme.secondary[600]};
    white-space: nowrap;
    font-size: 14px;
    animation: moveLeft 15s linear infinite;

    .value {
      margin-right: 24px;
    }

    .gain-color {
      color: #149e55;
    }

    .loss-color {
      color: #a12226;
    }
  }

  gap: 24px;
  align-items: center;

  @keyframes moveLeft {
    from {
      transform: translateX(100%); /* Inicia a animação com o texto fora do lado direito */
    }
    to {
      transform: translateX(-100%); /* Termina a animação com o texto fora do lado esquerdo */
    }
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

export const ContentButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
    width: 167px;

    > p {
      color: ${theme.secondary[600]};
      font-size: 14px;
      cursor: pointer;
    }

    @media (max-width: 968px) {
      width: 200px;
    }
  `}

  @media (max-width: 588px) {
    display: none;
  }
`;

export const ContentMobile = styled.div`
  width: 100%;
  box-shadow: 0px 4px 8px 0px rgba(77, 77, 77, 0.1);
  display: flex;
  justify-content: center;
`;
export const IsMobileExchange = styled.div`
  max-width: 360px;
  width: 100%;
  display: none;
  overflow: hidden;
  height: 24px;
  align-items: center;

  cursor: pointer;

  > p {
    overflow: hidden;
    color: ${({ theme }) => theme.secondary[600]};
    white-space: nowrap;
    font-size: 12px;
    animation: moveLeft 10s linear infinite;

    .value {
      margin-right: 24px;
    }

    .gain-color {
      color: #149e55;
    }

    .loss-color {
      color: #a12226;
    }
  }

  gap: 24px;
  align-items: center;

  @keyframes moveLeft {
    from {
      transform: translateX(100%); /* Inicia a animação com o texto fora do lado direito */
    }
    to {
      transform: translateX(-100%); /* Termina a animação com o texto fora do lado esquerdo */
    }
  }

  @media (max-width: 968px) {
    display: flex;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

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

export const ContentInputPassword = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  gap: 9px;

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.secondary[500]};
  }
`;

export const MenuMobile = styled.div`
  display: none;

  @media (max-width: 588px) {
    display: block;
  }
`;
