import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { History } from "history";

import { ContentsSorter } from "../../../styles/Main";
import { loginEvent } from "../../../lib/utils/modal/login";
import {
  MainProgress,
  MainTitles,
  MainTimeStemp,
  MainButton
} from "../../../components/main";

interface OwnProps {
  checkImgList: boolean[];
  timeStempChecker: number;
  periodList: Array<{ title: string; startDate: Date; endDate: Date }>;
  periodListFactor: number;
  timeStempDate: string[];
  formatPeriod: string;
  progressWidth: number;
  getIsUpdatePopUp: () => void;
  accessToken: string;
  history: History;
  setTimeStempChecker(timeStempNumber: number): void;
  updatePopUpCase(popUpCase: string): void;
}

type Props = OwnProps & RouteComponentProps;

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
  accessToken,
  history
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
    <MainButton
      isWaitingPeriod={
        timeStempChecker < 0 || periodListFactor >= 1 ? true : false
      }
      content={
        timeStempChecker < 0
          ? "대기"
          : accessToken !== ""
          ? "원서작성 하러가기"
          : "로그인 하기"
      }
      clickEvent={
        timeStempChecker < 0 || periodListFactor >= 1
          ? null
          : accessToken !== ""
          ? () => history.push("/info-summary")
          : () => loginEvent(getIsUpdatePopUp, updatePopUpCase, "login")
      }
    />
  </ContentsSorter>
);

export default withRouter(ViewOpen);
