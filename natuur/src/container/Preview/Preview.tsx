import React, { FC, useEffect, useRef } from "react";
import { connect } from "react-redux";

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
  isPutAction: state.applicantDocument.isPutAction
});

const mapDispatchToProps = dispatch => ({
  getIsUpdatePopUp: () => dispatch(getIsUpdatePopUp()),
  updatePopUpCase: (popUpCase: "default" | "login" | "set" | "check" | "pdf") =>
    dispatch(updatePopUpCase(popUpCase)),
  getUserApplicantStatus: (payload: { accessToken: string }) =>
    dispatch(getUserApplicantStatus(payload)),
  getApplicationDocument: (payload: { accessToken: string }) =>
    dispatch(getApplicationDocument(payload))
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
  getIsUpdatePopUp,
  updatePopUpCase,
  getUserApplicantStatus,
  getApplicationDocument
}) => {
  const didMountRef = useRef(false);

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

  return (
    <>
      <PopUp
        getIsUpdatePopUp={getIsUpdatePopUp}
        updatePopUpCase={updatePopUpCase}
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
