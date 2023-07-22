import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 130px;
  display: flex;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F7F7 100%);
`;

export const Container = styled.div`
  max-width: 1216px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 32px;
  align-items: center;
`

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: ${({theme}) => theme.primary[500]};
  margin-bottom: 4px;
  margin-top: 16px;
`

export const Title = styled.p`
  font-size: 24px;
  color: #5D6670;
  font-weight: 700;
  margin-bottom: 8px;
`

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
`

export const RowCard = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`

export const Card = styled.div`
  height: 268px;
  width: 280px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-shadow: 0px 12px 24px 0px #0000000D;

  > span {
    font-weight: 400;
    color: #5D6670;

  }

  > svg, img {
    width: 64px;
    height: 64px;
  }
`

export const ContentDescription = styled.div`
  width: 100%;
  max-width: 406px;
  display: flex;
  flex-direction: column;

  .subTitle {
    color: ${({theme}) => theme.primary[500]};
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 4px;
  }

  .title {
    color: #5D6670;
    font-weight: 700;
    font-size: 40px;
  }

  .description {
    font-weight: 400;
    font-size: 1rem;
    color: #5D6670;
    margin-bottom: 40px;
    line-height: 24px;
  }

  > button {
    padding: 12px 44.5px;
  }

`
