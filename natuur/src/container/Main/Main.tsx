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
import { ViewOpen, ViewClose } from "../../components/main";
import { PERIOD_LIST } from "../../components/main/constance";
import {
  getIsUpdatePopUp,
  updatePopUpCase
} from "../../core/redux/actions/popup";
import PopUp from "../default/popup/PopUp";

const mapDispatchToProps = dispatch => ({
  getIsUpdatePopUp: () => dispatch(getIsUpdatePopUp()),
  updatePopUpCase: (popUpCase: "default" | "login" | "set" | "check") =>
    dispatch(updatePopUpCase(popUpCase))
});

interface OwnProps {
  accessToken: string;
  updateAppClass(text: string): void;
}

type Props = ReturnType<typeof mapDispatchToProps> & OwnProps;

const newDate = new Date();
const todayYear = newDate.getFullYear();
const todayMonth = newDate.getMonth();
const todayDate = newDate.getDate();
const todayHours = newDate.getHours();

const Main: FC<Props> = ({
  updateAppClass,
  getIsUpdatePopUp,
  updatePopUpCase,
  accessToken
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
              <ViewClose
                setIsOpenView={setIsOpenView}
                getIsUpdatePopUp={getIsUpdatePopUp}
                updatePopUpCase={updatePopUpCase}
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
  null,
  mapDispatchToProps
)(Main);
