import React, { FC } from "react";

import * as S from "../../../styles/preview/admissionConsent";

interface OwnProps {
  name: string;
  gender: string;
  birthYear: string;
  birthMonth: string;
  birthDate: string;
  parentsName: string;
  userContact: string;
  parentsContact: string;
  address: string;
  detailedAddress: string;
}

const AgreeTable: FC<OwnProps> = ({
  name,
  gender,
  birthYear,
  birthMonth,
  birthDate,
  parentsName,
  userContact,
  parentsContact,
  address,
  detailedAddress
}) => (
  <table id="MainTable">
    <tbody id="MainTBody">
      <tr>
        <td rowSpan={5}>동의서</td>
        <td rowSpan={3}>지원자</td>
        <td>성명</td>
        <td colSpan={3}>{name}</td>
        <td>성별</td>
        <td colSpan={3}>
          <S.CheckBox isAccept={gender === "MALE"} />
          <span>남</span>
          <S.CheckBox isAccept={gender === "FEMALE"} ml={12} />
          <span>여</span>
        </td>
        <td>생년월일</td>
        <td colSpan={2}>{`${birthYear}/${birthMonth}/${birthDate}`}</td>
      </tr>

      <tr>
        <td>주소</td>
        <td colSpan={10}>{`${address} ${detailedAddress}`}</td>
      </tr>
      <tr>
        <td>연락처</td>
        <td>집전화</td>
        <td colSpan={4} />
        <td colSpan={2}>핸드폰</td>
        <td colSpan={3}>{userContact}</td>
      </tr>

      <tr>
        <td rowSpan={2}>보호자</td>
        <td>성명</td>
        <td colSpan={4}>{parentsName}</td>
        <td colSpan={3}>지원자와의 관계</td>
        <td colSpan={3}>
          지원자{" "}
          <S.Blank isCenter isUnderLine widthSize={50}>
            {name}
          </S.Blank>
          의 <S.Blank isUnderLine widthSize={30} />
        </td>
      </tr>

      <tr>
        <td>연락처</td>
        <td>집전화</td>
        <td colSpan={4} />
        <td colSpan={2}>핸드폰</td>
        <td colSpan={3}>{parentsContact}</td>
      </tr>
    </tbody>
  </table>
);

export default AgreeTable;
