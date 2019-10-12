import React, { FC, useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import HeadLine from "../../components/default/Common/HeadLine";
import * as S from "../../styles/mypage";
import RowList from "../../components/mypage/RowList";
import PageList from "../../components/mypage/PageList";
import {
  returnApplicationDocumentState,
  applyApplicationDocument
} from "../../components/default/pagination/presenter";
import { getApplicantPhoto } from "../../core/redux/actions/personal";
import { getUserApplicantStatus } from "../../core/redux/actions/main/index";
import { AppState } from "../../core/redux/store/store";
import { updateToastr } from "../../core/redux/actions/default";

interface OwnProps {
  updateAppClass: (className: string) => void;
}

const MyPage: FC<OwnProps> = ({ updateAppClass }) => {
  const didMountRef = useRef(false);
  const { push } = useHistory();
  const dispatch = useDispatch();
  const accessToken = useSelector<AppState, string>(
    state => state.userReducer.accessToken
  );
  const state = returnApplicationDocumentState();

  const createToastr = useCallback(
    (message: string, state: "info" | "errorState" | "success" | "warning") => {
      dispatch(
        updateToastr({
          timer: 5,
          toastrMessage: message,
          toastrState: state
        })
      );
    },
    []
  );

  useEffect(() => {
    if (accessToken === "") {
      push("/");
      createToastr("로그인 시 접근할 수 있습니다.", "warning");
    }
  },        [accessToken]);

  useEffect(() => {
    if (state.isGetAction) {
      applyApplicationDocument(state, dispatch);
    }
  },        [state.isGetAction]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      dispatch(getUserApplicantStatus({ accessToken }));
      dispatch(getApplicantPhoto({ accessToken }));
      updateAppClass("my-page");
    }
  },        []);

  return (
    <div>
      <S.MyPageWrapper>
        <HeadLine subText="2020 입학원서 작성" title="마이페이지" />
        <RowList />
        <PageList />
      </S.MyPageWrapper>
    </div>
  );
};

export default MyPage;
