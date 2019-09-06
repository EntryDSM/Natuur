import React, { FC } from "react";

interface OwnProps {
  name: string;
  receiptCode: number;
  middleSchool: string;
}

const MattersTable: FC<OwnProps> = ({ name, receiptCode, middleSchool }) => (
  <table>
    <tbody>
      <tr>
        <td>성명</td>
        <td>{name}</td>
        <td>접수번호</td>
        <td>{receiptCode}</td>
      </tr>
      <tr>
        <td>출신중학교</td>
        <td colSpan={3}>{middleSchool}</td>
      </tr>
    </tbody>
  </table>
);

export default MattersTable;
