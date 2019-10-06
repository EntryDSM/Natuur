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
  gedAverageScore?: number;
  volunteer?: number;
  absent?: number;
  earlyLeave?: number;
  tardy?: number;
  missingClass?: number;
  subjectScores?: Array<{
    semester: number;
    subject: string;
    score: "A" | "B" | "C" | "D" | "E" | "X";
  }>;
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
    | "tech_home",
  subjectScores: Array<{
    semester: number;
    subject: string;
    score: "A" | "B" | "C" | "D" | "E" | "X";
  }>
): Array<"A" | "B" | "C" | "D" | "E" | "X"> => {
  const score = subjectScores.filter(value => value.subject === subject);

  return score.map(value => value.score);
};
