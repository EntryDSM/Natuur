import React, { FC } from "react";

import * as S from "../../../styles/preview/recommendationLetter";

interface OwnProps {
  receiptCode: number;
}

const RecommendationHeader: FC<OwnProps> = ({ receiptCode }) => (
  <>
    <S.Title>학교장 추천서</S.Title>
    <S.ReceivingNumber>
      접 수 번 호 :{" "}
      <S.Blank isUnderLine isCenter widthSize={100}>
        {receiptCode}
      </S.Blank>
    </S.ReceivingNumber>
  </>
);

export default RecommendationHeader;
