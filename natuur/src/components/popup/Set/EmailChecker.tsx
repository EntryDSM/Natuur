import React, { FC } from "react";

import * as S from "../../../styles/default/popup";

interface Props {
  userEmail: string;
  setUserEmail: (userEmail: string) => void;
  changeSetNextPasswordModal: () => void;
  actionPressEnter: (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    handleEvent: () => void
  ) => void;
}

const EmailChecker = ({
  userEmail,
  setUserEmail,
  changeSetNextPasswordModal,
  actionPressEnter
}) => (
  <>
    <S.ElementCover>
      <S.Text titleText>
        본인인증 시 인증했던 이메일 주소를 입력해주세요.
      </S.Text>
    </S.ElementCover>

    <S.InputCover>
      <S.InputBox
        value={userEmail}
        onKeyPress={e =>
          actionPressEnter(
            e,
            () => userEmail.trim() && changeSetNextPasswordModal()
          )
        }
        onChange={({ target: { value } }) => setUserEmail(value)}
        type="text"
        placeholder="이메일"
      />
    </S.InputCover>

    <S.ButtonCover>
      <S.Button
        onClick={() => userEmail.trim() && changeSetNextPasswordModal()}
      >
        다음
      </S.Button>
    </S.ButtonCover>
  </>
);

export default EmailChecker;
