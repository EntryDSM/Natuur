import React, { FC } from "react";

import * as S from "../../../styles/preview/admissionConsent";
import { ADMISSION_PLEDGE, ADMISSION_WARNING } from "./constance";

interface ReduxProps {
  userName: string;
}

const AdmissionBody: FC = () => (
  <S.Contentbody>
    <S.AdmissionPledge>{ADMISSION_PLEDGE}</S.AdmissionPledge>
    <div>
      <S.AgreeTableTitle>
        <span>❖</span> 개인정보 수집·이용 동의
      </S.AgreeTableTitle>
      <table id="AgreeInformation">
        <tbody>
          <tr>
            <td>항목</td>
            <td>수집목적</td>
            <td>보유기간</td>
          </tr>
          <tr>
            <td>
              학생(성명, 성별, 생년월일,
              <br /> 주소, 연락처)
              <br />
              학부모(성명, 연락처)
            </td>
            <td>입학동의서</td>
            <td>1년</td>
          </tr>
        </tbody>
      </table>
    </div>

    <S.AgreeCaution>
      ※<p>{ADMISSION_WARNING}</p>
    </S.AgreeCaution>

    <S.InformationCollectionWrapper>
      <table>
        <tbody>
          <tr>
            <td>개인정보 수집</td>
            <td>
              <S.CheckBox />
              <span>예</span>
              <S.CheckBox ml={12} />
              <span>아니오</span>
            </td>
          </tr>
        </tbody>
      </table>
      <S.Date>
        <p>2019년</p>
        <p>11월</p>
        <p>
          <S.Blank isInline widthSize={10} />일
        </p>
      </S.Date>
      <S.Sign>
        <p>
          지원자 성명: <S.Blank widthSize={150} /> (서명)
        </p>
        <p>
          보호자 성명: <S.Blank widthSize={150} /> (서명)
        </p>
      </S.Sign>
      <S.SchoolText>대덕소프트웨어마이스터고등학교장 귀하</S.SchoolText>
    </S.InformationCollectionWrapper>
  </S.Contentbody>
);

export default AdmissionBody;
