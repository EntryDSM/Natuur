import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "../../../styles/preview/SelfIntroductionAndSchoolPlan";
import WaterMark from "../WaterMark";
import MattersTable from "./MattersTable";
import TextAreaWrapper from "./TextAreaWrapper";
import { SELF_INTRODUCTION_DESCRIPTION } from "./constance";
import { FinalSubmitDependencyState } from "../FinalSubmitButton";
import { AppState } from "../../../core/redux/store/store";

const SelfIntroduction: FC = () => {
  const {
    name,
    receiptCode,
    middleSchool,
    selfIntroduction,
    studyPlan
  } = useSelector<AppState, FinalSubmitDependencyState>(state => ({
    name: state.PersonalReducer.name,
    receiptCode: state.mainReducer.receiptCode,
    middleSchool: state.PersonalReducer.middleSchool,
    selfIntroduction: state.introReducer.selfIntroduction,
    studyPlan: state.introReducer.studyPlan
  }));

  const [introduceDependency] = useState(
    !!(name && receiptCode && middleSchool && selfIntroduction)
  );

  return (
    <S.SelfIntroductionAndSchoolPlan>
      <WaterMark isShow={!introduceDependency} />
      <div id="mainDiv">
        <S.SubContainer>
          <S.Title>자기소개서</S.Title>
          <S.SubTitle>지원자 기재사항</S.SubTitle>
          <MattersTable
            name={name}
            receiptCode={receiptCode}
            middleSchool={middleSchool}
          />
          <S.TextAreaContainer>
            <TextAreaWrapper
              title="자기소개서"
              description={SELF_INTRODUCTION_DESCRIPTION}
              body={selfIntroduction}
            />
          </S.TextAreaContainer>
        </S.SubContainer>
      </div>
    </S.SelfIntroductionAndSchoolPlan>
  );
};

export default SelfIntroduction;
