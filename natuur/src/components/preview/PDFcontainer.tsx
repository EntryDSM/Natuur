import React, { FC, useState, useRef } from "react";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";

import * as S from "../../styles/preview";
import PdfBody from "./PdfBody";
import { AppState } from "../../core/redux/store/store";
import { downloadIcon, printIcon } from "../../assets/preview";
import { returnNowToInlineString } from "../../lib/utils/date";

const maxPage = 5;
const lastPdfMargin = 20;

const scrollHandler = (
  pdfPage: number,
  setPdfPage: (pdfPage: number) => void
) => {
  const pdfBody = document.getElementById("scrollBody");
  const nextPoint = (pdfBody.clientHeight - lastPdfMargin) * pdfPage;
  const prevPoint = (pdfBody.clientHeight - lastPdfMargin) * (pdfPage - 1);

  if (pdfBody.scrollTop >= nextPoint) {
    setPdfPage(pdfPage + 1);
  }
  if (pdfBody.scrollTop < prevPoint) {
    setPdfPage(pdfPage - 1);
  }
};

const PDFcontainer: FC = () => {
  const printArea = useRef();

  const [pdfPage, setPdfPage] = useState(1);
  const userName = useSelector<AppState, string>(
    state => state.PersonalReducer.name
  );

  return (
    <S.PdfWrapper>
      <S.PdfHeader>
        <S.HeaderContentsBox isTitle>
          <p>
            {returnNowToInlineString()}_{userName} 입학원서
          </p>
        </S.HeaderContentsBox>
        <p>
          {pdfPage} / {maxPage}
        </p>
        <S.HeaderContentsBox>
          <S.HeaderIcon src={downloadIcon} alt="다운로드" />
          <ReactToPrint
            trigger={() => <S.HeaderIcon src={printIcon} alt="인쇄" />}
            content={() => printArea.current}
          />
        </S.HeaderContentsBox>
      </S.PdfHeader>
      <S.PdfContents
        id="scrollBody"
        onScroll={() => scrollHandler(pdfPage, setPdfPage)}
      >
        <PdfBody setPdfPage={setPdfPage} pdfPage={pdfPage} ref={printArea} />
      </S.PdfContents>
    </S.PdfWrapper>
  );
};

export default PDFcontainer;
