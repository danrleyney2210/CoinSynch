import * as S from "./styles";

export const Checkbox = () => {
  return (
    <S.Wrapper>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        I have read and accept the Privacy Policy and Terms of User Sign up.
      </label>
    </S.Wrapper>
  );
};
