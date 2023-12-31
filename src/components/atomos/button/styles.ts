import { styled } from "styled-components";
import { IButtonSizeProps } from "./types";

export const Button = styled.button<IButtonSizeProps>`
  padding: ${(props) => props.t === "small" && "8px 26.5px"};
  padding: ${(props) => props.t === "medium" && "12px 0px"};
  padding: ${(props) => props.t === "large" && "14px 0px"};

  background-color: ${({ theme }) => theme.primary[500]};
  width: fit-content;
  border-radius: 32px;
  color: #ffff;
  border: none;
  font-size: ${(props) => (props.t === "small" ? "14px" : "16px")};
  cursor: pointer;
  width: 100%;
  font-weight: normal;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;

    &:hover {
      background-color: #ccc !important;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.primary[400]};
  }
`;
