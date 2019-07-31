import React, { FC, useState, useEffect } from "react";

import * as S from "../../../styles/Authorization";
import { TextInput, EventButton } from "../../default/Common";
import loding from "../../../assets/loding.gif";

interface OwnProps {
  isCheckAuthorization?: boolean;
  userVerify: string;
  userEmail: string;
  isPasswordClose: boolean;
  isSendSuccess: boolean;
  isGetSuccess: boolean;
  isSendError: boolean;
  isGetError: boolean;
  isSendWaiting: boolean;
  isReadOnly: boolean;
  handleChanger?(event: React.ChangeEvent<HTMLInputElement>): void;
  getRegisterVerifyNumber({ verify }: { verify: string }): void;
  sendAuthenticationNumberByEmailApi({ email }: { email: string }): void;
}

const getTimeFormat = (time: number): string => {
  if (time < 10) {
    return `0${time}`;
  }
  if (time >= 10) {
    return `${time}`;
  }
};

const getTime = (time: number): string => {
  const minute = Math.floor(time / 60);
  const second = Math.floor(time - minute * 60);

  return `${getTimeFormat(minute)}:${getTimeFormat(second)}`;
};

const useTimer = (
  time: number,
  setVerbleibendeZeit: (time: string) => void
) => {
  const timer = setInterval(() => {
    if (time === 0) {
      clearInterval(timer);
    }

    setVerbleibendeZeit(getTime(time));
    time -= 1;
  },                        1000);
};

const CertificationInputRaw: FC<OwnProps> = ({
  handleChanger,
  userVerify,
  userEmail,
  isCheckAuthorization,
  isPasswordClose,
  isSendSuccess,
  isGetSuccess,
  isSendError,
  isGetError,
  isSendWaiting,
  getRegisterVerifyNumber,
  sendAuthenticationNumberByEmailApi,
  isReadOnly
}) => {
  const [verbleibendeZeit, setVerbleibendeZeit] = useState("03:00");
  const [isOpenTextBox, setIsOpenTextBox] = useState(false);

  useEffect(() => {
    return useTimer(180, setVerbleibendeZeit);
  },        []);

  useEffect(() => {
    isSendSuccess && useTimer(180, setVerbleibendeZeit);
  });

  return (
    <S.InfomationInputBoxCoverWrapper>
      <S.InfomationInputBoxWapperTitle>
        인증하기
      </S.InfomationInputBoxWapperTitle>
      <TextInput
        width={180}
        type="text"
        placeHolder="코드를 입력해주세요"
        name="certification"
        handleChanger={handleChanger}
        isReadOnly={isReadOnly}
        isCertification={false}
      />
      <EventButton
        isButtonDisable={!isCheckAuthorization}
        buttonWidth={78}
        buttonContent={isPasswordClose ? "확인" : "인증완료"}
        buttonEvent={() =>
          isCheckAuthorization &&
          getRegisterVerifyNumber({ verify: userVerify })
        }
        buttonMargin={12}
      />

      <EventButton
        buttonWidth={78}
        buttonContent="재전송"
        buttonEvent={() =>
          sendAuthenticationNumberByEmailApi({ email: userEmail })
        }
        buttonMargin={14}
      />

      {isSendWaiting ? (
        <img src={loding} alt="로딩" style={{ marginLeft: "5px" }} />
      ) : (
        <S.Timer>{verbleibendeZeit}</S.Timer>
      )}

      <S.InformationInputSpaceWarning
        onClick={() => setIsOpenTextBox(!isOpenTextBox)}
        isCertification={false}
        style={{ cursor: "pointer" }}
      >
        *혹시 메일이 오지않았나요?
      </S.InformationInputSpaceWarning>
      {isOpenTextBox && (
        <S.MiniTextBox>
          <S.MiniTextBoxContent>
            메일주소가 example@dsmhs.kr이 맞는지 확인해주세요
          </S.MiniTextBoxContent>
        </S.MiniTextBox>
      )}
    </S.InfomationInputBoxCoverWrapper>
  );
};

export default CertificationInputRaw;
