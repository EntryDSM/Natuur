import React, { FC, useEffect } from "react";

import * as S from "../../../styles/default/popup";
import {
  mapDispatchToProps,
  mapStateToProps
} from "../../../container/default/popup/setFindPassword";

interface OwnProps {
  userEmail: string;
  changeSetNextPasswordModal: () => void;
  changeSetPrevPasswordModal: () => void;
}

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> &
  OwnProps;

const SendedVerificationNumber: FC<Props> = ({
  userEmail,
  changeSetPrevPasswordModal,
  changeSetNextPasswordModal,
  sendVerificationNumber,
  resetState,
  isSuccess,
  isError
}) => {
  useEffect(() => {
    if (isSuccess) {
      changeSetNextPasswordModal();
      resetState();
    }
  });

  return (
    <>
      <S.ElementCover>
        <S.Text isTitleText>
          {isError
            ? "인증번호를 전송하는데 실패하였습니다."
            : "아래의 이메일로 인증번호를 전송합니다"}
        </S.Text>
      </S.ElementCover>

      <S.InputCover>
        <S.InputBox isCenter type="text" value={userEmail} readOnly />
      </S.InputCover>

      <S.ButtonCover>
        <S.Button isMiddle onClick={changeSetPrevPasswordModal}>
          다시 입력
        </S.Button>
        <S.Button isMiddle onClick={() => sendVerificationNumber(userEmail)}>
          인증번호 전송
        </S.Button>
      </S.ButtonCover>
    </>
  );
};

export default SendedVerificationNumber;
