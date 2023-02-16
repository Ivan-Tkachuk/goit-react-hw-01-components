import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  font-family: Tahoma, Verdana, Segoe, sans-serif;

  position: relative;
  left: 50%;
  transform: translate(-50%);

  table-layout: fixed;
  width: 600px;
  border-collapse: collapse;

  box-shadow: 0px 3px 10px 3px rgba(209, 209, 209, 1),
    0px 3px 10px 3px rgba(209, 209, 209, 1),
    0px 3px 10px 3px rgba(209, 209, 209, 1);
`;

export const TableHeaders = styled.th`
  padding: 15px 50px;
  text-transform: uppercase;
  font-size: 14px;
  color: fff;
  background-color: #20cde7;

  &:not(:last-child) {
    border-right: 1px solid #fff;
  }
`;

export const TableData = styled.td`
  text-align: center;
  padding: 15px 50px;
  color: #7e7e7e;

  &:not(:last-child) {
    border-right: 1px solid #d9d9d9;
  }
`;

export const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #fff;
  }

  &:nth-of-type(even) {
    background-color: #f2f6f7;
  }
`;
