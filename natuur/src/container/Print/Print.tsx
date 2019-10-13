import React, { FC, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import HeadLine from "../../components/default/Common/HeadLine";
import PDFcontainer from "../../components/preview/PDFcontainer";
import * as S from "../../styles/preview";
import { getUserApplicantStatus } from "../../core/redux/actions/main/index";
import { getCalculatedScore } from "../../core/redux/actions/print";
import { getApplicantPhoto } from "../../core/redux/actions/personal";
import { AppState } from "../../core/redux/store/store";
import { updateToastr } from "../../core/redux/actions/default";

interface OwnProps {
  updateAppClass(text: string): void;
}

const Print: FC<OwnProps> = ({ updateAppClass }) => {
  const didMountRef = useRef(false);
  const { push } = useHistory();
  const dispatch = useDispatch();
  const accessToken = useSelector<AppState, string>(
    state => state.userReducer.accessToken
  );

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
    if (!didMountRef.current) {
      didMountRef.current = true;

      dispatch(getUserApplicantStatus({ accessToken }));
      dispatch(getCalculatedScore({ accessToken }));
      dispatch(getApplicantPhoto({ accessToken }));
      updateAppClass("printPage");
    }
  },        []);

  return (
    <div>
      <S.PreviewWrapper>
        <HeadLine subText="2020 입학원서 작성" title="출력" />
        <PDFcontainer isPrint />
      </S.PreviewWrapper>
    </div>
  );
};

export default Print;
