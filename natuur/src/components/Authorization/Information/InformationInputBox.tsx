import React, { FC, useState, useEffect, useCallback } from "react";

import {
  InfomationInputBoxCover,
  GradationHorizon
} from "../../../styles/Authorization";
import AcceptButton from "../Accept/AcceptButton";
import InputRow from "./InputRow";
import CertificationInputRaw from "./CertificationInputRaw";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../../container/Authorization/SignUp/ConnectToInformationInputBox";
import { emailRegular, passwordRegular } from "../../../lib/regularExpressions";

interface OwnProps {
  userEmail: string;
  userPassword: string;
  userPasswordCheck: string;
  updateUserEmail(targetValue: string): any;
  updateUserPassword(targetValue: string): void;
  updateUserPasswordCheck(targetValue: string): void;
  updateToastr(toastrInformation: {
    toastrState?: "info" | "errorState" | "success" | "warning";
    toastrTitle?: string;
    toastrMessage?: string;
    timer?: number;
    id?: number;
  }): void;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;

const InformationInputBox: FC<Props> = ({
  userEmail,
  userPassword,
  userPasswordCheck,
  updateUserEmail,
  updateUserPassword,
  updateUserPasswordCheck,
  isSignUpWaiting,
  isGetSuccess,
  isGetError,
  isSignUpSuccess,
  isSignUpError,
  signUp,
  getRegisterVerifyNumber,
  updateToastr
}) => {
  const [isCertification, setIsCertification] = useState(false);
  const [isPasswordClose, setIsPasswordClose] = useState(true);
  const [userVerify, setUserVerify] = useState("");

  const createToastr = useCallback(
    (message: string, state: "info" | "errorState" | "success" | "warning") => {
      updateToastr({
        timer: 5,
        toastrMessage: message,
        toastrState: state
      });
    },
    []
  );

  useEffect(() => {
    if (isSignUpSuccess) {
      createToastr("인증메일이 발송되었습니다.", "success");
      setIsCertification(true);
    } else if (!isSignUpSuccess) {
      setIsCertification(false);
    }

    if (isGetSuccess) {
      setIsPasswordClose(false);
    } else if (!isGetSuccess) {
      setIsPasswordClose(true);
    }

    return () => {
      setIsCertification(false);
      setIsPasswordClose(true);
    };
  },        [isSignUpSuccess, isGetSuccess]);

  useEffect(() => {
    if (isSignUpError) {
      createToastr("이미 가입된 계정입니다.", "errorState");
    }
  },        [isSignUpError]);

  const handleEmail = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
      updateUserEmail(value);
    },
    []
  );

  const handleVerify = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
      setUserVerify(value);
    },
    []
  );

  const handlePassword = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
      updateUserPassword(value);
    },
    []
  );

  const handlePasswordCheck = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
      updateUserPasswordCheck(value);
    },
    []
  );

  return (
    <InfomationInputBoxCover>
      <div>
        {/* 이메일 입력란 */}
        <InputRow
          title="이메일"
          placeHolder="example@dsmhs.kr"
          name="emailInput"
          type="text"
          isReadOnly={isCertification}
          isCheckMark={emailRegular.test(userEmail)}
          handleChanger={handleEmail}
        />

        <GradationHorizon />

        {/* 비밀번호 입력란 */}
        <InputRow
          title="비밀번호"
          placeHolder="••••••••"
          name="passwordInput"
          type="password"
          isWarning
          isReadOnly={isCertification}
          warningMessage="*영문(대소문자 구분),숫자 포함 8자리 이상 특수기호 가능"
          isCheckMark={passwordRegular.test(userPassword)}
          handleChanger={handlePassword}
        />

        <GradationHorizon />

        {/* 비밀번호 (확인) 입력란 */}
        <InputRow
          title="비밀번호 확인"
          placeHolder="••••••••"
          name="passwordCheckInput"
          type="password"
          isReadOnly={isCertification}
          isCheckMark={
            !!(userPassword === userPasswordCheck && userPasswordCheck)
          }
          handleChanger={handlePasswordCheck}
          isWrong={!!(userPassword !== userPasswordCheck && userPassword)}
        />
        {isCertification && (
          <>
            <GradationHorizon />

            <CertificationInputRaw
              isSignUpWaiting={isSignUpWaiting}
              isReadOnly={isGetSuccess}
              handleChanger={handleVerify}
              isCheckAuthorization={!!userVerify}
              userEmail={userEmail}
              userPassword={userPassword}
              userVerify={userVerify}
              isPasswordClose={isPasswordClose}
              isGetSuccess={isGetSuccess}
              isGetError={isGetError}
              getRegisterVerifyNumber={getRegisterVerifyNumber}
              signUp={signUp}
            />
          </>
        )}
      </div>
      <AcceptButton
        updateToastr={updateToastr}
        isCertification={isCertification}
        isSuccess={
          emailRegular.test(userEmail) &&
          passwordRegular.test(userPassword) &&
          !!(userPassword === userPasswordCheck && userPasswordCheck)
        }
        signUp={signUp}
        isGetSuccess={isGetSuccess}
        userEmail={userEmail}
        userPassword={userPassword}
        isPasswordClose={isPasswordClose}
      />
    </InfomationInputBoxCover>
  );
};

export default InformationInputBox;
