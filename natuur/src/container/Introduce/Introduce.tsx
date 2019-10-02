import React, { FC, useEffect, useRef } from "react";
import { connect } from "react-redux";

import * as S from "../../styles/intro";
import HeadLine from "../../components/default/Common/HeadLine";
import PlanTemplate from "../../components/intro/PlanTemplate";
import {
  SELF_INTRODUCTION_DESCRIPTION,
  STUDY_PLAN_DESCRIPTION
} from "../../components/intro/constance";
import Pagination from "../../components/default/pagination/Pagination";
import {
  patchDocument,
  setSelfIntroduction,
  setStudyPlan,
  PatchDocumentType
} from "../../core/redux/actions/intro";
import { setIsOpen } from "../../core/redux/actions/default";
import { AppState } from "../../core/redux/store/store";

const mapStateToProps = (state: AppState) => ({
  accessToken: state.userReducer.accessToken,
  selfIntroduction: state.introReducer.selfIntroduction,
  studyPlan: state.introReducer.studyPlan,
  isOpen: state.defaultReducer.isOpen,
  selfIntroductionAndStudyPlan:
    state.applicantDocument.self_introduction_and_study_plan
});

const mapDispatchToProps = dispatch => ({
  patchDocument: (payload: PatchDocumentType) =>
    dispatch(patchDocument(payload)),
  setSelfIntroduction: (payload: { text: string }) =>
    dispatch(setSelfIntroduction(payload)),
  setStudyPlan: (payload: { text: string }) => dispatch(setStudyPlan(payload)),
  setIsOpen: (payload: {
    pageName: "info" | "personal" | "grade" | "intro";
    isOpen: boolean;
  }) => dispatch(setIsOpen(payload))
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Introduce: FC<Props> = ({
  accessToken,
  selfIntroduction,
  studyPlan,
  patchDocument,
  setSelfIntroduction,
  setStudyPlan,
  selfIntroductionAndStudyPlan,
  isOpen,
  setIsOpen
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      const { self_introduction, study_plan } = selfIntroductionAndStudyPlan;

      if (!isOpen.intro) {
        setSelfIntroduction({ text: self_introduction });
        setStudyPlan({ text: study_plan });
      }
    }
    return () => setIsOpen({ pageName: "intro", isOpen: true });
  },        []);

  return (
    <div>
      <S.IntroWrapper>
        <HeadLine
          subText="2020 입학원서 작성"
          title={`자기소개서 & 학업계획서 입력`}
        />
        <PlanTemplate
          title="자기소개서"
          description={SELF_INTRODUCTION_DESCRIPTION}
          value={selfIntroduction}
          setValue={setSelfIntroduction}
          patchDocument={patchDocument}
          accessToken={accessToken}
        />
        <PlanTemplate
          title="학업계획서"
          description={STUDY_PLAN_DESCRIPTION}
          value={studyPlan}
          setValue={setStudyPlan}
          patchDocument={patchDocument}
          accessToken={accessToken}
        />
        <Pagination
          prevRouterPath="/grade"
          nextRouterPath="/preview"
          AcceptPagination="intro"
        />
      </S.IntroWrapper>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Introduce);
