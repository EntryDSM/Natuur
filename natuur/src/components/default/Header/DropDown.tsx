import React, { FC, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as S from "../../../styles/Header";
import { updateToastr } from "../../../core/redux/actions/default";

interface OwnProps {
  refreshToken: string;
  logOut: (payload: { refreshToken: string }) => void;
  isLogOut: boolean;
}

const DropDown: FC<OwnProps> = ({ refreshToken, logOut, isLogOut }) => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const createToastr = useCallback(() => {
    dispatch(
      updateToastr({
        timer: 5,
        toastrMessage: "로그아웃 되었습니다.",
        toastrState: "success"
      })
    );
  },                               []);

  const logOutHandler = useCallback(() => {
    logOut({ refreshToken });
    createToastr();
  },                                [refreshToken]);

  useEffect(() => {
    if (isLogOut) {
      push("/");
    }
  },        [isLogOut]);

  return (
    <S.HeaerDropDownBox>
      <div>
        <S.Button to="/mypage">마이페이지</S.Button>
        <S.Horizon />
        <S.Button onClick={logOutHandler} as="button" to="/">
          로그아웃
        </S.Button>
      </div>
    </S.HeaerDropDownBox>
  );
};

export default DropDown;
