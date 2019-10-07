import React, { FC, useState, useEffect, useRef } from "react";

import * as S from "../../../styles/Authorization";
import { TextInput, EventButton } from "../../default/Common";
import loding from "../../../assets/loding.gif";

interface OwnProps {
  isCheckAuthorization?: boolean;
  userVerify: string;
  userEmail: string;
  userPassword: string;
  isPasswordClose: boolean;
  isGetSuccess: boolean;
  isGetError: boolean;
  isSignUpWaiting: boolean;
  isReadOnly: boolean;
  handleChanger?(event: React.ChangeEvent<HTMLInputElement>): void;
  getRegisterVerifyNumber({ verify }: { verify: string }): void;
  signUp({ email, password }: { email: string; password: string }): void;
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
  setVerbleibendeZeit: (time: string) => void,
  setIsResend: (isResend: boolean) => void
) => {
  setIsResend(true);

  const timer = setInterval(() => {
    if (time === 0) {
      setIsResend(false);
      clearInterval(timer);
    }

    setVerbleibendeZeit(getTime(time));
    time -= 1;
  },                        1000);

  return timer;
};

const CertificationInputRaw: FC<OwnProps> = ({
  handleChanger,
  userVerify,
  userEmail,
  userPassword,
  isCheckAuthorization,
  isPasswordClose,
  isSignUpWaiting,
  getRegisterVerifyNumber,
  isReadOnly,
  signUp
}) => {
  const didMountRef = useRef(false);
  const [verbleibendeZeit, setVerbleibendeZeit] = useState("03:00");
  const [isOpenTextBox, setIsOpenTextBox] = useState(false);
  const [isResend, setIsResend] = useState(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      const timer = useTimer(180, setVerbleibendeZeit, setIsResend);

      return () => clearInterval(timer);
    }
  },        []);

  useEffect(() => {
    if (isSignUpWaiting) {
      setVerbleibendeZeit("03:00");
      useTimer(180, setVerbleibendeZeit, setIsResend);
    }
  },        [isSignUpWaiting]);

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
        buttonEvent={() => getRegisterVerifyNumber({ verify: userVerify })}
        buttonMargin={12}
      />

      <EventButton
        isButtonDisable={!isPasswordClose || isResend}
        buttonWidth={78}
        buttonContent="재전송"
        buttonEvent={() => signUp({ email: userEmail, password: userPassword })}
        buttonMargin={14}
      />

      {isSignUpWaiting ? (
        <img src={loding} alt="로딩" style={{ marginLeft: "5px" }} />
      ) : (
        <S.Timer>
          {verbleibendeZeit === "00:00"
            ? "다시 시도해주세요."
            : verbleibendeZeit}
        </S.Timer>
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
            이메일주소와 스팸메일함을 확인해주세요.
          </S.MiniTextBoxContent>
        </S.MiniTextBox>
      )}
    </S.InfomationInputBoxCoverWrapper>
  );
};

export default CertificationInputRaw;
