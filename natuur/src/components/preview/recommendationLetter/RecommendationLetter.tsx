import React, { FC } from "react";

import * as S from "../../../styles/preview/recommendationLetter";
import WaterMark from "../WaterMark";
import RecommendationHeader from "./RecommendationHeader";
import RecommendationBody from "./RecommendationBody";

const RecommendationLetter: FC = () => {
  return (
    <S.RecommendationLetter>
      <WaterMark isShow={true} />
      <div id="mainDiv">
        <S.subContiner>
          <RecommendationHeader />
          <RecommendationBody />
        </S.subContiner>
      </div>
    </S.RecommendationLetter>
  );
};

export default RecommendationLetter;
