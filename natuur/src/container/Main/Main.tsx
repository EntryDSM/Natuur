import React, {
  FC,
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo
} from "react";

import { Mainhider, MainPageCover, MainContents } from "../../styles/Main";
import {
  setDateComtrolStatements,
  isDateControlStatements
} from "../../lib/utils/main";
import {
  timeChangeChecker,
  getRemainingPeriod,
  getFormatDate,
  formatTimeStempDateFactor
} from "../../lib/utils/main/progress";
import { MainHeadLine } from "../../components/default/Common";
import { ViewOpen, ViewClose } from "../../components/main";
import { PERIOD_LIST, TIME_STEMP_DATE } from "../../components/main/constance";

interface Props {
  updateAppClass(text: string): void;
}

const newDate = new Date();
const todayYear = newDate.getFullYear();
const todayMonth = newDate.getMonth();
const todayDate = newDate.getDate();
const todayHours = newDate.getHours();

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
  const [periodListFactor, setPeriodListFactor] = useState(timeStempDateFactor);

  const remainingPeriodFactor = getRemainingPeriod(
    todayYear,
    todayMonth,
    todayDate,
    todayHours,
    periodListFactor,
    PERIOD_LIST
  );

  const [formatPeriod, setFormatPeriod] = useState(
    getFormatDate(remainingPeriodFactor)
  );
  const [checkImgList, setCheckImgList] = useState([
    false,
    false,
    false,
    false,
    false
  ]);
  const [remainingPeriod, setRemainingPeriod] = useState(remainingPeriodFactor);
  const [isPresentEndPoint, setIsFirstPresentEndPoint] = useState(
    setDateComtrolStatements(PERIOD_LIST)
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

      if (remainingPeriod) {
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
              timeStempDate={TIME_STEMP_DATE}
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
