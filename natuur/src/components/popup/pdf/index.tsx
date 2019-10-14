import React, { FC } from "react";

import * as S from "../../../styles/default/popup";

const PdfPopUp: FC = () => {
  return (
    <S.PdfPopUp>
      <h1>주의사항</h1>
      <p>
        - 미리보기 단계에서는 <span>내신 성적 점수와 수험번호</span>가 표기되지
        않습니다.
      </p>
      <p>- 최종 제출 이후에는 내신 성적 점수가 정상적으로 표기됩니다.</p>
      <p>
        - 수험번호는 <span>비워주시기</span> 바랍니다.
      </p>
      <p>
        - <span>서명, 날짜, 체크항목, (상황에 따른 빈칸)</span> 등을 수기로
        작성해주시기 바랍니다.
      </p>
    </S.PdfPopUp>
  );
};

export default PdfPopUp;
