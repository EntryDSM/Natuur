import React, { FC, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { patchFinalSubmit } from "../../core/redux/actions/main";
import { updateToastr } from "../../core/redux/actions/default";
import HeadLine from "../../components/default/Common/HeadLine";
import PDFcontainer from "../../components/preview/PDFcontainer";
import * as S from "../../styles/preview";
import { getUserApplicantStatus } from "../../core/redux/actions/main/index";
import { getApplicationDocument } from "../../core/redux/actions/applicantDocument";
import { AppState } from "../../core/redux/store/store";
import PopUp from "../../container/default/popup/PopUp";
import {
  getIsUpdatePopUp,
  updatePopUpCase
} from "../../core/redux/actions/popup";

const mapStateToProps = (state: AppState) => ({
  accessToken: state.userReducer.accessToken,
  isPutAction: state.applicantDocument.isPutAction,
  is_final_submit: state.mainReducer.is_final_submit
});

const mapDispatchToProps = dispatch => ({
  getIsUpdatePopUp: () => dispatch(getIsUpdatePopUp()),
  updatePopUpCase: (
    popUpCase: "default" | "login" | "set" | "check" | "pdf" | "finalSubmit"
  ) => dispatch(updatePopUpCase(popUpCase)),
  getUserApplicantStatus: (payload: { accessToken: string }) =>
    dispatch(getUserApplicantStatus(payload)),
  getApplicationDocument: (payload: { accessToken: string }) =>
    dispatch(getApplicationDocument(payload)),
  patchFinalSubmit: (payload: { accessToken: string }) =>
    dispatch(patchFinalSubmit(payload)),
  updateToastr: (payload: {
    toastrState?: "info" | "errorState" | "success" | "warning";
    toastrMessage?: string;
    timer?: number;
  }) => dispatch(updateToastr(payload))
});

interface OwnProps {
  updateAppClass(text: string): void;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;

const Preview: FC<Props> = ({
  updateAppClass,
  accessToken,
  isPutAction,
  is_final_submit,
  getIsUpdatePopUp,
  updatePopUpCase,
  getUserApplicantStatus,
  getApplicationDocument,
  patchFinalSubmit,
  updateToastr
}) => {
  const didMountRef = useRef(false);
  const { push } = useHistory();

  const createToastr = useCallback(() => {
    updateToastr({
      timer: 5,
      toastrMessage: "제출이 완료되었습니다.",
      toastrState: "success"
    });
  },                               []);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getIsUpdatePopUp();
      updatePopUpCase("pdf");
      updateAppClass("previewPage");
    }
  },        []);

  useEffect(() => {
    if (isPutAction) {
      getUserApplicantStatus({ accessToken });
      getApplicationDocument({ accessToken });
    }
  },        [isPutAction]);

  useEffect(() => {
    if (is_final_submit) {
      push("/mypage");
      createToastr();
    }
  },        [is_final_submit]);

  const presentFinalSubmit = useCallback(() => {
    patchFinalSubmit({ accessToken });
    getIsUpdatePopUp();
  },                                     []);

  return (
    <>
      <PopUp
        getIsUpdatePopUp={getIsUpdatePopUp}
        updatePopUpCase={updatePopUpCase}
        presentFinalSubmit={presentFinalSubmit}
      />
      <div>
        <S.PreviewWrapper>
          <HeadLine subText="2020 입학원서 작성" title="미리보기" />
          <PDFcontainer />
        </S.PreviewWrapper>
      </div>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
