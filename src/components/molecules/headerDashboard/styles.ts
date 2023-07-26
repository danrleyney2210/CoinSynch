import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(77, 77, 77, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 32px;
`;

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: red;
  cursor: pointer;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary[500]};

  svg {
    width: 8px;
    height: 8px;
    cursor: pointer;
  }
`;
