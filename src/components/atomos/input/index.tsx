import * as S from "./styles";
import { IInputProps } from "./types";
import IconEyes from "../../../assets/icons/eyes.svg";
import { ReactSVG } from "react-svg";
import { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";

export const Input = ({
  label,
  type,
  name,
  value,
  icon,
  placeholder,
  isPassword,
  errorMessage,
  ...rest
}: IInputProps) => {
  const [isType, setIsType] = useState(type);

  function handleChangeType() {
    if (isType === "text") {
      setIsType("password");
    } else if (isType === "password") {
      setIsType("text");
    }
  }

  return (
    <S.Wrapper label={label}>
      <label htmlFor={name}>{label}</label>
      <S.ContentInput>
        {icon && icon}
        <input
          type={isType}
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          {...rest}
        />
        {isType === "text" && isPassword && <ReactSVG src={IconEyes} onClick={handleChangeType} />}
        {isType === "password" && isPassword && <BsEyeSlash onClick={handleChangeType} />}
      </S.ContentInput>
      {errorMessage && <span>{errorMessage}</span>}
    </S.Wrapper>
  );
};
