import { styled } from "styled-components";

export const Table = styled.table`
  width: 100%;
  color: #5d6670;

  tr {
    > th {
      text-align: start;
      font-size: 14px;
      font-weight: 400;
      color: #8c8a97;
    }
  }

  tbody {
    tr {
      height: 64px;
      width: 100%;

      td {
        color: ${({ theme }) => theme.secondary[500]};
      }

      td:nth-child(1) {
        width: 162px;
      }

      td:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 16px;
        height: 64px;
        width: 346px;

        > span {
          margin: 0;
          display: block;
          color: ${({ theme }) => theme.secondary[500]};
        }

        > img,
        svg {
          width: 32px;
          height: 32px;
        }
      }

      td:nth-child(3) {
        width: 323px;
      }

      td:nth-child(4) {
        width: 271px;
      }

      td:nth-child(5) {
        width: 104px;
      }
    }

    tr:nth-child(even) {
      background-color: #f6f6f6;
    }
  }

  button {
    background-color: ${({ theme }) => theme.Tertiary[700]};
    border-radius: 32px;
    font-size: 14px;
    padding: 8px 28px;
    border: none;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.Tertiary[600]};
    }
  }

  @media (max-width: 1220px) {
    padding: 0 24px;
    tbody {
      tr {
        td {
          width: fit-content;
        }

        td:nth-child(2) {
          width: 200px;
        }
      }
    }
  }

  @media (max-width: 715px) {
    padding: 0 24px;
    tbody {
      tr {
        td {
          width: fit-content;
        }

        td:nth-child(2) {
          width: 150px;
        }
      }
    }
  }
`;
