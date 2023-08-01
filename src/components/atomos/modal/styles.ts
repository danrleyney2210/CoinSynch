import { styled } from "styled-components";

export const Wrapper = styled.div``;
export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-items: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #5d6670;
    opacity: 0.9;
  }
`;

export const ContentModal = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  max-width: 448px;
  width: 100%;
  z-index: 100;
  margin: 0 auto;
  position: relative;

  > svg,
  img {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    max-width: 350px;
  }
`;
