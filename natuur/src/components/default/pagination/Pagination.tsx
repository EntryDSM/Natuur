import React, { FC, memo, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import * as S from "../../../styles/default/pagination";
import PaginationButton from "./PaginationButton";
import { prevArrow, nextArrow } from "../../../assets/common";
import { getApplicationDocument } from "../../../core/redux/actions/applicantDocument";
import {
  PaginationStateToProps,
  applyApplicationDocument,
  putApplicationDocument
} from "./presenter";
import { setIsGed } from "../../../core/redux/actions/info";
import { subjectList } from "../../../lib/utils/subjectList";
import { AppState } from "../../../core/redux/store/store";
import { updateToastr } from "../../../core/redux/actions/default";
import { setSubjectScores } from "../../../core/redux/actions/grade";

const Prev: FC = memo(() => (
  <>
    <S.ButtonArrow src={prevArrow} alt="이전_화살표" />
    <S.ButtonContent>이전</S.ButtonContent>
  </>
));
const Next: FC = memo(() => (
  <>
    <S.ButtonContent>다음</S.ButtonContent>
    <S.ButtonArrow src={nextArrow} alt="다음_화살표" />
  </>
));

interface OwnProps {
  prevRouterPath: string;
  nextRouterPath: string;
  AcceptPagination: "info" | "personal" | "grade" | "intro";
}

const Pagination: FC<OwnProps> = ({
  prevRouterPath,
  nextRouterPath,
  AcceptPagination
}) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const didMountRef = useRef(false);

  const state = useSelector<AppState, PaginationStateToProps>(state => ({
    isGed: state.infoReducer.isGed,
    applyType: state.infoReducer.applyType,
    selectRegion: state.infoReducer.selectRegion,
    graduationClassification: state.infoReducer.graduationClassification,
    graduationYear: state.infoReducer.graduationYear,
    remarks: state.infoReducer.remarks,
    name: state.PersonalReducer.name,
    gender: state.PersonalReducer.gender,
    birthYear: state.PersonalReducer.birthYear,
    birthMonth: state.PersonalReducer.birthMonth,
    birthDate: state.PersonalReducer.birthDate,
    userClass: state.PersonalReducer.userClass,
    studentID: state.PersonalReducer.studentID,
    middleSchool: state.PersonalReducer.middleSchool,
    schooleCode: state.PersonalReducer.schoolCode,
    parentsName: state.PersonalReducer.parentsName,
    schoolContact: state.PersonalReducer.schoolContact,
    parentsContact: state.PersonalReducer.parentsContact,
    userContact: state.PersonalReducer.userContact,
    address: state.PersonalReducer.address,
    detailedAddress: state.PersonalReducer.detailedAddress,
    zipCode: state.PersonalReducer.zipCode,
    selfIntroduction: state.introReducer.selfIntroduction,
    studyPlan: state.introReducer.studyPlan,
    gedAverageScore: state.gradeReducer.gedAverageScore,
    accessToken: state.userReducer.accessToken,
    volunteer: state.gradeReducer.volunteer,
    absent: state.gradeReducer.absent,
    earlyLeave: state.gradeReducer.earlyLeave,
    tardy: state.gradeReducer.tardy,
    missingClass: state.gradeReducer.missingClass,
    subjectScores: state.gradeReducer.subjectScores,
    putStatusCode: state.applicantDocument.putStatusCode,
    isGetAction: state.applicantDocument.isGetAction,
    isPutAction: state.applicantDocument.isPutAction,
    classification: state.applicantDocument.classification,
    personalInformation: state.applicantDocument.personal_information,
    schoolGrade: state.applicantDocument.school_grade,
    gedGrade: state.applicantDocument.ged_grade,
    diligenceGrade: state.applicantDocument.diligence_grade,
    selfIntroductionAndStudyPlan:
      state.applicantDocument.self_introduction_and_study_plan
  }));

  const createToastr = useCallback(
    (payload: {
      message: string;
      title?: string;
      state: "info" | "errorState" | "success" | "warning";
    }) => {
      dispatch(
        updateToastr({
          timer: 5,
          toastrTitle: payload.title,
          toastrMessage: payload.message,
          toastrState: payload.state
        })
      );
    },
    []
  );

  useEffect(() => {
    if (
      state.isGetAction &&
      !state.isPutAction &&
      pathname === "/info-summary" &&
      didMountRef.current
    ) {
      applyApplicationDocument(state, dispatch);
    }
  },        [state.isGetAction]);

  useEffect(() => {
    if (state.isGetAction && state.isPutAction && didMountRef.current) {
      const { graduated_year } = state.classification;
      dispatch(setIsGed(!graduated_year && state.schoolGrade === undefined));
      applyApplicationDocument(state, dispatch);
    }
  },        [state.isGetAction]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    }
  },        []);

  useEffect(() => {
    const { accessToken } = state;

    if (state.isPutAction || pathname === "/info-summary") {
      dispatch(getApplicationDocument({ accessToken }));
    }
  },        [state.isPutAction]);

  useEffect(() => {
    if (state.putStatusCode) {
      if (state.putStatusCode === 409) {
        createToastr({
          message: "최종 제출 이후에는 사용할 수 없습니다.",
          state: "errorState"
        });
      } else if (state.putStatusCode === 400) {
        createToastr({
          title: "임시저장에 실패하였습니다.",
          message: "형식에 맞추어 입력해주세요.",
          state: "errorState"
        });
      } else if (state.putStatusCode >= 500) {
        createToastr({
          message: "서버에서 에러가 발생하였습니다.",
          state: "errorState"
        });
      } else if (state.putStatusCode === 204) {
        createToastr({
          message: "임시저장에 성공하였습니다.",
          state: "success"
        });
      }
    }
  },        [state.putStatusCode]);

  useEffect(() => {
    if (state.graduationClassification) {
      const { subjectScores } = state;
      const graduateScores = [...subjectScores];

      if (state.graduationClassification === "졸업자") {
        if (graduateScores[graduateScores.length - 1].semester === 5) {
          for (const subject of subjectList) {
            graduateScores.push({
              subject,
              score: "A",
              semester: 6
            });
          }
        }
        dispatch(setSubjectScores({ subjectScores: graduateScores }));
      } else {
        dispatch(
          setSubjectScores({
            subjectScores: graduateScores.filter(value => value.semester <= 5)
          })
        );
      }
    }
  },        [state.graduationClassification]);

  const connectServer = useCallback(() => {
    putApplicationDocument(state, dispatch);
  },                                [dispatch, pathname, { ...state }]);

  const allowedPageCheckers = useCallback(
    (isAccept: boolean, event: React.BaseSyntheticEvent) => {
      return isAccept ? event.preventDefault() : connectServer();
    },
    []
  );

  return (
    <S.PaginationWrapper>
      <PaginationButton
        connectServer={connectServer}
        routerPath={prevRouterPath}
        isPutAction={state.isPutAction}
      >
        <Prev />
      </PaginationButton>

      <S.PaginationButtonWrapper>
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(AcceptPagination === "info", event)
          }
          to="/info-summary"
          actived={AcceptPagination === "info" ? "isActive" : null}
        />
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(AcceptPagination === "personal", event)
          }
          to="/personal"
          actived={AcceptPagination === "personal" ? "isActive" : null}
        />
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(AcceptPagination === "grade", event)
          }
          to="/grade"
          actived={AcceptPagination === "grade" ? "isActive" : null}
        />
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(AcceptPagination === "intro", event)
          }
          to="/intro"
          actived={AcceptPagination === "intro" ? "isActive" : null}
        />
      </S.PaginationButtonWrapper>

      <PaginationButton
        connectServer={connectServer}
        routerPath={nextRouterPath}
        isPutAction={state.isPutAction}
      >
        <Next />
      </PaginationButton>
    </S.PaginationWrapper>
  );
};

export default Pagination;
