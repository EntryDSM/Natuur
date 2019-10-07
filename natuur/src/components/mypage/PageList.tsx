import React, { FC } from "react";
import { useSelector } from "react-redux";

import * as S from "../../styles/mypage";
import PageItem from "./PageItem";
import PagenationHorizon from "./PageNationHorizon";
import { AppState } from "../../core/redux/store/store";
import {
  ClassificationProps,
  PersonalInformation,
  GradeEntry,
  SelfIntroduction
} from "./pageInterface";

type State = ClassificationProps &
  PersonalInformation &
  GradeEntry &
  SelfIntroduction;

const PageList: FC = () => {
  const {
    applyType,
    selectRegion,
    isGed,
    name,
    gender,
    birthYear,
    birthMonth,
    birthDate,
    parentsName,
    parentsContact,
    userContact,
    zipCode,
    file,
    address,
    selfIntroduction,
    studyPlan,
    gedAverageScore,
    volunteer,
    absent,
    earlyLeave,
    tardy,
    missingClass
  } = useSelector<AppState, State>(state => ({
    applyType: state.infoReducer.applyType,
    selectRegion: state.infoReducer.selectRegion,
    isGed: state.infoReducer.isGed,
    name: state.PersonalReducer.name,
    gender: state.PersonalReducer.gender,
    birthYear: state.PersonalReducer.birthYear,
    birthMonth: state.PersonalReducer.birthMonth,
    birthDate: state.PersonalReducer.birthDate,
    parentsName: state.PersonalReducer.parentsName,
    parentsContact: state.PersonalReducer.parentsContact,
    userContact: state.PersonalReducer.userContact,
    zipCode: state.PersonalReducer.zipCode,
    address: state.PersonalReducer.address,
    file: state.PersonalReducer.file,
    selfIntroduction: state.introReducer.selfIntroduction,
    studyPlan: state.introReducer.studyPlan,
    gedAverageScore: state.gradeReducer.gedAverageScore,
    volunteer: state.gradeReducer.volunteer,
    absent: state.gradeReducer.absent,
    earlyLeave: state.gradeReducer.earlyLeave,
    tardy: state.gradeReducer.tardy,
    missingClass: state.gradeReducer.missingClass
  }));

  return (
    <S.PageListWrapper>
      <PageItem
        title="전형구분"
        link="info-summary"
        isActive={!!(applyType && selectRegion)}
      />
      <PagenationHorizon />

      <PageItem
        title="인적사항"
        link="personal"
        isActive={
          !!(
            name &&
            gender &&
            birthYear &&
            birthMonth &&
            birthDate &&
            parentsName &&
            parentsContact &&
            userContact &&
            zipCode &&
            address &&
            file
          )
        }
      />
      <PagenationHorizon />

      <PageItem
        title="성적입력"
        link="grade"
        isActive={
          !!(
            gedAverageScore ||
            (volunteer && absent && earlyLeave && tardy && missingClass)
          )
        }
      />
      <PagenationHorizon />

      <PageItem
        title="자기소개서"
        link="intro"
        isActive={!!(studyPlan && selfIntroduction)}
      />
    </S.PageListWrapper>
  );
};

export default PageList;
