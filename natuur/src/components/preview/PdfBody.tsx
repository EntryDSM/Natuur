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
}

class PdfBody extends Component<OwnProps, {}> {
  public render() {
    return (
      <S.PdfTarget id="pdfTarget">
        <S.PdfContent id="applicationForm">
          <ApplicationForm />
        </S.PdfContent>
        <S.PdfContent id="selfIntroduction">
          <SelfIntroduction />
        </S.PdfContent>
        <S.PdfContent id="SchoolPlan">
          <SchoolPlan />
        </S.PdfContent>
        {this.props.applyType !== "일반전형" && (
          <S.PdfContent id="recommendationLetter">
            <RecommendationLetter />
          </S.PdfContent>
        )}
        <S.PdfContent id="nonSmokingPledge">
          <NonSmokingPledge />
        </S.PdfContent>
        <S.PdfContent id="admissionConsent" isLast>
          <AdmissionConsent />
        </S.PdfContent>
      </S.PdfTarget>
    );
  }
}

export default PdfBody;
