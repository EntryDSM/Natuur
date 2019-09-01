import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "../../styles/preview";
import PdfHeader from "./PdfHeader";
import PdfBody from "./PdfBody";
import { AppState } from "../../core/redux/store/store";

const maxPage = 5;

const PDFcontainer: FC = () => {
  const [pdfPage, setPdfPage] = useState(1);
  const userName = useSelector<AppState, string>(
    state => state.PersonalReducer.name
  );

  return (
    <S.PdfWrapper>
      <PdfHeader userName={userName} pdfPage={pdfPage} maxPage={maxPage} />
      <PdfBody setPdfPage={setPdfPage} pdfPage={pdfPage} />
    </S.PdfWrapper>
  );
};

export default PDFcontainer;
