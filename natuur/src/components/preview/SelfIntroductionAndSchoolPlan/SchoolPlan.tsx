import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "../../../styles/preview/SelfIntroductionAndSchoolPlan";
import WaterMark from "../WaterMark";
import MattersTable from "./MattersTable";
import TextAreaWrapper from "./TextAreaWrapper";
import { SCHOOL_PLAN } from "./constance";
import { FinalSubmitDependencyState } from "../FinalSubmitButton";
import { AppState } from "../../../core/redux/store/store";

const SchoolPlan: FC = () => {
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
    !!(name && receiptCode && middleSchool && studyPlan)
  );

  return (
    <S.SelfIntroductionAndSchoolPlan>
      <WaterMark isShow={!introduceDependency} />
      <div id="mainDiv">
        <S.SubContainer>
          <S.Title>학업계획서</S.Title>
          <S.SubTitle>지원자 기재사항</S.SubTitle>
          <MattersTable
            name={name}
            receiptCode={receiptCode}
            middleSchool={middleSchool}
          />
          <S.TextAreaContainer>
            <TextAreaWrapper
              title="학업계획서"
              description={SCHOOL_PLAN}
              body={studyPlan}
            />
          </S.TextAreaContainer>
        </S.SubContainer>
      </div>
    </S.SelfIntroductionAndSchoolPlan>
  );
};

export default SchoolPlan;
