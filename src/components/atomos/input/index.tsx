import * as S from "./styles";
import { IInputProps } from "./types";
import IconEyes from '../../../assets/icons/eyes.svg'
import { ReactSVG } from 'react-svg'
import { useState } from "react";
import { BsEyeSlash } from 'react-icons/bs'

export const Input = ({ label, type, name, icon, placeholder, ...rest }: IInputProps) => {
  const [isType, setIsType] = useState(type);

  function handleChangeType() {
    if (isType === 'text') {
      setIsType('password')
    } else if (isType === 'password') {
      setIsType('text');
    }
  }

  return (
    <S.Wrapper label={label}>
      <label htmlFor="">{label}</label>
      <S.ContentInput>
        {
          icon && icon
        }
        <input type={isType} name={name} id={name} placeholder={placeholder} {...rest} />

        {type === 'text' && <BsEyeSlash onClick={handleChangeType} />}
        {type === 'password' && <ReactSVG src={IconEyes} onClick={handleChangeType} />}

      </S.ContentInput>
    </S.Wrapper>
  );
};
