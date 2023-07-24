import { Button } from "../../atomos/button";
import * as S from "./styles";
import Logo from "../../../assets/svg/logo.svg";
import { Modal } from "../../atomos/modal";
import { useState } from "react";
import { Input } from "../../atomos/input";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from 'react-icons/bi'
import User from '../../../assets/icons/user.svg'
import { ReactSVG } from "react-svg";

export const Menu = () => {
  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState<boolean>(false);
  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState<boolean>(false);

  return (
    <S.Wrapper>
      <S.Content className="container">
        <S.ContentLogo>
          <img src={Logo} />
          <S.Ul>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#topCryptos">Top Cryptos</a>
            </li>
          </S.Ul>
        </S.ContentLogo>

        <S.ContentCoint>
          <S.Exchange>
            <p>
              <span>BIT R$ 23,62</span>
              <span className="gain-color value"> +7,082</span>

              <span> DOG R$ 23,62</span>
              <span className="loss-color value"> +7,082</span>

              <span> ETH R$ 23,62</span>
              <span className="loss-color value"> -5,230</span>

              <span> SQL R$ 23,62</span>
              <span className="gain-color value"> +3,230</span>

              <span> XLM R$ 23,62</span>
              <span className="loss-color value"> -1,230</span>
            </p>
          </S.Exchange>

          <S.ContentButton>
            <span onClick={() => setIsOpenModalSignIn(true)}>Sign in</span>
            <S.ContentBtn>
              <Button text="Sign up" size="small" onClick={() => setIsOpenModalSignUp(true)} />
            </S.ContentBtn>
          </S.ContentButton>
        </S.ContentCoint>
      </S.Content>

      <S.ContentMobile>
        <S.IsMobileExchange>
          <p>
            <span>BIT R$ 23,62</span>
            <span className="gain-color value"> +7,082</span>

            <span> DOG R$ 23,62</span>
            <span className="loss-color value"> +7,082</span>

            <span> ETH R$ 23,62</span>
            <span className="loss-color value"> -5,230</span>

            <span> SQL R$ 23,62</span>
            <span className="gain-color value"> +3,230</span>

            <span> XLM R$ 23,62</span>
            <span className="loss-color value"> -1,230</span>
          </p>
        </S.IsMobileExchange>
      </S.ContentMobile>

      <Modal isOpen={isOpenModalSignIn} onClose={() => setIsOpenModalSignIn(false)}>
        <S.TitleModal>
          Sign in to{" "}
          <b>
            Coin<strong>Synch</strong>
          </b>
        </S.TitleModal>

        <S.FormSign action="">
          <Input name="email" placeholder="Email" type="email" icon={<AiOutlineMail />} />

          <S.ContentInputPassword>
            <Input name="password" placeholder="Password" type="password" icon={<BiLock />} />
            <span>Forgot password?</span>
            <Button text="Sign in" size="medium" />
          </S.ContentInputPassword>
          <p>
            Don’t have an account? <b>Sign up to</b> <span>Coin</span><strong>Synch</strong>
          </p>
        </S.FormSign>
      </Modal>

      <Modal isOpen={isOpenModalSignUp} onClose={() => setIsOpenModalSignUp(false)}>
        <S.TitleModal>
          Sign up to{" "}
          <b>
            Coin<strong>Synch</strong>
          </b>
        </S.TitleModal>

        <S.FormSign action="">
          <Input name="name" placeholder="Name" type="text" icon={<ReactSVG src={User} />} />
          <Input name="email" placeholder="Email" type="email" icon={<AiOutlineMail />} />
          <Input name="password" placeholder="Password" type="password" icon={<BiLock />} />
          <Input name="confirmPassword" placeholder="Password" type="password" icon={<BiLock />} />

          <Button text="Sign up" size="medium" />

          <p>
            Already have and account? <b>Sign up to</b> <span>Coin</span><strong>Synch</strong>
          </p>
        </S.FormSign>
      </Modal>
    </S.Wrapper>
  );
};
