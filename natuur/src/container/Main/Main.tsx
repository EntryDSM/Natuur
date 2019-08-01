import React, { FC, useState, useRef, useEffect, useCallback } from "react";
import { connect } from "react-redux";

import * as S from "../../styles/Main";
import {
  setDateComtrolStatements,
  isDateControlStatements,
  getTimeStempDate,
  decideViewFirstEnter
} from "../../lib/utils/main";
import {
  timeChangeChecker,
  getRemainingPeriod,
  getFormatDate,
  formatTimeStempDateFactor
} from "../../lib/utils/main/progress";
import { MainHeadLine } from "../../components/default/Common";
import { ViewOpen } from "../../components/main";
import ConnectViewClose from "./ConnectViewClose";
import { PERIOD_LIST } from "../../components/main/constance";
import {
  getIsUpdatePopUp,
  updatePopUpCase
} from "../../core/redux/actions/popup";
import { getUserApplicantInfo } from "../../core/redux/actions/main";
import PopUp from "../default/popup/PopUp";
import { AppState } from "../../core/redux/store/store";

const mapStateToProps = (state: AppState) => ({
  userEmail: state.userReducer.userEmail
});

const mapDispatchToProps = dispatch => ({
  getIsUpdatePopUp: () => dispatch(getIsUpdatePopUp()),
  updatePopUpCase: (popUpCase: "default" | "login" | "set" | "check") =>
    dispatch(updatePopUpCase(popUpCase)),
  getUserApplicantInfo: ({
    email,
    accessToken
  }: {
    email: string;
    accessToken: string;
  }) => dispatch(getUserApplicantInfo({ email, accessToken }))
});

interface OwnProps {
  accessToken: string;
  updateAppClass(text: string): void;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;

const newDate = new Date();
const todayYear = newDate.getFullYear();
const todayMonth = newDate.getMonth();
const todayDate = newDate.getDate();
const todayHours = newDate.getHours();

const Main: FC<Props> = ({
  updateAppClass,
  getIsUpdatePopUp,
  updatePopUpCase,
  accessToken,
  userEmail
}) => {
  const didMountRef = useRef(false);

  const timeStempDateFactor = useCallback(
    () =>
      formatTimeStempDateFactor(
        todayYear,
        todayMonth,
        todayDate,
        todayHours,
        PERIOD_LIST
      ),
    []
  );

  const periodListFactor = timeStempDateFactor();
  const remainingPeriodFactor = getRemainingPeriod(
    todayYear,
    todayMonth,
    todayDate,
    todayHours,
    periodListFactor,
    PERIOD_LIST
  );
  const formatPeriod = getFormatDate(remainingPeriodFactor);
  const isPresentEndPoint = setDateComtrolStatements(PERIOD_LIST);

  const [progressWidth, setProgressWidth] = useState(0);
  const [timeStempChecker, setTimeStempChecker] = useState(timeStempDateFactor);
  const [checkImgList, setCheckImgList] = useState([
    false,
    false,
    false,
    false,
    false
  ]);
  const [isOpenView, setIsOpenView] = useState(
    decideViewFirstEnter(
      remainingPeriodFactor,
      isDateControlStatements(PERIOD_LIST, isPresentEndPoint)
    )
  );

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (accessToken) {
        getUserApplicantInfo({ email: userEmail, accessToken });
      }

      updateAppClass("main-page");
      timeChangeChecker(
        periodListFactor,
        setProgressWidth,
        setCheckImgList,
        PERIOD_LIST
      );
    }
  },        []);

  return (
    <>
      <PopUp
        getIsUpdatePopUp={getIsUpdatePopUp}
        updatePopUpCase={updatePopUpCase}
      />
      <S.Mainhider>
        <S.MainPageCover>
          <MainHeadLine title="2020 신입생 모집" />
          <S.MainContents>
            {isOpenView ? (
              <ViewOpen
                checkImgList={checkImgList}
                timeStempChecker={timeStempChecker}
                setTimeStempChecker={setTimeStempChecker}
                periodList={PERIOD_LIST}
                periodListFactor={periodListFactor}
                timeStempDate={getTimeStempDate(PERIOD_LIST)}
                formatPeriod={formatPeriod}
                progressWidth={progressWidth}
                getIsUpdatePopUp={getIsUpdatePopUp}
                updatePopUpCase={updatePopUpCase}
                accessToken={accessToken}
              />
            ) : (
              <ConnectViewClose
                setIsOpenView={setIsOpenView}
                getIsUpdatePopUp={getIsUpdatePopUp}
                updatePopUpCase={updatePopUpCase}
                periodList={PERIOD_LIST}
                accessToken={accessToken}
              />
            )}
          </S.MainContents>
        </S.MainPageCover>
      </S.Mainhider>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
