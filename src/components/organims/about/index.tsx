import * as S from "./styles";
import Icon1 from "../../../assets/icons/icon1.svg";
import Icon2 from "../../../assets/icons/icon2.svg";
import Icon3 from "../../../assets/icons/icon3.svg";
import Icon4 from "../../../assets/icons/icon4.svg";
import { Button } from "../../atomos/button";

export const About = () => {
  return (
    <S.Wrapper id="about">
      <S.Container>
        <S.isMobileContentDescription>
          <p className="subTitle">Lorem ipsum </p>
          <h2 className="title">Lorem ipsum </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
            luctus venenatis, lectus magna fringilla urna, porttitor
          </p>

          <Button text="Sign up now" />
        </S.isMobileContentDescription>

        <S.ContetCard>
          <S.RowCard>
            <S.Card>
              <img src={Icon1} />
              <S.SubTitle>For your company</S.SubTitle>
              <S.Title>Crypto Solutions</S.Title>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</span>
            </S.Card>

            <S.Card className="left">
              <img src={Icon2} />
              <S.SubTitle>For your company</S.SubTitle>
              <S.Title>Crypto Solutions</S.Title>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</span>
            </S.Card>
          </S.RowCard>

          <S.RowCard className="right">
            <S.Card>
              <img src={Icon3} />
              <S.SubTitle>For your company</S.SubTitle>
              <S.Title>Crypto Solutions</S.Title>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</span>
            </S.Card>

            <S.Card>
              <img src={Icon4} />
              <S.SubTitle>For your company</S.SubTitle>
              <S.Title>Crypto Solutions</S.Title>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</span>
            </S.Card>
          </S.RowCard>
        </S.ContetCard>

        <S.ContentDescription>
          <p className="subTitle">Lorem ipsum </p>
          <h2 className="title">Lorem ipsum </h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
            luctus venenatis, lectus magna fringilla urna, porttitor
          </p>

          <Button text="Sign up now" />
        </S.ContentDescription>
      </S.Container>


      <S.ContetCardMobile>
        <S.RowCard>
          <S.Card className="first-card">
            <img src={Icon1} />
            <S.SubTitle>For your company</S.SubTitle>
            <S.Title>Crypto Solutions</S.Title>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</span>
          </S.Card>

          <S.Card className="left">
            <img src={Icon2} />
            <S.SubTitle>For your company</S.SubTitle>
            <S.Title>Crypto Solutions</S.Title>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</span>
          </S.Card>
        </S.RowCard>

        <S.RowCard className="right">
          <S.Card>
            <img src={Icon3} />
            <S.SubTitle>For your company</S.SubTitle>
            <S.Title>Crypto Solutions</S.Title>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</span>
          </S.Card>

          <S.Card>
            <img src={Icon4} />
            <S.SubTitle>For your company</S.SubTitle>
            <S.Title>Crypto Solutions</S.Title>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</span>
          </S.Card>
        </S.RowCard>
      </S.ContetCardMobile>
    </S.Wrapper>
  );
};
