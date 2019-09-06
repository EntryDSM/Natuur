import React, { FC, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import * as S from "../../styles/preview";
import { AppState } from "../../core/redux/store/store";

export interface FinalSubmitDependencyState {
  isGed?: boolean;
  applyType?: string;
  selectRegion?: string;
  graduationClassification?: string;
  graduationYear?: number;
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
  detailedAddress?: string;
  file?: string;
  selfIntroduction?: string;
  studyPlan?: string;
}

const FinalSubmitButton: FC = () => {
  const [isFinalSubmit, setIsFinalSubmit] = useState(false);
  const didMountRef = useRef(false);

  const {
    isGed,
    applyType,
    selectRegion,
    graduationClassification,
    graduationYear,
    remarks,
    receiptCode,
    examCode,
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
    file,
    selfIntroduction,
    studyPlan
  } = useSelector<AppState, FinalSubmitDependencyState>(state => ({
    isGed: state.infoReducer.isGed,
    applyType: state.infoReducer.applyType,
    selectRegion: state.infoReducer.selectRegion,
    graduationClassification: state.infoReducer.graduationClassification,
    graduationYear: state.infoReducer.graduationYear,
    remarks: state.infoReducer.remarks,
    receiptCode: state.mainReducer.receiptCode,
    examCode: state.mainReducer.examCode,
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
    studyPlan: state.introReducer.studyPlan
  }));

  const applicantFormDependency = !!(
    (isGed ||
      (applyType &&
        graduationYear &&
        schoolContact &&
        middleSchool &&
        userClass &&
        studentID)) &&
    selectRegion &&
    graduationClassification &&
    remarks &&
    receiptCode &&
    examCode &&
    name &&
    gender &&
    birthYear &&
    birthMonth &&
    birthDate &&
    parentsContact &&
    userContact &&
    address &&
    file
  );

  const nonSmokingPledgeDependency = !!(
    name &&
    receiptCode &&
    userContact &&
    address &&
    middleSchool
  );

  const recommendationLetterDependency = !!(
    receiptCode &&
    middleSchool &&
    userClass &&
    name &&
    selectRegion &&
    applyType
  );

  const introduceDependency = !!(
    receiptCode &&
    middleSchool &&
    name &&
    selfIntroduction &&
    studyPlan
  );

  const admissionConsentDependency = !!(
    receiptCode &&
    examCode &&
    name &&
    gender &&
    birthYear &&
    birthMonth &&
    birthDate &&
    address &&
    parentsContact &&
    userContact
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

  return (
    <S.SubmitButton
      isDisable={!isFinalSubmit}
      onClick={() => isFinalSubmit && console.log("최종제출 ㅠㅠ")}
    >
      최종제출
    </S.SubmitButton>
  );
};

export default FinalSubmitButton;
