import React, { FC } from "react";

import {
  PrivacyCheckBoxComponent,
  PrivacyCheckBoxInput,
  PrivacyCheckBoxLabel,
  PrivacyCheckBoxText
} from "../../../styles/Authorization";

interface Props {
  checkedState: string;
  userEmail: string;
  userPassword: string;
  userPasswordCheck: string;
  isAccept(text: string): void;
}

const PrivacyCheckBox: FC<Props> = ({
  isAccept,
  checkedState,
  userEmail,
  userPassword,
  userPasswordCheck
}) => {
  return (
    <PrivacyCheckBoxComponent>
      <PrivacyCheckBoxInput
        type="checkbox"
        id="Accept-checkbox"
        // checkState에 string값이 없으면 checked로 변경.
        onClick={() =>
          !userEmail &&
          !userPassword &&
          !userPasswordCheck &&
          (checkedState ? isAccept("") : isAccept("checked"))
        }
        className={checkedState}
      />
      <PrivacyCheckBoxLabel
        checkedState={checkedState ? true : false}
        htmlFor="Accept-checkbox"
      >
        ✔
      </PrivacyCheckBoxLabel>
      <PrivacyCheckBoxText htmlFor="Accept-checkbox">
        개인정보 이용약관에 동의합니다
      </PrivacyCheckBoxText>
    </PrivacyCheckBoxComponent>
  );
};

export default PrivacyCheckBox;
