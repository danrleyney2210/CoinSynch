import { styled } from "styled-components";
import { ITypeProps } from "./types";

export const Wrapper = styled.div<ITypeProps>`
  display: flex;
  flex-direction: column;
  /* gap: 16px; */
  width: 100%;

  label {
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    margin-bottom: ${(props) => (props.label ? "16px" : "")};
  }
`;

export const ContentInput = styled.div`
  background-color: red;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  display: flex;
  height: 48px;
  width: 100%;
  border: 1px solid var(--secondary-300, #e0deea);
  background: #fff;

  svg {
    cursor: pointer;
  }

  > svg,
  img {
    width: 16px;
    height: 16px;
    color: #e0deea;
  }

  input {
    border: none;
    outline: none;
    background-color: #fff;
    width: 100%;

    &::placeholder {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      color: ${({ theme }) => theme.secondary[400]};
    }
  }
`;
