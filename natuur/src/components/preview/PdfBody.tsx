import React, { Component } from "react";

import ApplicationForm from "./applicationForm/ApplicationForm";
import RecommendationLetter from "./recommendationLetter/RecommendationLetter";
import NonSmokingPledge from "./nonSmokingPledge/NonSmokingPledge";
import SelfIntroduction from "./SelfIntroductionAndSchoolPlan/SelfIntroduction";
import SchoolPlan from "./SelfIntroductionAndSchoolPlan/SchoolPlan";
import AdmissionConsent from "./AdmissionConsent/AdmissionConsent";

import * as S from "../../styles/preview";

interface OwnProps {
  applyType: string;
  isPrint?: boolean;
}

class PdfBody extends Component<OwnProps, {}> {
  public render() {
    const { isPrint, applyType } = this.props;

    return (
      <S.PdfTarget id="pdfTarget">
        <S.PdfContent id="applicationForm">
          <ApplicationForm isPrint={isPrint} />
        </S.PdfContent>
        <S.PdfContent id="selfIntroduction">
          <SelfIntroduction isPrint={isPrint} />
        </S.PdfContent>
        <S.PdfContent id="SchoolPlan">
          <SchoolPlan isPrint={isPrint} />
        </S.PdfContent>
        {applyType !== "일반전형" && (
          <S.PdfContent id="recommendationLetter">
            <RecommendationLetter isPrint={isPrint} />
          </S.PdfContent>
        )}
        <S.PdfContent id="nonSmokingPledge" isLast>
          <NonSmokingPledge isPrint={isPrint} />
        </S.PdfContent>
        {/* <S.PdfContent id="admissionConsent" isLast>
          <AdmissionConsent isPrint={isPrint} />
        </S.PdfContent> */}
      </S.PdfTarget>
    );
  }
}

export default PdfBody;
