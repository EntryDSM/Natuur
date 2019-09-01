import React, { FC } from "react";
import { useSelector } from "react-redux";

import * as S from "../../../styles/preview/applicationForm";
import ApplicationTables from "./AppicationTables";
import LetterOfRecommendation from "./LetterOfRecommendation";
import Agreement from "./Agreement";
import AppicationFooter from "./AppicationFooter";
import WaterMark from "../WaterMark";
import { AppState } from "../../../core/redux/store/store";

interface ReduxProps {
  userName: string;
}

const ApplicationForm: FC = () => {
  const { userName } = useSelector<AppState, ReduxProps>(state => ({
    userName: state.PersonalReducer.name
  }));

  return (
    <S.ApplicationForm>
      <WaterMark isShow={true} />
      <S.Title>2020학년도 대덕소프트웨어마이스터고등학교 입학원서</S.Title>
      <div id="MainDiv">
        <S.SubContainer id="SubDiv">
          <ApplicationTables />
          <LetterOfRecommendation />
          <Agreement />
          <AppicationFooter />
        </S.SubContainer>
      </div>
    </S.ApplicationForm>
  );
};

export default ApplicationForm;
