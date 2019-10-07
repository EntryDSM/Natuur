import React, { FC, useState } from "react";

import * as S from "../../../styles/default/popup";
import {
  changeSetNextPasswordModal,
  changeSetPrevPasswordModal,
  selectSetPasswordModal,
  ModalType
} from "../../../lib/utils/modal/setPassword";
import SendVerificationNumberContainer from "../../../container/default/popup/setFindPassword";
import WriteNewPasswordContainer from "../../../container/default/popup/writeNewPassword";
import WriteApplicantNumberContainer from "../../../container/default/popup/writeApplicantNumber";
import { EmailChecker } from ".";

interface OwnProps {
  handleKeyPress: (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    handleEvent: () => void
  ) => void;
  updatePopUpCase(popUpCase: "default" | "login" | "set" | "check"): void;
}

const SetPasswordPopUp: FC<OwnProps> = ({
  handleKeyPress,
  updatePopUpCase
}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userVerify, setUserVerify] = useState("");
  const [modalCase, setModalCase] = useState<ModalType>({
    1: {
      component: "EmailChecker",
      select: true
    },
    2: {
      component: "SendVerificationNumber",
      select: false
    },
    3: {
      component: "WriteVerificationNumber",
      select: false
    },
    4: {
      component: "WriteNewPassword",
      select: false
    }
  });

  return (
    <>
      <S.LogoCover isPopUpTitle>
        <S.Title>비밀번호 재설정</S.Title>
      </S.LogoCover>

      <S.TitleHorizon />

      {selectSetPasswordModal(modalCase) === "EmailChecker" && (
        <EmailChecker
          handleKeyPress={handleKeyPress}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          changeSetNextPasswordModal={() =>
            changeSetNextPasswordModal(setModalCase, modalCase, 1)
          }
        />
      )}
      {selectSetPasswordModal(modalCase) === "SendVerificationNumber" && (
        <SendVerificationNumberContainer
          userEmail={userEmail}
          changeSetNextPasswordModal={() =>
            changeSetNextPasswordModal(setModalCase, modalCase, 2)
          }
          changeSetPrevPasswordModal={() =>
            changeSetPrevPasswordModal(setModalCase, modalCase, 2)
          }
        />
      )}
      {selectSetPasswordModal(modalCase) === "WriteVerificationNumber" && (
        <WriteApplicantNumberContainer
          userEmail={userEmail}
          userVerify={userVerify}
          setUserVerify={setUserVerify}
          changeSetNextPasswordModal={() =>
            changeSetNextPasswordModal(setModalCase, modalCase, 3)
          }
          changeSetPrevPasswordModal={() =>
            changeSetPrevPasswordModal(setModalCase, modalCase, 3)
          }
        />
      )}
      {selectSetPasswordModal(modalCase) === "WriteNewPassword" && (
        <WriteNewPasswordContainer
          userEmail={userEmail}
          updatePopUpCase={updatePopUpCase}
          handleKeyPress={handleKeyPress}
        />
      )}
    </>
  );
};

export default SetPasswordPopUp;
