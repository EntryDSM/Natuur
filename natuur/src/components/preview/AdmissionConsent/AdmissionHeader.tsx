import React, { FC } from "react";

import * as S from "../../../styles/preview/admissionConsent";

interface OwnProps {
  examCode: number;
}

const AdmissionConsent: FC<OwnProps> = ({ examCode }) => (
  <S.AdmissConsentHeader>
    <S.SubTitle>2020학년도 신입생 입학전형</S.SubTitle>
    <S.ExamCodeWrapper>
      <div>수험번호</div>
      <p>
        <S.Blank isCenter widthSize={30}>
          {examCode}
        </S.Blank>
      </p>
    </S.ExamCodeWrapper>
  </S.AdmissConsentHeader>
);

export default AdmissionConsent;
