import React, { FC } from "react";

import * as S from "../../../styles/Header";

interface OwnProps {
  refreshToken: string;
  logOut: (payload: { refreshToken: string }) => void;
}

const DropDown: FC<OwnProps> = ({ refreshToken, logOut }) => (
  <S.HeaerDropDownBox>
    <div>
      <S.Button to="/mypage">마이페이지</S.Button>
      <S.Horizon />
      <S.Button onClick={() => logOut({ refreshToken })} to="/" as="button">
        로그아웃
      </S.Button>
    </div>
  </S.HeaerDropDownBox>
);

export default DropDown;
