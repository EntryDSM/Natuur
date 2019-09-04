import React, { FC } from "react";

import * as S from "../../../styles/preview/nonSmokingPledge";

const AgreeTable: FC = () => (
  <>
    <S.AgreeTableTitle>
      <span>❖</span> 개인정보 수집·이용 동의
    </S.AgreeTableTitle>
    <S.AgreeTable>
      <tbody>
        <tr>
          <td>
            <p>항목</p>
          </td>
          <td>
            <p>수집목적</p>
          </td>
          <td>
            <p>보유기간</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              학생(성명, 연락처,
              <br /> 출신 중학교, 주소)
            </p>
          </td>
          <td>
            <p>금연동의서</p>
          </td>
          <td>
            <p>1년</p>
          </td>
        </tr>
      </tbody>
    </S.AgreeTable>
  </>
);

export default AgreeTable;
