import React, { FC } from "react";

import { ContentsSorter } from "../../../styles/Main";
import { loginEvent } from "../../../lib/utils/modal/login";
import {
  MainProgress,
  MainTitles,
  MainTimeStemp,
  MainButton
} from "../../../components/main";

interface Props {
  checkImgList: boolean[];
  timeStempChecker: number;
  periodList: Array<{ title: string; startDate: Date; endDate: Date }>;
  periodListFactor: number;
  timeStempDate: string[];
  formatPeriod: string;
  progressWidth: number;
  getIsUpdatePopUp: () => void;
  accessToken: string;
  setTimeStempChecker(timeStempNumber: number): void;
  updatePopUpCase(popUpCase: string): void;
}

const ViewOpen: FC<Props> = ({
  checkImgList,
  setTimeStempChecker,
  timeStempChecker,
  periodList,
  periodListFactor,
  timeStempDate,
  formatPeriod,
  progressWidth,
  getIsUpdatePopUp,
  updatePopUpCase,
  accessToken
}) => (
  <ContentsSorter>
    <MainTitles
      periodList={periodList}
      periodListFactor={periodListFactor}
      remainingPeriod={formatPeriod}
    />
    <MainProgress
      periodList={periodList}
      checkImgList={checkImgList}
      progressWidth={progressWidth}
      setTimeStempChecker={setTimeStempChecker}
      timeStempChecker={timeStempChecker}
    />
    <MainTimeStemp
      content={
        timeStempChecker >= 0
          ? timeStempDate[timeStempChecker]
          : "이용기간이 아닙니다."
      }
    />
    {new Date() < periodList[0].endDate && (
      <MainButton
        content={
          timeStempChecker < 0
            ? "대기"
            : accessToken !== "" && accessToken !== undefined
            ? "원서작성 하러가기"
            : "로그인 하기"
        }
        clickEvent={
          accessToken !== "" && accessToken !== undefined
            ? () => console.log(1)
            : () => loginEvent(getIsUpdatePopUp, updatePopUpCase, "login")
        }
      />
    )}
  </ContentsSorter>
);

export default ViewOpen;
