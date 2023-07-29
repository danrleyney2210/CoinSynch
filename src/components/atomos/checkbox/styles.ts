import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  label {
    font-size: 14px;
    color: ${({ theme }) => theme.secondary[500]};
    padding-left: 16px;
  }

  input[type="checkbox"] {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.primary[500]};
    cursor: pointer;
  }
`;
