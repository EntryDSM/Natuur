import React, { FC, useEffect } from "react";

import * as S from "../../../styles/Main";
import MainButton from "../viewCase/button/MainButton";
import ViewCloseContentCover from "./ViewCloseContentCover";
import { loginEvent } from "../../../lib/utils/modal/login";
import {
  getIsWaitingPeriod,
  getWaitingPeriodConfirmedLetter
} from "../../../lib/utils/main/viewClose";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../../container/Main/ConnectViewClose";

const isSettingCookie = (accessToken: string): boolean =>
  accessToken !== "" && accessToken !== null ? true : false;

interface OwnProps {
  setIsOpenView: (isOpenView: boolean) => void;
  getIsUpdatePopUp: () => void;
  accessToken: string;
  periodList: Array<{ title: string; startDate: Date; endDate: Date }>;
  updatePopUpCase(popUpCase: string): void;
}
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;

const ViewClose: FC<Props> = ({
  setIsOpenView,
  getIsUpdatePopUp,
  updatePopUpCase,
  accessToken,
  isPassedFirstApply,
  isPassedFinalApply,
  isSuccess,
  isWaiting,
  getUserApplicantStatus,
  periodList
}) => {
  useEffect(() => {
    getUserApplicantStatus({ accessToken });
  },        []);

  const isWaitingPeriod: boolean = getIsWaitingPeriod();
  return (
    <S.ContentsSorter>
      {isSettingCookie(accessToken) ? (
        <ViewCloseContentCover
          periodList={periodList}
          isPassedFirstApply={isPassedFirstApply}
          isPassedFinalApply={isPassedFinalApply}
          isSuccess={isSuccess}
          isWaiting={isWaiting}
        />
      ) : (
        <>
          <S.ViewCloseText isWaitingPeriod={isWaitingPeriod}>
            2020년도 신입생 모집이{" "}
            <S.ViewCloseStressText>종료되었습니다.</S.ViewCloseStressText>
          </S.ViewCloseText>
          <S.ViewCloseText isWaitingPeriod>
            지원해주셔서 감사드립니다.
          </S.ViewCloseText>
          {isWaitingPeriod ? null : (
            <S.ViewCloseText isWaitingPeriod>
              로그인하여 합격여부를 확인해주세요
            </S.ViewCloseText>
          )}
        </>
      )}
      <MainButton
        content={
          isSettingCookie(accessToken)
            ? "돌아가기"
            : getWaitingPeriodConfirmedLetter(isWaitingPeriod)
        }
        clickEvent={
          isSettingCookie(accessToken)
            ? () => setIsOpenView(true)
            : () => loginEvent(getIsUpdatePopUp, updatePopUpCase, "login")
        }
        isWaitingPeriod={isWaitingPeriod}
      />
    </S.ContentsSorter>
  );
};

export default ViewClose;
