import React, { FC } from "react";

import * as S from "../../../styles/preview/recommendationLetter";

const RecommendationHeader: FC = () => (
  <>
    <S.Title>학교장 추천서</S.Title>
    <S.ReceivingNumber>
      접 수 번 호 : <S.Blank isUnderLine widthSize={100} />
    </S.ReceivingNumber>
  </>
);

export default RecommendationHeader;
