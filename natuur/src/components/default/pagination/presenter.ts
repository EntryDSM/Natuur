import React from "react";
import { Dispatch } from "redux";

import {
  putGedDocument,
  putGraduaatedDocument,
  putUnGraduaatedDocument,
  getApplicationDocument
} from "../../../core/redux/actions/applicantDocument";
import {
  convertApplyTypeToKorean,
  convertAdditionalTypeToKorean
} from "../../../container/Info/presenter";
import {
  setIsGed,
  setApplyType,
  setSelectRegion,
  setGraduationClassification,
  setGraduationYear,
  setRemark
} from "../../../core/redux/actions/info";
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
} from "../../../core/redux/actions/personal";
import {
  setVolunteer,
  setAbsent,
  setEarlyLeave,
  setTardy,
  setMissingClass,
  setGedAverageScore,
  setSubjectScores
} from "../../../core/redux/actions/grade";
import {
  setSelfIntroduction,
  setStudyPlan
} from "../../../core/redux/actions/intro";
import { precededByZeroBeforeOneDigitForString } from "../../../lib/utils/date";

export interface PaginationStateToProps {
  isGed?: boolean;
  applyType?: string;
  selectRegion?: string;
  graduationClassification?: string;
  graduationYear?: string;
  remarks?: string;
  receiptCode?: number;
  examCode?: number;
  name?: string;
  gender?: string;
  birthYear?: string;
  birthMonth?: string;
  birthDate?: string;
  userClass?: string;
  studentID?: string;
  middleSchool?: string;
  schooleCode?: string;
  parentsName?: string;
  schoolContact?: string;
  parentsContact?: string;
  userContact?: string;
  address?: string;
  zipCode?: string;
  detailedAddress?: string;
  file?: string;
  selfIntroduction?: string;
  studyPlan?: string;
  accessToken?: string;
  gedAverageScore?: string;
  volunteer?: string;
  absent?: string;
  earlyLeave?: string;
  tardy?: string;
  missingClass?: string;
  subjectScores?: Array<{
    semester: number;
    subject:
      | "korean"
      | "math"
      | "social"
      | "science"
      | "english"
      | "history"
      | "tech_and_home";
    score: "A" | "B" | "C" | "D" | "E" | "X";
  }>;
  putStatusCode: number;
  isGetAction: boolean;
  isPutAction: boolean;
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
  schoolGrade?: {
    korean: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    social: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    history: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    math: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    science: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    tech_and_home: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    english: Array<"A" | "B" | "C" | "D" | "E" | "X">;
  };
  diligenceGrade?: {
    volunteer_time: number;
    full_cut_count: number;
    period_cut_count: number;
    late_count: number;
    early_leave_count: number;
  };
  gedGrade?: {
    ged_average_score: number;
  };
  selfIntroductionAndStudyPlan: {
    self_introduction: string;
    study_plan: string;
  };
}

export const convertApplyTypeToEnglish = (
  applyType: string
):
  | "COMMON"
  | "MEISTER"
  | "SOCIAL_ONE_PARENT"
  | "SOCIAL_FROM_NORTH"
  | "SOCIAL_MULTICULTURAL"
  | "SOCIAL_BASIC_LIVING"
  | "SOCIAL_LOWEST_INCOME"
  | "SOCIAL_TEEN_HOUSEHOLDER" => {
  switch (applyType) {
    case "일반전형":
      return "COMMON";
    case "마이스터 인재전형":
      return "MEISTER";
    case "사회통합전형/기초생활수급권자":
      return "SOCIAL_BASIC_LIVING";
    case "사회통합전형/한부모가족":
      return "SOCIAL_ONE_PARENT";
    case "사회통합전형/차상위계층":
      return "SOCIAL_LOWEST_INCOME";
    case "사회통합전형/소년소녀가장":
      return "SOCIAL_TEEN_HOUSEHOLDER";
    case "사회통합전형/북한이탈주민":
      return "SOCIAL_FROM_NORTH";
    case "사회통합전형/다문화가정":
      return "SOCIAL_MULTICULTURAL";
    default:
      return "COMMON";
  }
};

export const convertAdditionalTypeToEnglish = (
  remarks: string
): "NATIONAL_MERIT" | "PRIVILEGED_ADMISSION" | "NOT_APPLICABLE" => {
  switch (remarks) {
    case "":
      return "NOT_APPLICABLE";
    case "국가 유공자":
      return "NATIONAL_MERIT";
    case "특례 입학 대상자":
      return "PRIVILEGED_ADMISSION";
    default:
      return "NOT_APPLICABLE";
  }
};

export const returnSubjectScore = (
  subject:
    | "korean"
    | "social"
    | "history"
    | "math"
    | "science"
    | "english"
    | "tech_and_home",
  subjectScores: Array<{
    semester: number;
    subject: string;
    score: "A" | "B" | "C" | "D" | "E" | "X";
  }>
): Array<"A" | "B" | "C" | "D" | "E" | "X"> => {
  const score = subjectScores.filter(value => value.subject === subject);

  return score.map(value => value.score);
};

export const applyApplicationDocument = (
  state: PaginationStateToProps,
  dispatch: Dispatch<any>
) => {
  const {
    apply_type,
    additional_type,
    is_daejeon,
    graduated_year
  } = state.classification;
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
  } = state.personalInformation;
  const { self_introduction, study_plan } = state.selfIntroductionAndStudyPlan;

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

  if (state.isGed) {
    const { ged_average_score } = state.gedGrade;

    dispatch(setClass({ class: "" }));
    dispatch(setStudentID({ studentID: "" }));
    dispatch(setMiddleSchool({ school: "" }));
    dispatch(setSchoolContact({ contact: "" }));

    dispatch(
      setGedAverageScore({
        gedAverageScore:
          ged_average_score !== undefined || ged_average_score !== null
            ? String(ged_average_score)
            : null
      })
    );
  }

  if (!state.isGed) {
    const {
      volunteer_time,
      full_cut_count,
      period_cut_count,
      late_count,
      early_leave_count
    } = state.diligenceGrade;
    const { korean } = state.schoolGrade;
    const subjectScores = [];

    dispatch(
      setGraduationClassification(
        graduated_year ? "졸업자" : korean.length === 5 ? "졸업 예정자" : ""
      )
    );
    dispatch(setClass({ class: student_number.slice(1, 3) }));
    dispatch(setStudentID({ studentID: student_number.slice(3, 5) }));
    dispatch(setMiddleSchool({ school: school_name }));
    dispatch(setSchoolContact({ contact: school_tel }));
    dispatch(setVolunteer({ volunteer: String(volunteer_time) }));
    dispatch(setAbsent({ absent: String(full_cut_count) }));
    dispatch(setEarlyLeave({ earlyLeave: String(early_leave_count) }));
    dispatch(setTardy({ tardy: String(late_count) }));
    dispatch(setMissingClass({ missingClass: String(period_cut_count) }));
    dispatch(setSchoolCode({ code: school_code }));

    for (const subject in state.schoolGrade) {
      if (state.schoolGrade.hasOwnProperty(subject)) {
        state.schoolGrade[subject].forEach((value, index) =>
          subjectScores.push({
            semester: index + 1,
            subject,
            score: value
          })
        );
      }
    }

    dispatch(setSubjectScores({ subjectScores }));
  }
};

const ifFalseNull = (value: any) => {
  if (value !== "") {
    return value;
  }

  return null;
};

export const putApplicationDocument = (
  state: PaginationStateToProps,
  dispatch: Dispatch<any>
) => {
  const {
    isGed,
    applyType,
    selectRegion,
    graduationClassification,
    graduationYear,
    remarks,
    name,
    gender,
    birthYear,
    birthMonth,
    birthDate,
    userClass,
    studentID,
    middleSchool,
    schooleCode,
    parentsName,
    schoolContact,
    parentsContact,
    userContact,
    address,
    detailedAddress,
    zipCode,
    gedAverageScore,
    selfIntroduction,
    studyPlan,
    accessToken,
    volunteer,
    absent,
    earlyLeave,
    tardy,
    missingClass,
    subjectScores
  } = state;

  const stringMonth = precededByZeroBeforeOneDigitForString(Number(birthMonth));
  const stringDate = precededByZeroBeforeOneDigitForString(Number(birthDate));
  const stringUserClass = precededByZeroBeforeOneDigitForString(
    Number(userClass)
  );
  const stringStudentID = precededByZeroBeforeOneDigitForString(
    Number(studentID)
  );

  if (isGed) {
    dispatch(
      putGedDocument({
        accessToken,
        classification: {
          apply_type: convertApplyTypeToEnglish(applyType),
          additional_type: convertAdditionalTypeToEnglish(remarks),
          is_daejeon: selectRegion === "대전"
        },
        personal_information: {
          name: ifFalseNull(name),
          sex: ifFalseNull(gender),
          birth_date: `${birthYear ? birthYear : "2003"}-${
            birthMonth ? stringMonth : "01"
          }-${birthDate ? stringDate : "01"}`,
          parent_name: ifFalseNull(parentsName),
          parent_tel: ifFalseNull(parentsContact),
          applicant_tel: ifFalseNull(userContact),
          address: /null/.test(`${ifFalseNull(address)}/${detailedAddress}`)
            ? null
            : `${ifFalseNull(address)}/${detailedAddress}`,
          post_code: ifFalseNull(zipCode)
        },
        ged_grade: {
          ged_average_score: Number(gedAverageScore)
        },
        self_introduction_and_study_plan: {
          self_introduction: ifFalseNull(selfIntroduction),
          study_plan: ifFalseNull(studyPlan)
        }
      })
    );
  } else {
    if (graduationClassification === "졸업자") {
      dispatch(
        putGraduaatedDocument({
          accessToken,
          classification: {
            apply_type: convertApplyTypeToEnglish(applyType),
            additional_type: convertAdditionalTypeToEnglish(remarks),
            is_daejeon: selectRegion === "대전",
            graduated_year: ifFalseNull(graduationYear)
          },
          personal_information: {
            name: ifFalseNull(name),
            sex: ifFalseNull(gender),
            birth_date: `${birthYear ? birthYear : "2003"}-${
              birthMonth ? stringMonth : "01"
            }-${birthDate ? stringDate : "01"}`,
            parent_name: ifFalseNull(parentsName),
            parent_tel: ifFalseNull(parentsContact),
            applicant_tel: ifFalseNull(userContact),
            address: /null/.test(`${ifFalseNull(address)}/${detailedAddress}`)
              ? null
              : `${ifFalseNull(address)}/${detailedAddress}`,
            post_code: ifFalseNull(zipCode),
            student_number: stringStudentID
              ? `3${userClass ? stringUserClass : "01"}${
                  studentID ? stringStudentID : "01"
                }`
              : null,
            school_name: ifFalseNull(middleSchool),
            school_tel: ifFalseNull(schoolContact),
            school_code: ifFalseNull(schooleCode)
          },
          diligence_grade: {
            volunteer_time: Number(volunteer),
            full_cut_count: Number(absent),
            period_cut_count: Number(missingClass),
            late_count: Number(tardy),
            early_leave_count: Number(earlyLeave)
          },
          school_grade: {
            korean: returnSubjectScore("korean", subjectScores),
            social: returnSubjectScore("social", subjectScores),
            history: returnSubjectScore("history", subjectScores),
            math: returnSubjectScore("math", subjectScores),
            science: returnSubjectScore("science", subjectScores),
            tech_and_home: returnSubjectScore("tech_and_home", subjectScores),
            english: returnSubjectScore("english", subjectScores)
          },
          self_introduction_and_study_plan: {
            self_introduction: ifFalseNull(selfIntroduction),
            study_plan: ifFalseNull(studyPlan)
          }
        })
      );
    } else {
      dispatch(
        putUnGraduaatedDocument({
          accessToken,
          classification: {
            apply_type: convertApplyTypeToEnglish(applyType),
            additional_type: convertAdditionalTypeToEnglish(remarks),
            is_daejeon: selectRegion === "대전"
          },
          personal_information: {
            name: ifFalseNull(name),
            sex: ifFalseNull(gender),
            birth_date: `${birthYear ? birthYear : "2003"}-${
              birthMonth ? stringMonth : "01"
            }-${birthDate ? stringDate : "01"}`,
            parent_name: ifFalseNull(parentsName),
            parent_tel: ifFalseNull(parentsContact),
            applicant_tel: ifFalseNull(userContact),
            address: /null/.test(`${ifFalseNull(address)}/${detailedAddress}`)
              ? null
              : `${ifFalseNull(address)}/${detailedAddress}`,
            post_code: ifFalseNull(zipCode),
            student_number: stringStudentID
              ? `3${userClass ? stringUserClass : "01"}${
                  studentID ? stringStudentID : "01"
                }`
              : null,
            school_name: ifFalseNull(middleSchool),
            school_tel: ifFalseNull(schoolContact),
            school_code: ifFalseNull(schooleCode)
          },
          diligence_grade: {
            volunteer_time: Number(volunteer),
            full_cut_count: Number(absent),
            period_cut_count: Number(missingClass),
            late_count: Number(tardy),
            early_leave_count: Number(earlyLeave)
          },
          school_grade: {
            korean: returnSubjectScore("korean", subjectScores),
            social: returnSubjectScore("social", subjectScores),
            history: returnSubjectScore("history", subjectScores),
            math: returnSubjectScore("math", subjectScores),
            science: returnSubjectScore("science", subjectScores),
            tech_and_home: returnSubjectScore("tech_and_home", subjectScores),
            english: returnSubjectScore("english", subjectScores)
          },
          self_introduction_and_study_plan: {
            self_introduction: ifFalseNull(selfIntroduction),
            study_plan: ifFalseNull(studyPlan)
          }
        })
      );
    }
  }
};
