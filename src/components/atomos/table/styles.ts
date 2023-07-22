import { styled } from "styled-components";

export const Table = styled.table`
  width: 100%;

  }

  tr {
    > th {
      text-align: start;
      font-size: 14px;
      font-weight: 400;
      color: #8C8A97;
    }
  }

  tbody {
    width: 100%;

    tr {
      height: 64px;

      &:hover {
        background-color: ${({theme}) => theme.primary[100]} !important;
      }
    }

    tr:nth-child(even) {

      background-color: #F6F6F6;



      td:nth-child(1) {

      }



    }

    .cryptonName {

    }
  }
`;
