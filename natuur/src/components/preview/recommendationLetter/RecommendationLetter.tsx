import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "../../../styles/preview/recommendationLetter";
import WaterMark from "../WaterMark";
import RecommendationHeader from "./RecommendationHeader";
import RecommendationBody from "./RecommendationBody";
import { FinalSubmitDependencyState } from "../FinalSubmitButton";
import { AppState } from "../../../core/redux/store/store";

const RecommendationLetter: FC = () => {
  const {
    receiptCode,
    applyType,
    selectRegion,
    name,
    userClass,
    middleSchool
  } = useSelector<AppState, FinalSubmitDependencyState>(state => ({
    applyType: state.infoReducer.applyType,
    selectRegion: state.infoReducer.selectRegion,
    receiptCode: state.mainReducer.receiptCode,
    name: state.PersonalReducer.name,
    userClass: state.PersonalReducer.userClass,
    middleSchool: state.PersonalReducer.middleSchool
  }));

  const [recommendationLetterDependency] = useState(
    !!(
      receiptCode &&
      applyType &&
      selectRegion &&
      name &&
      userClass &&
      middleSchool
    )
  );

  return (
    <S.RecommendationLetter>
      <WaterMark isShow={!recommendationLetterDependency} />
      <div id="mainDiv">
        <S.subContiner>
          <RecommendationHeader receiptCode={receiptCode} />
          <RecommendationBody
            applyType={applyType}
            selectRegion={selectRegion}
            name={name}
            userClass={userClass}
            middleSchool={middleSchool}
          />
        </S.subContiner>
      </div>
    </S.RecommendationLetter>
  );
};

export default RecommendationLetter;
