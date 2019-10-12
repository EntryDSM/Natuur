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

interface OwnProps {
  isPrint?: boolean;
}

const ApplicationForm: FC<OwnProps> = ({ isPrint }) => {
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
    parentsName,
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
    file,
    schoolCode,
    firstGradeScore,
    secondGradeScores,
    thirdGradeScores,
    conversionScore,
    attendanceScore,
    finalScore,
    volunteerScore
  } = useSelector<AppState, FinalSubmitDependencyState>(state => ({
    isGed: state.infoReducer.isGed,
    applyType: state.infoReducer.applyType,
    selectRegion: state.infoReducer.selectRegion,
    graduationClassification: state.infoReducer.graduationClassification,
    graduationYear: state.infoReducer.graduationYear,
    remarks: state.infoReducer.remarks,
    receiptCode: state.mainReducer.receipt_code,
    examCode: state.mainReducer.exam_code,
    name: state.PersonalReducer.name,
    gender: state.PersonalReducer.gender,
    birthYear: state.PersonalReducer.birthYear,
    birthMonth: state.PersonalReducer.birthMonth,
    birthDate: state.PersonalReducer.birthDate,
    userClass: state.PersonalReducer.userClass,
    parentsName: state.PersonalReducer.parentsName,
    middleSchool: state.PersonalReducer.middleSchool,
    schoolContact: state.PersonalReducer.schoolContact,
    parentsContact: state.PersonalReducer.parentsContact,
    userContact: state.PersonalReducer.userContact,
    address: state.PersonalReducer.address,
    detailedAddress: state.PersonalReducer.detailedAddress,
    file: state.PersonalReducer.file,
    schoolCode: state.PersonalReducer.schoolCode,
    firstGradeScore: state.printReducer.first_grade_score,
    secondGradeScores: state.printReducer.second_grade_score,
    thirdGradeScores: state.printReducer.third_grade_score,
    conversionScore: state.printReducer.conversion_score,
    attendanceScore: state.printReducer.attendance_score,
    finalScore: state.printReducer.final_score,
    volunteerScore: state.printReducer.volunteer_score
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
      {!isPrint && <WaterMark isShow={!admissionConsentDependency} />}
      <S.Title>2020학년도 대덕소프트웨어마이스터고등학교 입학원서</S.Title>
      <div id="MainDiv">
        <S.SubContainer id="SubDiv">
          <ApplicationTables
            isPrint={isPrint}
            schoolCode={schoolCode}
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
            parentsName={parentsName}
            schoolContact={schoolContact}
            parentsContact={parentsContact}
            userContact={userContact}
            address={address}
            detailedAddress={detailedAddress}
            file={file}
            firstGradeScore={firstGradeScore}
            secondGradeScores={secondGradeScores}
            thirdGradeScores={thirdGradeScores}
            conversionScore={conversionScore}
            attendanceScore={attendanceScore}
            finalScore={finalScore}
            volunteerScore={volunteerScore}
          />
          <LetterOfRecommendation middleSchool={middleSchool} />
          <Agreement />
          <AppicationFooter name={name} parentsName={parentsName} />
        </S.SubContainer>
      </div>
    </S.ApplicationForm>
  );
};

export default ApplicationForm;
