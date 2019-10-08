import React, { FC, useEffect, ReactElement, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ScrollToTop from "./ScrollToTop";
import { updateToastr } from "../../core/redux/actions/default";
import { AppState } from "../../core/redux/store/store";

interface OwnProsp {
  accessToken: string;
  children: ReactElement;
}

const CheckToken: FC<OwnProsp> = ({ accessToken, children }) => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const isFinalSubmit = useSelector<AppState, boolean>(
    state => state.mainReducer.is_final_submit
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
    if (isFinalSubmit) {
      push("/");
      createToastr("최종 제출 이후에는 접근할 수 없습니다.", "warning");
    }

    if (accessToken === "") {
      push("/");
      createToastr("로그인 시 접근할 수 있습니다.", "warning");
    }
  },        [accessToken]);

  return <ScrollToTop>{children}</ScrollToTop>;
};

export default CheckToken;
