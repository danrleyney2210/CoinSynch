import styled from "styled-components";
import bg from "../../../assets/image/background.png";

export const Wrapper = styled.div`
  height: 476px;
  width: 100%;

  .wrapper-footer {
    height: 412px;
    width: 100%;
    background-image: url(${bg});
    background-size: cover;
    background-color: ${({ theme }) => theme.primary[600]};

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 1220px) {
        padding: 0 24px;
      }
    }
  }

  .footer-bottom {
    background-color: #fff;
    width: 100%;

    .content-footer {
      height: 64px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1216px;
      width: 100%;
      margin: 0 auto;

      > span {
        font-size: 14px;
        color: #5d6670;
      }
    }

    @media (max-width: 1220px) {
      padding: 0 24px;

      .content-footer {
        justify-content: center;
        > span {
          display: none;
        }
      }
    }
  }

  @media (max-width: 1220px) {
    .footer-bottom {
      height: 56px;
    }
  }

  @media (max-width: 850px) {
    .wrapper-footer {
      height: fit-content;
      padding: 56px 0;
    }

    .container {
      flex-direction: column;
      gap: 40px;
    }
  }
`;

export const ContentMain = styled.div`
  padding: 120px 0;
  display: flex;
  flex-direction: column;

  h4 {
    color: ${({ theme }) => theme.primary[200]};
    font-size: ${({ theme }) => theme.font.sizes.md};
    font-weight: 700;
    margin-bottom: 6px;
  }

  h2 {
    font-weight: 700;
    color: #fff;
    font-size: ${({ theme }) => theme.font.sizes.lmd};
    margin-bottom: 16px;
  }

  p {
    color: #fff;
    line-height: 24px;
    max-width: 385px;
    width: 100%;
  }

  @media (max-width: 850px) {
    padding: 0;

    h4 {
      font-size: 16px;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const ContentInput = styled.div`
  max-width: 384px;
  width: 100%;

  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 21px;
`;
