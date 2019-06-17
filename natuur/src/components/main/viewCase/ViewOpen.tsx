import React, { FC } from "react";

import { ContentsSorter } from "../../../styles/Main";
import {
  MainProgress,
  MainTitles,
  MainTimeStemp,
  MainButton
} from "../../../components/main";

interface Props {
  checkImgList: boolean[];
  timeStempChecker: number;
  periodList: Array<{ title: string; date: number }>;
  periodListFactor: number;
  timeStempDate: string[];
  formatPeriod: string;
  progressWidth: number;
  setTimeStempChecker(timeStempNumber: number): void;
}

const ViewOpen: FC<Props> = ({
  checkImgList,
  setTimeStempChecker,
  timeStempChecker,
  periodList,
  periodListFactor,
  timeStempDate,
  formatPeriod,
  progressWidth
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
    />
    <MainTimeStemp content={timeStempDate[timeStempChecker]} />
    <MainButton
      content={
        sessionStorage.getItem("token") ? "원서작성 하러가기" : "로그인 하기"
      }
      clickEvent={() => {
        return 0;
      }}
    />
  </ContentsSorter>
);

export default ViewOpen;
