import React, { FC } from "react";

import * as S from "../../../styles/preview/nonSmokingPledge";

interface OwnProps {
  receiptCode: number;
  name: string;
  middleSchool: string;
  userContact: string;
  address: string;
  detailedAddress: string;
}

const InformationTable: FC<OwnProps> = ({
  receiptCode,
  name,
  middleSchool,
  userContact,
  address,
  detailedAddress
}) => (
  <S.InformationTable>
    <tbody>
      <tr>
        <td rowSpan={3}>
          <p>
            동<br />의<br />서
          </p>
        </td>
        <td>
          <p>성명</p>
        </td>
        <td>
          <p>{name}</p>
        </td>
        <td>
          <p>접수번호</p>
        </td>
        <td>
          <p>{receiptCode}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>연락처</p>
        </td>
        <td>
          <p>{userContact}</p>
        </td>
        <td>
          <p>출신 중학교</p>
        </td>
        <td>
          <p>{middleSchool}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>주소</p>
        </td>
        <td colSpan={3}>
          <p>{`${address} ${detailedAddress}`}</p>
        </td>
      </tr>
    </tbody>
  </S.InformationTable>
);

export default InformationTable;
