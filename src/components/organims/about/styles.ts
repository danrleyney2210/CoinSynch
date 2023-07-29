import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 130px;
  display: flex;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f7f7f7 100%);

  @media (max-width: 1220px) {
    padding: 80px 24px;
  }

  @media (max-width: 600px) {
    padding-bottom: 56px;
  }
`;

export const Container = styled.div`
  max-width: 1216px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 1220px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.primary[500]};
  margin-bottom: 4px;
  margin-top: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #5d6670;
  font-weight: 700;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const ContetCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 696px;

  .left {
    justify-content: flex-start;
  }

  .right {
    justify-content: flex-end;
  }

  @media (max-width: 773px) {
    width: 100%;
    padding: 0 24px;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    padding: 0;
  }
`;

export const RowCard = styled.div`
  /* width: 100%; */
  display: flex;
  gap: 32px;

  @media (max-width: 600px) {
    width: fit-content;
  }
`;

export const Card = styled.div`
  height: 268px;
  max-width: 268px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-shadow: 0px 12px 24px 0px #0000000d;

  > span {
    font-weight: 400;
    color: #5d6670;
  }

  > svg,
  img {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 260px;

    > span {
      font-size: 14px;
    }

    > svg,
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const ContentDescription = styled.div`
  width: 100%;
  max-width: 406px;
  display: flex;
  flex-direction: column;

  .subTitle {
    color: ${({ theme }) => theme.primary[500]};
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 4px;
  }

  .title {
    color: #5d6670;
    font-weight: 700;
    font-size: 40px;
  }

  .description {
    font-weight: 400;
    font-size: 1rem;
    color: #5d6670;
    margin-bottom: 40px;
    line-height: 24px;
  }

  > button {
    padding: 12px 44.5px;
  }

  @media (max-width: 1220px) {
    display: none;
  }
`;

export const isMobileContentDescription = styled.div`
  width: 100%;
  max-width: 494px;
  display: none;
  flex-direction: column;

  .subTitle {
    color: ${({ theme }) => theme.primary[500]};
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 4px;
  }

  .title {
    color: #5d6670;
    font-weight: 700;
    font-size: 40px;
  }

  .description {
    font-weight: 400;
    font-size: 1rem;
    color: #5d6670;
    margin-bottom: 40px;
    line-height: 24px;
  }

  > button {
    padding: 12px 44.5px;
  }

  @media (max-width: 1220px) {
    display: block;
  }
`;
