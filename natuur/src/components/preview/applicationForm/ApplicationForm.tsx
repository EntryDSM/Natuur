import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "../../../styles/preview/applicationForm";
import ApplicationTables from "./AppicationTables";
import LetterOfRecommendation from "./LetterOfRecommendation";
import Agreement from "./Agreement";
import AppicationFooter from "./AppicationFooter";
import WaterMark from "../WaterMark";
import { FinalSubmitDependencyState } from "../FinalSubmitButton";
import { AppState } from "../../../core/redux/store/store";

const ApplicationForm: FC = () => {
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
    middleSchool,
    schoolContact,
    parentsContact,
    userContact,
    address,
    detailedAddress,
    file
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
    middleSchool: state.PersonalReducer.middleSchool,
    schoolContact: state.PersonalReducer.schoolContact,
    parentsContact: state.PersonalReducer.parentsContact,
    userContact: state.PersonalReducer.userContact,
    address: state.PersonalReducer.address,
    detailedAddress: state.PersonalReducer.detailedAddress,
    file: state.PersonalReducer.file
  }));

  const [admissionConsentDependency] = useState(
    !!(
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
    )
  );

  return (
    <S.ApplicationForm>
      <WaterMark isShow={!admissionConsentDependency} />
      <S.Title>2020학년도 대덕소프트웨어마이스터고등학교 입학원서</S.Title>
      <div id="MainDiv">
        <S.SubContainer id="SubDiv">
          <ApplicationTables
            isGed={isGed}
            applyType={applyType}
            selectRegion={selectRegion}
            graduationClassification={graduationClassification}
            graduationYear={graduationYear}
            remarks={remarks}
            receiptCode={receiptCode}
            examCode={examCode}
            name={name}
            gender={gender}
            birthYear={birthYear}
            birthMonth={birthMonth}
            birthDate={birthDate}
            userClass={userClass}
            middleSchool={middleSchool}
            schoolContact={schoolContact}
            parentsContact={parentsContact}
            userContact={userContact}
            address={address}
            detailedAddress={detailedAddress}
            file={file}
          />
          <LetterOfRecommendation middleSchool={middleSchool} />
          <Agreement />
          <AppicationFooter />
        </S.SubContainer>
      </div>
    </S.ApplicationForm>
  );
};

export default ApplicationForm;
