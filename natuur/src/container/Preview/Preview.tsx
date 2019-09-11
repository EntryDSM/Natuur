import React, { FC, useEffect, useRef } from "react";

import HeadLine from "../../components/default/Common/HeadLine";
import PDFcontainer from "../../components/preview/PDFcontainer";
import * as S from "../../styles/preview";

interface OwnProps {
  updateAppClass(text: string): void;
}

const Preview: FC<OwnProps> = ({ updateAppClass }) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      updateAppClass("previewPage");
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
