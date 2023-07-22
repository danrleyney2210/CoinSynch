

import { styled } from "styled-components";
import { IButtonSizeProps } from "./types";

export const Button = styled.button<IButtonSizeProps>`
  padding: ${(props) => props.tSize === 'small' && '8px 26.5px'};
  padding: ${(props) => props.tSize === 'medium' && '12px 77px'};
  background-color: ${({theme}) => theme.primary[500]};
  width: fit-content;
  border-radius: 32px;
  color: #ffff;
  border: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.primary[400]};
  }

`
