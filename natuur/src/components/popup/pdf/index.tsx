import React, { FC } from "react";

import * as S from "../../../styles/default/popup";

const PdfPopUp: FC = () => {
  return (
    <S.PdfPopUp>
      <h1>주의사항</h1>
      <p>
        - 미리보기 단계에서는 <span>내신 성적</span>이 표기되지 않습니다. (출력시에는 정상적으로 표기됩니다.)
      </p>
      <p>
        - 수험번호는 <span>표기</span>되지 않으며 <span>접수번호</span>를 확인하시기 바랍니다.
      </p>
      <p>
        - <span>서명, 날짜, 체크항목</span> 등은 수기로 작성해주시기 바랍니다.
      </p>
    </S.PdfPopUp>
  );
};

export default PdfPopUp;
