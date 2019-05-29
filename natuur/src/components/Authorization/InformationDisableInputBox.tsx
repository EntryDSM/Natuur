import React, { FC } from "react";

import AcceptDisableButton from "./AcceptDisableButton";
import {
  InfomationInputBoxCover,
  GradationHorizon
} from "../../styles/Authorization";
import InputRow from "../default/Common/InputRow";

interface Props {
  updateToastr(toastrInformation: object): void;
  removeToastr(): void;
}

const InformationDisableInputBox: FC<Props> = ({
  updateToastr,
  removeToastr
}) => (
  <InfomationInputBoxCover isDisable={true}>
    <div>
      {/* 이메일 입력란 */}
      <InputRow
        title="이메일"
        placeHolder="example@dsmhs.kr"
        name="emailInput"
        type="text"
        isDisable={true}
        isReadOnly={true}
      />

      <GradationHorizon isDisable={true} />

      {/* 비밀번호 입력란 */}
      <InputRow
        title="비밀번호"
        placeHolder="••••••••"
        name="passwordInput"
        type="password"
        isDisable={true}
        isWarning={true}
        isReadOnly={true}
        warningMessage="* 영문, 숫자 포함 8자리 이상 16자리 이하"
      />

      <GradationHorizon isDisable={true} />

      {/* 비밀번호 (확인) 입력란 */}
      <InputRow
        title="비밀번호 확인"
        placeHolder="••••••••"
        name="passwordCheckInput"
        type="password"
        isDisable={true}
        isReadOnly={true}
      />
    </div>
    <AcceptDisableButton
      updateToastr={updateToastr}
      removeToastr={removeToastr}
    />
  </InfomationInputBoxCover>
);

export default InformationDisableInputBox;
