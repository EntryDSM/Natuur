import React, { FC, useCallback, useEffect } from "react";
import html2Canvase from "html2canvas";

import ApplicationForm from "./applicationForm/ApplicationForm";
import RecommendationLetter from "./recommendationLetter/RecommendationLetter";
import NonSmokingPledge from "./nonSmokingPledge/NonSmokingPledge";
import * as S from "../../styles/preview";

interface OwnProps {
  setPdfPage: (pdfPage: number) => void;
  pdfPage: number;
}

const htmlToImage = async (domId: string) => {
  const htmlElement = document.getElementById(domId);
  const domImg = document.createElement("img");

  const canvas = await html2Canvase(htmlElement);
  const imageData = canvas.toDataURL("image/png");
  domImg.src = imageData;

  htmlElement.removeChild(htmlElement.childNodes[0]);
};

const lastPdfMargin = 20;

const PdfBody: FC<OwnProps> = ({ setPdfPage, pdfPage }) => {
  useEffect(() => {
    // htmlToImage("applicationForm");
  },        []);

  const scrollHandler = useCallback(() => {
    const pdfBody = document.getElementById("scrollBody");
    const nextPoint = (pdfBody.clientHeight - lastPdfMargin) * pdfPage;
    const prevPoint = (pdfBody.clientHeight - lastPdfMargin) * (pdfPage - 1);

    if (pdfBody.scrollTop >= nextPoint) {
      setPdfPage(pdfPage + 1);
    }
    if (pdfBody.scrollTop < prevPoint) {
      setPdfPage(pdfPage - 1);
    }
  },                                [pdfPage]);

  return (
    <S.PdfContents id="scrollBody" onScroll={scrollHandler}>
      <S.PdfContent id="applicationForm">
        <ApplicationForm />
      </S.PdfContent>
      <S.PdfContent />
      <S.PdfContent id="recommendationLetter">
        <RecommendationLetter />
      </S.PdfContent>
      <S.PdfContent id="nonSmokingPledge">
        <NonSmokingPledge />
      </S.PdfContent>
      <S.PdfContent isLast />
    </S.PdfContents>
  );
};

export default PdfBody;
