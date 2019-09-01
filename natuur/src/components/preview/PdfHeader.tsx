import React, { FC } from "react";

import * as S from "../../styles/preview";
import { downloadIcon, printIcon } from "../../assets/preview";
import { returnNowToInlineString } from "../../lib/utils/date";

interface OwnProps {
  userName: string;
  pdfPage: number;
  maxPage: number;
}

const pagePrint = () => {
  const initBody = document.getElementById(".previewPage");
  const pdfTarget = document.querySelector(".scrollBody");
  const pdfForPrint = pdfTarget;

  window.onbeforeprint = () => {
    initBody.style.display = "";
    pdfForPrint.classList.add("on");
    document.body.appendChild(pdfForPrint);
  };
  window.onafterprint = () => {
    initBody.style.display = "block";
    document.body.removeChild(pdfForPrint);
  };

  window.print();
};

const PdfHeader: FC<OwnProps> = ({ userName, pdfPage, maxPage }) => {
  return (
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
        <S.HeaderIcon src={printIcon} alt="인쇄" />
      </S.HeaderContentsBox>
    </S.PdfHeader>
  );
};

export default PdfHeader;
