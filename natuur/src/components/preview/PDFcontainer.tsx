import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";

import * as S from "../../styles/preview";
import PdfBody from "./PdfBody";
import FinalSubmitButton from "./FinalSubmitButton";
import { AppState } from "../../core/redux/store/store";
import { printIcon } from "../../assets/preview";
import { returnNowToInlineString } from "../../lib/utils/date";

const lastPdfMargin = 20;

interface OwnProps {
  isPrint?: boolean;
}

const PDFcontainer: FC<OwnProps> = ({ isPrint }) => {
  const printArea = useRef();
  const didMountRef = useRef(false);

  const name = useSelector<AppState, string>(
    state => state.PersonalReducer.name
  );
  const applyType = useSelector<AppState, string>(
    state => state.infoReducer.applyType
  );
  const [pdfPage, setPdfPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (applyType === "일반전형") {
        setMaxPage(5);
      } else {
        setMaxPage(6);
      }
    }
  },        []);

  const scrollHandler = useCallback(
    (pdfPage: number, setPdfPage: (pdfPage: number) => void) => {
      const pdfBody = document.getElementById("scrollBody");
      const nextPoint = (pdfBody.clientHeight - lastPdfMargin) * pdfPage;
      const prevPoint = (pdfBody.clientHeight - lastPdfMargin) * (pdfPage - 1);

      if (pdfBody.scrollTop >= nextPoint) {
        setPdfPage(pdfPage + 1);
      }
      if (pdfBody.scrollTop < prevPoint) {
        setPdfPage(pdfPage - 1);
      }
    },
    [pdfPage]
  );

  return (
    <S.PdfWrapper>
      <S.PdfHeader>
        <S.HeaderContentsBox isTitle>
          <p>
            {returnNowToInlineString()}_{name} 입학원서
          </p>
        </S.HeaderContentsBox>
        <p>
          {pdfPage} / {maxPage}
        </p>

        <S.HeaderContentsBox>
          {isPrint && (
            <ReactToPrint
              trigger={() => <S.HeaderIcon src={printIcon} alt="인쇄" />}
              content={() => printArea.current}
            />
          )}
        </S.HeaderContentsBox>
      </S.PdfHeader>
      <S.PdfContents
        id="scrollBody"
        onScroll={() => scrollHandler(pdfPage, setPdfPage)}
      >
        <PdfBody applyType={applyType} ref={printArea} isPrint={isPrint} />
      </S.PdfContents>
      {!isPrint && <FinalSubmitButton />}
    </S.PdfWrapper>
  );
};

export default PDFcontainer;
