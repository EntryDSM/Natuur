import React, { FC, useState, useRef, useEffect, useCallback } from "react";

import { Mainhider, MainPageCover, MainContents } from "../../styles/Main";
import {
  setDateComtrolStatements,
  isDateControlStatements,
  getTimeStempDate
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

const newDate = new Date();
const todayYear = newDate.getFullYear();
const todayMonth = newDate.getMonth();
const todayDate = newDate.getDate();
const todayHours = newDate.getHours();

interface Props {
  updateAppClass(text: string): void;
}

const Main: FC<Props> = ({ updateAppClass }) => {
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

  const [progressWidth, setProgressWidth] = useState(0);
  const [isOpenView, setIsOpenView] = useState(false);
  const [timeStempChecker, setTimeStempChecker] = useState(timeStempDateFactor);
  const [checkImgList, setCheckImgList] = useState([
    false,
    false,
    false,
    false,
    false
  ]);

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

      if (remainingPeriodFactor) {
        if (isDateControlStatements(PERIOD_LIST, isPresentEndPoint)) {
          setIsOpenView(true);
        } else {
          setIsOpenView(false);
        }
      }
    }
  },        []);

  return (
    <Mainhider>
      <MainPageCover>
        <MainHeadLine title="2020 신입생 모집" />
        <MainContents>
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
            />
          ) : (
            <ViewClose />
          )}
        </MainContents>
      </MainPageCover>
    </Mainhider>
  );
};

export default Main;
