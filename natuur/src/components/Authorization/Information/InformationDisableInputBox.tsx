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
        title="이메일"
        placeHolder="example@dsmhs.kr"
        name="emailInput"
        type="text"
        isReadOnly
      />

      <GradationHorizon />

      {/* 비밀번호 입력란 */}
      <InputRow
        title="비밀번호"
        placeHolder="••••••••"
        name="passwordInput"
        type="password"
        isWarning
        isReadOnly
        warningMessage="* 영문, 숫자 포함 8자리 이상 16자리 이하"
      />

      <GradationHorizon />

      {/* 비밀번호 (확인) 입력란 */}
      <InputRow
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
