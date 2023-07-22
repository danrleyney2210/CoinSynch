

import { css, styled } from "styled-components";

export const Button = styled.button`
  ${({ theme}) => css`
    background-color: ${theme.primary[500]};
    border-radius: 32px;
    color: #ffff;
    border: none;
    padding: 8px 26.5px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.primary[400]};
    }
  `}
`
