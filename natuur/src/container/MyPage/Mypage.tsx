import React, { FC, useRef, useEffect, useCallback, useState } from "react";
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
import { setIsGed } from "../../core/redux/actions/info";
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
  const [isSetedGed, setIsSetedGed] = useState(false);

  useEffect(() => {
    if (accessToken === "") {
      push("/");
      createToastr("로그인 시 접근할 수 있습니다.", "warning");
    }
  },        [accessToken]);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      dispatch(getUserApplicantStatus({ accessToken }));
      dispatch(getApplicantPhoto({ accessToken }));
      updateAppClass("my-page");
    }
  },        []);

  useEffect(() => {
    if (state.isGetAction) {
      const { school_name } = state.personalInformation;
      const { graduated_year } = state.classification;

      dispatch(
        setIsGed(graduated_year === undefined && school_name === undefined)
      );
      setIsSetedGed(true);
    }
  },        [state.isGetAction]);

  useEffect(() => {
    if (state.isGetAction && isSetedGed) {
      applyApplicationDocument(state, dispatch);
    }
  },        [isSetedGed, state.isGetAction]);

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
