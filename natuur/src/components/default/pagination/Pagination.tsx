import React, { FC, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as S from "../../../styles/default/pagination";
import PaginationButton from "./PaginationButton";
import { prevArrow, nextArrow } from "../../../assets/common";
import {
  putGedDocument,
  putGraduaatedDocument,
  putUnGraduaatedDocument
} from "../../../core/redux/actions/applicantDocument";
import {
  PaginationStateToProps,
  convertApplyTypeToEnglish,
  convertAdditionalTypeToEnglish,
  returnSubjectScore
} from "./presenter";
import { AppState } from "../../../core/redux/store/store";
import { precededByZeroBeforeOneDigitForString } from "../../../lib/utils/date";

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
  const dispatch = useDispatch();

  const {
    isGed,
    applyType,
    selectRegion,
    graduationClassification,
    graduationYear,
    remarks,
    name,
    gender,
    birthYear,
    birthMonth,
    birthDate,
    userClass,
    studentID,
    middleSchool,
    parentsName,
    schoolContact,
    parentsContact,
    userContact,
    address,
    zipCode,
    gedAverageScore,
    selfIntroduction,
    studyPlan,
    accessToken,
    volunteer,
    absent,
    earlyLeave,
    tardy,
    missingClass,
    subjectScores
  } = useSelector<AppState, PaginationStateToProps>(state => ({
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
    parentsName: state.PersonalReducer.parentsName,
    schoolContact: state.PersonalReducer.schoolContact,
    parentsContact: state.PersonalReducer.parentsContact,
    userContact: state.PersonalReducer.userContact,
    address: state.PersonalReducer.address,
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
    subjectScores: state.gradeReducer.subjectScores
  }));

  const connectServer = useCallback(() => {
    const stringMonth = precededByZeroBeforeOneDigitForString(
      Number(birthMonth)
    );
    const stringDate = precededByZeroBeforeOneDigitForString(Number(birthDate));
    const stringUserClass = precededByZeroBeforeOneDigitForString(
      Number(userClass)
    );
    const stringStudentID = precededByZeroBeforeOneDigitForString(
      Number(studentID)
    );

    if (isGed) {
      dispatch(
        putGedDocument({
          accessToken,
          classification: {
            apply_type: convertApplyTypeToEnglish(applyType),
            additional_type: convertAdditionalTypeToEnglish(remarks),
            is_daejeon: selectRegion === "대전"
          },
          personal_information: {
            name,
            sex: gender,
            birth_date: `${birthYear}-${stringMonth}-${stringDate}`,
            parent_name: parentsName,
            parent_tel: parentsContact,
            applicant_tel: userContact,
            address,
            post_code: zipCode
          },
          ged_grade: {
            ged_average_score: gedAverageScore
          },
          self_introduction_and_study_plan: {
            self_introduction: selfIntroduction,
            study_plan: studyPlan
          }
        })
      );
    } else {
      if (graduationClassification === "졸업자") {
        dispatch(
          putGraduaatedDocument({
            accessToken,
            classification: {
              apply_type: convertApplyTypeToEnglish(applyType),
              additional_type: convertAdditionalTypeToEnglish(remarks),
              is_daejeon: selectRegion === "대전",
              graduated_year: graduationYear
            },
            personal_information: {
              name,
              sex: gender,
              birth_date: `${birthYear}-${stringMonth}-${stringDate}`,
              parent_name: parentsName,
              parent_tel: parentsContact,
              applicant_tel: userContact,
              address,
              post_code: zipCode,
              student_number: `3${stringUserClass}${stringStudentID}`,
              school_name: middleSchool,
              school_tel: schoolContact
            },
            diligence_grade: {
              volunteer_time: volunteer,
              full_cut_count: absent,
              period_cut_count: missingClass,
              late_count: tardy,
              early_leave_count: earlyLeave
            },
            school_grade: {
              korean: returnSubjectScore("korean", subjectScores),
              social: returnSubjectScore("social", subjectScores),
              history: returnSubjectScore("history", subjectScores),
              math: returnSubjectScore("math", subjectScores),
              science: returnSubjectScore("science", subjectScores),
              tech_home: returnSubjectScore("tech_home", subjectScores),
              english: returnSubjectScore("english", subjectScores)
            },
            self_introduction_and_study_plan: {
              self_introduction: selfIntroduction,
              study_plan: studyPlan
            }
          })
        );
      } else {
        dispatch(
          putUnGraduaatedDocument({
            accessToken,
            classification: {
              apply_type: convertApplyTypeToEnglish(applyType),
              additional_type: convertAdditionalTypeToEnglish(remarks),
              is_daejeon: selectRegion === "대전",
              graduated_year: graduationYear
            },
            personal_information: {
              name,
              sex: gender,
              birth_date: `${birthYear}-${stringMonth}-${stringDate}`,
              parent_name: parentsName,
              parent_tel: parentsContact,
              applicant_tel: userContact,
              address,
              post_code: zipCode,
              student_number: `3${stringUserClass}${stringStudentID}`,
              school_name: middleSchool,
              school_tel: schoolContact
            },
            diligence_grade: {
              volunteer_time: volunteer,
              full_cut_count: absent,
              period_cut_count: missingClass,
              late_count: tardy,
              early_leave_count: earlyLeave
            },
            school_grade: {
              korean: returnSubjectScore("korean", subjectScores),
              social: returnSubjectScore("social", subjectScores),
              history: returnSubjectScore("history", subjectScores),
              math: returnSubjectScore("math", subjectScores),
              science: returnSubjectScore("science", subjectScores),
              tech_home: returnSubjectScore("tech_home", subjectScores),
              english: returnSubjectScore("english", subjectScores)
            },
            self_introduction_and_study_plan: {
              self_introduction: selfIntroduction,
              study_plan: studyPlan
            }
          })
        );
      }
    }
  },                                [dispatch]);

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
      >
        <Next />
      </PaginationButton>
    </S.PaginationWrapper>
  );
};

export default Pagination;
