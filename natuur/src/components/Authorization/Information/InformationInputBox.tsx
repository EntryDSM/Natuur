import React, { FC, useCallback } from "react";

import {
  InfomationInputBoxCover,
  GradationHorizon
} from "../../../styles/Authorization";
import AcceptButton from "../Accept/AcceptButton";
import InputRow from "../../default/Common/InputRow";

interface Props {
  userEmail: string;
  userPassword: string;
  userPasswordCheck: string;
  updateUserEmail(targetValue: string): any;
  updateUserPassword(targetValue: string): void;
  updateUserPasswordCheck(targetValue: string): void;
}

const InformationInputBox: FC<Props> = ({
  userEmail,
  userPassword,
  userPasswordCheck,
  updateUserEmail,
  updateUserPassword,
  updateUserPasswordCheck
}) => {
  const emailReg = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

  const handleEmail = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
      updateUserEmail(value);
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
          isCheckMark={emailReg.test(userEmail)}
          handleChanger={handleEmail}
          isButtonRow
          isCheckAuthorization={
            emailReg.test(userEmail) &&
            passwordReg.test(userPassword) &&
            !!(userPassword === userPasswordCheck && userPasswordCheck)
          }
          buttonContent="완료"
          buttonWidth={78}
          buttonMargin={12}
        />

        <GradationHorizon />

        {/* 비밀번호 입력란 */}
        <InputRow
          title="비밀번호"
          placeHolder="••••••••"
          name="passwordInput"
          type="password"
          isWarning
          warningMessage="*영문(대소문자 구분),숫자 포함 8자리 이상 특수기호 가능"
          isCheckMark={passwordReg.test(userPassword)}
          handleChanger={handlePassword}
        />

        <GradationHorizon />

        {/* 비밀번호 (확인) 입력란 */}
        <InputRow
          title="비밀번호 확인"
          placeHolder="••••••••"
          name="passwordCheckInput"
          type="password"
          isCheckMark={
            !!(userPassword === userPasswordCheck && userPasswordCheck)
          }
          handleChanger={handlePasswordCheck}
          isWrong={!!(userPassword !== userPasswordCheck && userPassword)}
        />
      </div>
      <AcceptButton />
    </InfomationInputBoxCover>
  );
};

export default InformationInputBox;
