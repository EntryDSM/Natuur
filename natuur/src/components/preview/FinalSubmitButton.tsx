import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  useRef,
  memo
} from "react";
import { useSelector, useDispatch } from "react-redux";

import * as S from "../../styles/preview";
import { AppState } from "../../core/redux/store/store";
import prevArrow from "../../assets/common/prevArrow.png";
import {
  getIsUpdatePopUp,
  updatePopUpCase
} from "../../core/redux/actions/popup";

export interface FinalSubmitDependencyState {
  isGed?: boolean;
  applyType?: string;
  selectRegion?: string;
  graduationClassification?: string;
  graduationYear?: string;
  remarks?: string;
  receiptCode?: number;
  examCode?: number;
  name?: string;
  gender?: string;
  birthYear?: string;
  birthMonth?: string;
  birthDate?: string;
  userClass?: string;
  studentID?: string;
  middleSchool?: string;
  parentsName?: string;
  schoolContact?: string;
  parentsContact?: string;
  userContact?: string;
  address?: string;
  zipCode?: string;
  detailedAddress?: string;
  file?: string;
  selfIntroduction?: string;
  studyPlan?: string;
  accessToken?: string;
  gedAverageScore?: string;
  schoolCode?: string;
  subjectScores?: Array<{
    semester: number;
    subject:
      | "korean"
      | "math"
      | "social"
      | "science"
      | "english"
      | "history"
      | "tech_and_home";
    score: "A" | "B" | "C" | "D" | "E" | "X";
  }>;
  firstGradeScore?: number;
  secondGradeScores?: number;
  thirdGradeScores?: number;
  conversionScore?: number;
  attendanceScore?: number;
  finalScore?: number;
  volunteerScore?: number;
}

const Prev: FC = memo(() => (
  <>
    <S.ButtonArrow src={prevArrow} alt="이전_화살표" />
    <S.ButtonContent>이전</S.ButtonContent>
  </>
));

const FinalSubmitButton: FC = () => {
  const [isFinalSubmit, setIsFinalSubmit] = useState(false);
  const dispatch = useDispatch();
  const didMountRef = useRef(false);

  const {
    isGed,
    applyType,
    selectRegion,
    graduationClassification,
    graduationYear,
    receiptCode,
    name,
    gender,
    birthYear,
    birthMonth,
    birthDate,
    userClass,
    studentID,
    middleSchool,
    schoolContact,
    parentsContact,
    userContact,
    address,
    file,
    selfIntroduction,
    studyPlan,
    gedAverageScore,
    subjectScores
  } = useSelector<AppState, FinalSubmitDependencyState>(state => ({
    isGed: state.infoReducer.isGed,
    applyType: state.infoReducer.applyType,
    selectRegion: state.infoReducer.selectRegion,
    graduationClassification: state.infoReducer.graduationClassification,
    graduationYear: state.infoReducer.graduationYear,
    remarks: state.infoReducer.remarks,
    receiptCode: state.mainReducer.receipt_code,
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
    file: state.PersonalReducer.file,
    selfIntroduction: state.introReducer.selfIntroduction,
    studyPlan: state.introReducer.studyPlan,
    accessToken: state.userReducer.accessToken,
    gedAverageScore: state.gradeReducer.gedAverageScore,
    subjectScores: state.gradeReducer.subjectScores
  }));

  const applicantFormDependency = !!(
    (isGed
      ? gedAverageScore
      : !!(
          /^[0-9]+$/g.test(schoolContact) &&
          middleSchool &&
          userClass &&
          graduationClassification &&
          studentID
        )) &&
    (subjectScores.length >= 36 ? graduationYear : true) &&
    selectRegion &&
    receiptCode &&
    name &&
    gender &&
    birthYear &&
    birthMonth &&
    birthDate &&
    /^[0-9]+$/g.test(parentsContact) &&
    /^[0-9]+$/g.test(userContact) &&
    address &&
    file
  );

  const nonSmokingPledgeDependency = !!(
    name &&
    receiptCode &&
    /^[0-9]+$/g.test(userContact) &&
    address
  );

  const recommendationLetterDependency = !!(
    receiptCode &&
    name &&
    selectRegion &&
    applyType
  );

  const introduceDependency = !!(
    receiptCode &&
    name &&
    selfIntroduction &&
    studyPlan
  );

  const admissionConsentDependency = !!(
    receiptCode &&
    name &&
    gender &&
    birthYear &&
    birthMonth &&
    birthDate &&
    address &&
    /^[0-9]+$/g.test(parentsContact) &&
    /^[0-9]+$/g.test(userContact)
  );

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (
        applicantFormDependency &&
        nonSmokingPledgeDependency &&
        recommendationLetterDependency &&
        introduceDependency &&
        admissionConsentDependency
      ) {
        setIsFinalSubmit(true);
      } else {
        setIsFinalSubmit(false);
      }
    }
  },        []);

  const openFinalSubmitPopUp = useCallback(() => {
    dispatch(getIsUpdatePopUp());
    dispatch(updatePopUpCase("finalSubmit"));
  },                                       [dispatch]);

  return (
    <S.PaginationWrapper>
      <S.Button to="/intro">
        <Prev />
      </S.Button>
      <S.SubmitButton
        isDisable={!isFinalSubmit}
        onClick={() => isFinalSubmit && openFinalSubmitPopUp()}
      >
        최종제출
      </S.SubmitButton>
    </S.PaginationWrapper>
  );
};

export default FinalSubmitButton;
