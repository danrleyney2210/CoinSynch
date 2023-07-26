import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 64px;
  box-shadow: 0px -4px 8px 0px rgba(77, 77, 77, 0.1);
  position: fixed;
  bottom: 0;
  background-color: #fff;

  span {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary[500]};
  }
`;
