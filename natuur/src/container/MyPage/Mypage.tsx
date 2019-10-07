import React, { FC, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import HeadLine from "../../components/default/Common/HeadLine";
import * as S from "../../styles/mypage";
import RowList from "../../components/mypage/RowList";
import PageList from "../../components/mypage/PageList";
import { getUserApplicantStatus } from "../../core/redux/actions/main/index";
import { AppState } from "../../core/redux/store/store";

interface OwnProps {
  updateAppClass: (className: string) => void;
}

const MyPage: FC<OwnProps> = ({ updateAppClass }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector<AppState, string>(
    state => state.userReducer.accessToken
  );

  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      dispatch(getUserApplicantStatus({ accessToken }));
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
