import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { patchFinalSubmit } from "../../core/redux/actions/main";
import { updateToastr } from "../../core/redux/actions/default";
import * as S from "../../styles/preview";
import { AppState } from "../../core/redux/store/store";

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
  gedAverageScore?: number;
}

const FinalSubmitButton: FC = () => {
  const dispatch = useDispatch();
  const [isFinalSubmit, setIsFinalSubmit] = useState(false);
  const didMountRef = useRef(false);
  const { push } = useHistory();

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
    accessToken,
    gedAverageScore
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
    gedAverageScore: state.gradeReducer.gedAverageScore
  }));

  const applicantFormDependency = !!(
    ((isGed && gedAverageScore) ||
      (applyType &&
        graduationYear &&
        /^[0-9]+$/g.test(schoolContact) &&
        middleSchool &&
        userClass &&
        graduationClassification &&
        studentID)) &&
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

  const createToastr = useCallback(() => {
    dispatch(
      updateToastr({
        timer: 5,
        toastrMessage: "제출이 완료되었습니다.",
        toastrState: "success"
      })
    );
  },                               []);

  const presentFinalSubmit = useCallback(() => {
    dispatch(patchFinalSubmit({ accessToken }));
    push("/");
    createToastr();
  },                                     [dispatch]);

  return (
    <S.SubmitButton
      isDisable={
        !(
          applicantFormDependency &&
          nonSmokingPledgeDependency &&
          recommendationLetterDependency &&
          introduceDependency &&
          admissionConsentDependency
        )
      }
      onClick={() => isFinalSubmit && presentFinalSubmit()}
    >
      최종제출
    </S.SubmitButton>
  );
};

export default FinalSubmitButton;
