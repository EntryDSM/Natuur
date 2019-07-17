import React, { FC, useState, useEffect } from "react";

import * as S from "../../../styles/default/popup";
import EntryLogo from "../../../assets/entry_logo.png";
import { changeComponent } from "../../../lib/utils/modal/login";
import withPressEvent from "../../common/withPressEvent";
import {
  mapDispatchToProps,
  mapStateToProps
} from "../../../container/Authorization/Login/Login";

interface OwnProps {
  updatePopUpCase(popUpCase: "default" | "login" | "set" | "check"): void;
  getIsUpdatePopUp(): void;
  handleKeyPress(
    { key }: React.KeyboardEvent<HTMLInputElement>,
    handleEvent: () => void
  ): void;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;

const LoginPopUp: FC<Props> = ({
  updatePopUpCase,
  getIsUpdatePopUp,
  getJWTcredential,
  resetState,
  isError,
  isSuccess,
  accessToken,
  refreshToken,
  handleKeyPress
}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  useEffect(() => {
    if (isSuccess) {
      getIsUpdatePopUp();
    }
  });

  return (
    <>
      <S.LogoCover>
        {isError ? (
          <S.Text isLogoText>입력한 정보를 다시 확인해주세요</S.Text>
        ) : (
          <S.EntryLogo src={EntryLogo} alt="Entry로고" />
        )}
      </S.LogoCover>

      <S.InputCover>
        <S.InputBox
          value={userEmail}
          onKeyPress={e =>
            handleKeyPress(e, () =>
              getJWTcredential({ email: userEmail, password: userPassword })
            )
          }
          onChange={({ target: { value } }) => setUserEmail(value)}
          type="text"
          placeholder="이메일"
        />
        <S.InputBox
          value={userPassword}
          onKeyPress={e =>
            handleKeyPress(e, () =>
              getJWTcredential({ email: userEmail, password: userPassword })
            )
          }
          onChange={({ target: { value } }) => setUserPassword(value)}
          type="password"
          placeholder="비밀번호"
        />
      </S.InputCover>

      <S.ButtonCover isLoginButton>
        <S.Button
          onClick={() =>
            getJWTcredential({ email: userEmail, password: userPassword })
          }
        >
          로그인
        </S.Button>
      </S.ButtonCover>

      <S.PeculiarCover>
        <S.PeculiarLink
          onClick={() => changeComponent(resetState, getIsUpdatePopUp)}
          to="/auth"
        >
          아직 계정이 없으신가요?
        </S.PeculiarLink>
        <S.PeculiarText
          onClick={() =>
            changeComponent(resetState, () => updatePopUpCase("set"))
          }
        >
          비밀번호 재설정
        </S.PeculiarText>
      </S.PeculiarCover>
    </>
  );
};

export default LoginPopUp;
