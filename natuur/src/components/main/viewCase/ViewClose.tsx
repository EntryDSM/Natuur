import React, { FC } from "react";

import * as S from "../../../styles/Main";
import MainButton from "../viewCase/button/MainButton";
import ViewCloseContentCover from "./ViewCloseContentCover";
import { loginEvent } from "../../../lib/utils/modal/login";
import {
  getIsWaitingPeriod,
  getWaitingPeriodConfirmedLetter
} from "../../../lib/utils/main/viewClose";

const isSettingCookie = (accessToken: string): boolean =>
  accessToken !== "" && accessToken !== null ? true : false;

interface Props {
  setIsOpenView: (isOpenView: boolean) => void;
  getIsUpdatePopUp: () => void;
  accessToken: string;
  updatePopUpCase(popUpCase: string): void;
}

const ViewClose: FC<Props> = ({
  setIsOpenView,
  getIsUpdatePopUp,
  updatePopUpCase,
  accessToken
}) => {
  const isWaitingPeriod: boolean = getIsWaitingPeriod();
  return (
    <S.ContentsSorter>
      {isSettingCookie(accessToken) ? (
        <ViewCloseContentCover />
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
