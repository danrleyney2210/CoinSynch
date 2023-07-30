import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(77, 77, 77, 0.1);
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 32px;
  /* position: relative; */
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
  cursor: pointer;

  svg {
    width: 8px;
    height: 8px;
    cursor: pointer;
  }
`;

export const Logout = styled.div`
  position: absolute;
  height: fit-content;
  width: 150px;
  background-color: #fff;
  padding: 16px;
  right: 30px;
  top: 70px;
  bottom: -16px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > span {
    color: ${({ theme }) => theme.secondary[500]};
    font-size: 14px;
    cursor: pointer;
  }
`;
