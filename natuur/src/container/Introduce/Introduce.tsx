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
  getDocument,
  patchDocument,
  setSelfIntroduction,
  setStudyPlan,
  PatchDocumentType
} from "../../core/redux/actions/intro";
import { AppState } from "../../core/redux/store/store";

const mapStateToProps = (state: AppState) => ({
  accessToken: state.userReducer.accessToken,
  isSuccess: state.introReducer.isSuccess,
  isError: state.introReducer.isError,
  selfIntroduction: state.introReducer.selfIntroduction,
  studyPlan: state.introReducer.studyPlan
});

const mapDispatchToProps = dispatch => ({
  getDocument: (payload: { accessToken: string }) =>
    dispatch(getDocument(payload)),
  patchDocument: (payload: PatchDocumentType) =>
    dispatch(patchDocument(payload)),
  setSelfIntroduction: (payload: { text: string }) =>
    dispatch(setSelfIntroduction(payload)),
  setStudyPlan: (payload: { text: string }) => dispatch(setStudyPlan(payload))
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Introduce: FC<Props> = ({
  accessToken,
  isSuccess,
  isError,
  selfIntroduction,
  studyPlan,
  getDocument,
  patchDocument,
  setSelfIntroduction,
  setStudyPlan
}) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getDocument({ accessToken });
    }
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
          connectServer={() =>
            patchDocument({
              accessToken,
              self_introduction_text: selfIntroduction,
              study_plan_text: studyPlan
            })
          }
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
