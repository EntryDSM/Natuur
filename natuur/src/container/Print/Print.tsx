import React, { FC, useEffect, useRef } from "react";

import HeadLine from "../../components/default/Common/HeadLine";
import PDFcontainer from "../../components/preview/PDFcontainer";
import * as S from "../../styles/preview";

interface OwnProps {
  updateAppClass(text: string): void;
}

const Print: FC<OwnProps> = ({ updateAppClass }) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

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
