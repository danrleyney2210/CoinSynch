import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80px;
  height: 100vh;
  border-top: 1px solid var(--secondary-300, #e0deea);
  border-bottom: 1px solid var(--secondary-300, #e0deea);
  padding: 48px 24px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 32px;

  svg {
    cursor: pointer;
  }
`;
