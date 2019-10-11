import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactToPrint from "react-to-print";

import * as S from "../../styles/preview";
import PdfBody from "./PdfBody";
import FinalSubmitButton from "./FinalSubmitButton";
import { AppState } from "../../core/redux/store/store";
import { printIcon } from "../../assets/preview";
import { returnNowToInlineString } from "../../lib/utils/date";
import {
  setIsGed,
  setApplyType,
  setSelectRegion,
  setGraduationClassification,
  setGraduationYear,
  setRemark
} from "../../core/redux/actions/info";
import {
  setName,
  setGender,
  setBirthDayYear,
  setBirthDayMonth,
  setBirthDayDate,
  setClass,
  setStudentID,
  setParentsName,
  setSchoolContact,
  setParentsContact,
  setUserContact,
  setDetailedAddress,
  setMiddleSchool,
  setSchoolCode,
  getAddressData
} from "../../core/redux/actions/personal";
import {
  setSelfIntroduction,
  setStudyPlan
} from "../../core/redux/actions/intro";
import {
  convertApplyTypeToKorean,
  convertAdditionalTypeToKorean
} from "../../container/Info/presenter";

const lastPdfMargin = 20;

interface SelectorProps {
  name: string;
  isGed: boolean;
  applyType: string;
  classification: {
    apply_type:
      | "COMMON"
      | "MEISTER"
      | "SOCIAL_ONE_PARENT"
      | "SOCIAL_FROM_NORTH"
      | "SOCIAL_MULTICULTURAL"
      | "SOCIAL_BASIC_LIVING"
      | "SOCIAL_LOWEST_INCOME"
      | "SOCIAL_TEEN_HOUSEHOLDER";
    additional_type:
      | "NATIONAL_MERIT"
      | "PRIVILEGED_ADMISSION"
      | "NOT_APPLICABLE";
    is_daejeon: boolean;
    graduated_year: string;
  };
  personalInformation: {
    name: string;
    sex: string;
    birth_date: string;
    parent_name: string;
    parent_tel: string;
    applicant_tel: string;
    address: string;
    post_code: string;
    student_number: string;
    school_name: string;
    school_tel: string;
    school_code: string;
  };
  selfIntroductionAndStudyPlan: {
    self_introduction: string;
    study_plan: string;
  };
  schoolGrade: {
    korean: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    social: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    history: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    math: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    science: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    tech_and_home: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    english: Array<"A" | "B" | "C" | "D" | "E" | "X">;
  };
}

interface OwnProps {
  isPrint?: boolean;
}

const PDFcontainer: FC<OwnProps> = ({ isPrint }) => {
  const dispatch = useDispatch();
  const printArea = useRef();
  const didMountRef = useRef(false);

  const {
    name,
    isGed,
    applyType,
    classification,
    personalInformation,
    selfIntroductionAndStudyPlan,
    schoolGrade
  } = useSelector<AppState, SelectorProps>(state => ({
    name: state.PersonalReducer.name,
    isGed: state.infoReducer.isGed,
    applyType: state.infoReducer.applyType,
    classification: state.applicantDocument.classification,
    personalInformation: state.applicantDocument.personal_information,
    selfIntroductionAndStudyPlan:
      state.applicantDocument.self_introduction_and_study_plan,
    schoolGrade: state.applicantDocument.school_grade,
    caluculatedScoreStatus: state.printReducer.caluculatedScoreStatus
  }));

  const [pdfPage, setPdfPage] = useState(1);
  const [maxPage, setMaxPage] = useState(5);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      const {
        apply_type,
        additional_type,
        is_daejeon,
        graduated_year
      } = classification;
      const {
        name,
        sex,
        birth_date,
        parent_name,
        parent_tel,
        applicant_tel,
        address,
        post_code,
        student_number,
        school_name,
        school_tel,
        school_code
      } = personalInformation;
      const { self_introduction, study_plan } = selfIntroductionAndStudyPlan;

      dispatch(setApplyType(convertApplyTypeToKorean(apply_type)));
      dispatch(setSelectRegion(is_daejeon ? "대전" : "전국"));
      dispatch(setRemark(convertAdditionalTypeToKorean(additional_type)));
      dispatch(setGraduationYear(graduated_year));
      dispatch(setName({ name }));
      dispatch(setGender({ gender: sex }));
      dispatch(setBirthDayYear({ year: birth_date.split("-")[0] }));
      dispatch(setBirthDayMonth({ month: birth_date.split("-")[1] }));
      dispatch(setBirthDayDate({ date: birth_date.split("-")[2] }));
      dispatch(setParentsName({ name: parent_name }));
      dispatch(setParentsContact({ contact: parent_tel }));
      dispatch(setUserContact({ contact: applicant_tel }));
      dispatch(
        getAddressData({
          address: address !== null ? address.split("/")[0] : "",
          zipCode: post_code
        })
      );
      dispatch(setSchoolCode({ code: school_code }));
      dispatch(
        setDetailedAddress({
          address: address !== null ? address.split("/")[1] : ""
        })
      );
      dispatch(
        setSelfIntroduction({
          text: self_introduction === null ? "" : self_introduction
        })
      );
      dispatch(setStudyPlan({ text: study_plan === null ? "" : study_plan }));

      dispatch(
        setSelfIntroduction({
          text: self_introduction === null ? "" : self_introduction
        })
      );
      dispatch(setStudyPlan({ text: study_plan === null ? "" : study_plan }));

      if (isGed) {
        dispatch(setClass({ class: "" }));
        dispatch(setStudentID({ studentID: "" }));
        dispatch(setMiddleSchool({ school: "" }));
        dispatch(setSchoolContact({ contact: "" }));
      }

      if (!isGed) {
        const { korean } = schoolGrade;

        dispatch(
          setGraduationClassification(
            graduated_year ? "졸업자" : korean.length === 5 ? "졸업 예정자" : ""
          )
        );
        dispatch(setIsGed(!graduated_year && !(korean.length === 5)));
        dispatch(setClass({ class: student_number.slice(1, 3) }));
        dispatch(setStudentID({ studentID: student_number.slice(3, 5) }));
        dispatch(setMiddleSchool({ school: school_name }));
        dispatch(setSchoolContact({ contact: school_tel }));
        dispatch(setSchoolCode({ code: school_code }));
      }

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
    <S.PdfWrapper isPrint={isPrint}>
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
