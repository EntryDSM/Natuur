import React, { FC } from "react";

import AcceptDisableButton from "../Accept/AcceptDisableButton";
import {
  InfomationInputBoxCover,
  GradationHorizon
} from "../../../styles/Authorization";
import InputRow from "./InputRow";

interface Props {
  updateToastr(toastrInformation: object): void;
}

const InformationDisableInputBox: FC<Props> = ({ updateToastr }) => (
  <InfomationInputBoxCover isDisable>
    <div>
      {/* 이메일 입력란 */}
      <InputRow
        isCertification
        title="이메일"
        placeHolder="example@dsmhs.kr"
        name="emailInput"
        type="text"
        isReadOnly
        isButtonRow
        isCheckAuthorization={false}
        buttonContent="인증"
        buttonWidth={78}
        buttonMargin={12}
      />

      <GradationHorizon />

      {/* 비밀번호 입력란 */}
      <InputRow
        isCertification
        title="비밀번호"
        placeHolder="••••••••"
        name="passwordInput"
        type="password"
        isWarning
        isReadOnly
        warningMessage="*영문(대소문자 구분),숫자 포함 8자리 이상 특수기호 가능"
      />

      <GradationHorizon />

      {/* 비밀번호 (확인) 입력란 */}
      <InputRow
        isCertification
        title="비밀번호 확인"
        placeHolder="••••••••"
        name="passwordCheckInput"
        type="password"
        isReadOnly
      />
    </div>
    <AcceptDisableButton updateToastr={updateToastr} />
  </InfomationInputBoxCover>
);

export default InformationDisableInputBox;
