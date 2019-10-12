import React, { FC, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import HeadLine from "../../components/default/Common/HeadLine";
import PDFcontainer from "../../components/preview/PDFcontainer";
import * as S from "../../styles/preview";
import { getUserApplicantStatus } from "../../core/redux/actions/main/index";
import { getApplicationDocument } from "../../core/redux/actions/applicantDocument";
import { AppState } from "../../core/redux/store/store";

interface OwnProps {
  updateAppClass(text: string): void;
}

const Preview: FC<OwnProps> = ({ updateAppClass }) => {
  const dispatch = useDispatch();
  const accessToken = useSelector<AppState, string>(
    state => state.userReducer.accessToken
  );
  const isPutAction = useSelector<AppState, boolean>(
    state => state.applicantDocument.isPutAction
  );

  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      updateAppClass("previewPage");

      if (isPutAction) {
        dispatch(getUserApplicantStatus({ accessToken }));
        dispatch(getApplicationDocument({ accessToken }));
      }
    }
  },        []);

  return (
    <div>
      <S.PreviewWrapper>
        <HeadLine subText="2020 입학원서 작성" title="미리보기" />
        <PDFcontainer />
      </S.PreviewWrapper>
    </div>
  );
};

export default Preview;
