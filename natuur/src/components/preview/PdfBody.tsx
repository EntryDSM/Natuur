import React, { Component } from "react";
import html2Canvase from "html2canvas";

// import ApplicationForm from "./applicationForm/ApplicationForm";
// import RecommendationLetter from "./recommendationLetter/RecommendationLetter";
// import NonSmokingPledge from "./nonSmokingPledge/NonSmokingPledge";
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

class PdfBody extends React.Component<OwnProps, {}> {
  constructor(props: OwnProps) {
    super(props);
  }
  public render() {
    return (
      <S.PdfTarget>
        {/* <S.PdfContent id="applicationForm">
          <ApplicationForm />
        </S.PdfContent> */}
        <S.PdfContent>
          제발좀 됨녕ㄹ마ㅣㄴㅇ롬ㄴ어ㅏㅣ롬ㅇㄴㄹㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ
        </S.PdfContent>
        {/* <S.PdfContent id="recommendationLetter">
          <RecommendationLetter />
        </S.PdfContent> */}
        {/* <S.PdfContent id="nonSmokingPledge">
          <NonSmokingPledge />
        </S.PdfContent> */}
        <S.PdfContent isLast>
          제발좀 됨녕ㄹ마ㅣㄴㅇ롬ㄴ어ㅏㅣ롬ㅇㄴㄹㅁㄴㅇㄻㄴㅇㄻㄴㅇㄹ
        </S.PdfContent>
      </S.PdfTarget>
    );
  }
}

export default PdfBody;
