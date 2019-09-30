import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "../../../styles/preview/admissionConsent";
import WaterMark from "../WaterMark";
import AdmissionHeader from "./AdmissionHeader";
import AgreeTable from "./AgreeTable";
import AdmissionBody from "./AdmissionBody";
import { FinalSubmitDependencyState } from "../FinalSubmitButton";
import { AppState } from "../../../core/redux/store/store";

interface OwnProps {
  isPrint?: boolean;
}

const AdmissionConsent: FC<OwnProps> = ({ isPrint }) => {
  const {
    examCode,
    name,
    gender,
    birthYear,
    birthMonth,
    birthDate,
    parentsName,
    userContact,
    parentsContact,
    address,
    detailedAddress
  } = useSelector<AppState, FinalSubmitDependencyState>(state => ({
    examCode: state.mainReducer.exam_code,
    name: state.PersonalReducer.name,
    gender: state.PersonalReducer.gender,
    birthYear: state.PersonalReducer.birthYear,
    birthMonth: state.PersonalReducer.birthMonth,
    birthDate: state.PersonalReducer.birthDate,
    parentsName: state.PersonalReducer.parentsName,
    userContact: state.PersonalReducer.userContact,
    parentsContact: state.PersonalReducer.parentsContact,
    address: state.PersonalReducer.address,
    detailedAddress: state.PersonalReducer.detailedAddress
  }));

  const [recommendationLetterDependency] = useState(
    !!(
      examCode &&
      name &&
      gender &&
      birthYear &&
      birthMonth &&
      birthDate &&
      parentsName &&
      userContact &&
      parentsContact &&
      address
    )
  );

  return (
    <S.AdmissionConsent>
      {!isPrint && <WaterMark isShow={!recommendationLetterDependency} />}
      <div id="mainDiv">
        <S.SubContainer>
          <S.Title>입학동의서</S.Title>
          <AdmissionHeader examCode={examCode} />
          <AgreeTable
            name={name}
            gender={gender}
            birthYear={birthYear}
            birthMonth={birthMonth}
            birthDate={birthDate}
            parentsName={parentsName}
            userContact={userContact}
            parentsContact={parentsContact}
            address={address}
            detailedAddress={detailedAddress}
          />
          <AdmissionBody />
        </S.SubContainer>
      </div>
    </S.AdmissionConsent>
  );
};

export default AdmissionConsent;
