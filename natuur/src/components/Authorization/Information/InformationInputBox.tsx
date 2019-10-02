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
  isSendSuccess,
  isGetSuccess,
  isSendError,
  isGetError,
  isSignUpSuccess,
  isSignUpError,
  signUp,
  isSendWaiting,
  getRegisterVerifyNumber,
  sendAuthenticationNumberByEmailApi,
  updateToastr
}) => {
  const [isCertification, setIsCertification] = useState(false);
  const [isPasswordClose, setIsPasswordClose] = useState(true);
  const [userVerify, setUserVerify] = useState("");

  useEffect(() => {
    if (isSignUpSuccess) {
      setIsCertification(true);
    }

    if (isGetSuccess) {
      setIsPasswordClose(false);
    }

    return () => {
      setIsCertification(false);
      setIsPasswordClose(true);
    };
  },        [isSendSuccess, isGetSuccess]);

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
            <CertificationInputRaw
              isReadOnly={isGetSuccess}
              handleChanger={handleVerify}
              isCheckAuthorization={!!userVerify}
              userEmail={userEmail}
              userPassword={userPassword}
              userVerify={userVerify}
              isPasswordClose={isPasswordClose}
              isSendSuccess={isSendSuccess}
              isGetSuccess={isGetSuccess}
              isSendError={isSendError}
              isGetError={isGetError}
              isSendWaiting={isSendWaiting}
              getRegisterVerifyNumber={getRegisterVerifyNumber}
              signUp={signUp}
            />

            <GradationHorizon />
          </>
        )}
      </div>
      <AcceptButton
        updateToastr={updateToastr}
        isSuccess={
          emailRegular.test(userEmail) &&
          passwordRegular.test(userPassword) &&
          !!(userPassword === userPasswordCheck && userPasswordCheck)
        }
        signUp={signUp}
        isSignUpSuccess={isSignUpSuccess}
        isSignUpError={isSignUpError}
        userEmail={userEmail}
        userPassword={userPassword}
        isPasswordClose={isPasswordClose}
      />
    </InfomationInputBoxCover>
  );
};

export default InformationInputBox;
