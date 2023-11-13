import { Button } from "../../atomos/button";
import * as S from "./styles";
import Logo from "../../../assets/svg/logo.svg";
import { Modal } from "../../atomos/modal";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { ReactSVG } from "react-svg";
import MenuMobile from "../../../assets/icons/menu.svg";
import { useAuth } from "../../../context/Auth";
import { ModalSignUp } from "../ModalSignUp";
import { useForm } from "react-hook-form";
import { InputRHF } from "../../atomos/RFH/InputRHF";

import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchema } from "./signUpSchema";

export const Menu = () => {
  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState<boolean>(false);
  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState<boolean>(false);

  const { coins, formatCoint, formatChange, AuthLogin } = useAuth();

  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: SignUpSchema) => {
    AuthLogin(data);
  };

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
              {coins &&
                coins.map((coin) => (
                  <b key={coin.rank}>
                    {coin.symbol.toLocaleUpperCase()} {formatCoint(coin.price)}
                    <span className={coin.change > 0 ? "gain-color value" : "loss-color value"}>
                      {formatChange(coin.change)} %
                    </span>
                  </b>
                ))}
            </p>
          </S.Exchange>

          <S.ContentButton>
            <p onClick={() => setIsOpenModalSignIn(true)}>Sign in</p>
            <S.ContentBtn>
              <Button text="Sign up" size="small" onClick={() => setIsOpenModalSignUp(true)} />
            </S.ContentBtn>
          </S.ContentButton>

          <S.MenuMobile>
            <ReactSVG src={MenuMobile} />
          </S.MenuMobile>
        </S.ContentCoint>
      </S.Content>

      <S.ContentMobile>
        <S.IsMobileExchange>
          <p>
            {coins &&
              coins.map((coin) => (
                <b key={coin.rank}>
                  {coin.symbol.toLocaleUpperCase()} {formatCoint(coin.price)}
                  <span className={coin.change > 0 ? "gain-color value" : "loss-color value"}>
                    {formatChange(coin.change)}
                  </span>
                </b>
              ))}
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
          <div>
            <InputRHF
              control={control}
              name="email"
              placeholder="Email"
              id="email"
              type="email"
              icon={<AiOutlineMail />}
            />
          </div>
          <S.ContentInputPassword>
            <div>
              <InputRHF
                control={control}
                name="password"
                id="password"
                isPassword
                placeholder="Password"
                type="password"
                icon={<BiLock />}
              />
            </div>

            <span>Forgot password?</span>
            <Button
              disabled={!formState.isValid}
              text="Sign in"
              size="medium"
              onClick={() => handleSubmit(onSubmit)()}
            />
          </S.ContentInputPassword>
          <p>
            Don’t have an account? <b>Sign up to</b> <span>Coin</span>
            <strong>Synch</strong>
          </p>
        </S.FormSign>
      </Modal>

      <Modal isOpen={isOpenModalSignUp} onClose={() => setIsOpenModalSignUp(false)}>
        <ModalSignUp />
      </Modal>
    </S.Wrapper>
  );
};
