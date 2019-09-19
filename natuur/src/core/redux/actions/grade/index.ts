export const SET_VOLUNTEER = "SET_VOLUNTEER";
export const SET_ABSENT = "SET_ABSENT";
export const SET_EARLY_LEAVE = "SET_EARLY_LEAVE";
export const SET_TARDY = "SET_TARDY";
export const SET_MISSING_CLASS = "SET_MISSION_CLASS";
export const SET_IS_FIRST_GRADE_1_SEMESTER = "SET_IS_FIRST_GRADE_1_SEMESTER";
export const SET_IS_FIRST_GRADE_2_SEMESTER = "SET_IS_FIRST_GRADE_2_SEMESTER";
export const SET_IS_SECOND_GRADE_1_SEMESTER = "SET_IS_SECOND_GRADE_1_SEMESTER";
export const SET_IS_SECOND_GRADE_2_SEMESTER = "SET_IS_SECOND_GRADE_2_SEMESTER";
export const SET_IS_THIRD_GRADE_1_SEMESTER = "SET_IS_THIRD_GRADE_1_SEMESTER";
export const SET_GED_AVERAGE_SCORE = "SET_GED_AVERAGE_SCORE";
export const SET_SUBJECT_SCORES = "SET_SUBJECT_SCORES";

export const GET_DILIGENCE = "GET_DILIGENCE";
export const GET_DILIGENCE_SUCCESS = "GET_DILIGENCE_SUCCESS";
export const GET_DILIGENCE_FAILURE = "GET_DILIGENCE_FAILURE";
export const GET_GED_GRADE = "GET_GED_GRADE";
export const GET_GED_GRADE_SUCCESS = "GET_GED_GRADE_SUCCESS";
export const GET_GED_GRADE_FAILURE = "GET_GED_GRADE_FAILURE";
export const GET_GRADE = "GET_GRADE";
export const GET_GRADE_SUCCESS = "GET_GRADE_SUCCESS";
export const GET_GRADE_FAILURE = "GET_GRADE_FAILURE";
export const PATCH_DILIGENCE = "PATCH_DILIGENCE";
export const PATCH_DILIGENCE_SUCCESS = "PATCH_DILIGENCE_SUCCESS";
export const PATCH_DILIGENCE_FAILURE = "PATCH_DILIGENCE_FAILURE";
export const PATCH_GED_GRADE = "PATCH_GED_GRADE";
export const PATCH_GED_GRADE_SUCCESS = "PATCH_GED_GRADE_SUCCESS";
export const PATCH_GED_GRADE_FAILURE = "PATCH_GED_GRADE_FAILURE";
export const PATCH_GRADE = "PATCH_GRADE";
export const PATCH_GRADE_SUCCESS = "PATCH_GRADE_SUCCESS";
export const PATCH_GRADE_FAILURE = "PATCH_GRADE_FAILURE";

export interface DiligenceApiType {
  volunteer_time?: number;
  full_cut_count?: number;
  period_cut_count?: number;
  late_count?: number;
  early_leave_count?: number;
}

export interface DiligenceType extends DiligenceApiType {
  accessToken: string;
}

export interface GetDiligence {
  type:
    | typeof GET_DILIGENCE
    | typeof GET_DILIGENCE_SUCCESS
    | typeof GET_DILIGENCE_FAILURE;
  payload: DiligenceType;
}

export interface PatchDiligence {
  type:
    | typeof PATCH_DILIGENCE
    | typeof PATCH_DILIGENCE_SUCCESS
    | typeof PATCH_DILIGENCE_FAILURE;
  payload: DiligenceType;
}

export interface GedGradeApiType {
  ged_average_score?: number;
}

export interface GedGradeType extends GedGradeApiType {
  accessToken: string;
}

export interface GetGedGrade {
  type:
    | typeof GET_GED_GRADE
    | typeof GET_GED_GRADE_SUCCESS
    | typeof GET_GED_GRADE_FAILURE;
  payload: GedGradeType;
}

export interface PatchGedGrade {
  type:
    | typeof PATCH_GED_GRADE
    | typeof PATCH_GED_GRADE_SUCCESS
    | typeof PATCH_GED_GRADE_FAILURE;
  payload: GedGradeType;
}

export interface GradeApiType {
  subject_scores?: Array<{
    semester: number;
    subject:
      | "korean"
      | "math"
      | "social"
      | "science"
      | "english"
      | "history"
      | "tech_home";
    score: string;
  }>;
}

export interface GradeType extends GradeApiType {
  accessToken: string;
}

export interface GetGrade {
  type: typeof GET_GRADE | typeof GET_GRADE_SUCCESS | typeof GET_GRADE_FAILURE;
  payload: GradeType;
}

export interface PatchGrade {
  type:
    | typeof PATCH_GRADE
    | typeof PATCH_GRADE_SUCCESS
    | typeof PATCH_GRADE_FAILURE;
  payload: GradeType;
}

export interface SetVolunteer {
  type: typeof SET_VOLUNTEER;
  payload: { volunteer: number };
}

export interface SetAbsent {
  type: typeof SET_ABSENT;
  payload: { absent: number };
}

export interface SetEarlyLeave {
  type: typeof SET_EARLY_LEAVE;
  payload: { earlyLeave: number };
}

export interface SetTardy {
  type: typeof SET_TARDY;
  payload: { tardy: number };
}

export interface SetMissingClass {
  type: typeof SET_MISSING_CLASS;
  payload: { missingClass: number };
}

export interface SetIsFirstGrade1Semester {
  type: typeof SET_IS_FIRST_GRADE_1_SEMESTER;
  payload: { isMissSemester: boolean };
}

export interface SetIsFirstGrade2Semester {
  type: typeof SET_IS_FIRST_GRADE_2_SEMESTER;
  payload: { isMissSemester: boolean };
}

export interface SetIsSecondGrade1Semester {
  type: typeof SET_IS_SECOND_GRADE_1_SEMESTER;
  payload: { isMissSemester: boolean };
}

export interface SetIsSecondGrade2Semester {
  type: typeof SET_IS_SECOND_GRADE_2_SEMESTER;
  payload: { isMissSemester: boolean };
}

export interface SetIsThirdGrade1Semester {
  type: typeof SET_IS_THIRD_GRADE_1_SEMESTER;
  payload: { isMissSemester: boolean };
}

export interface SetGedAverageScore {
  type: typeof SET_GED_AVERAGE_SCORE;
  payload: { gedAverageScore: number };
}

export interface SetSubjectScores {
  type: typeof SET_SUBJECT_SCORES;
  payload: {
    subjectScores?: Array<{
      semester: number;
      subject:
        | "korean"
        | "math"
        | "social"
        | "science"
        | "english"
        | "history"
        | "tech_home";
      score: string;
    }>;
  };
}

export type GradeActionTypes =
  | GetDiligence
  | PatchDiligence
  | GetGedGrade
  | PatchGedGrade
  | GetGrade
  | PatchGrade
  | SetVolunteer
  | SetAbsent
  | SetEarlyLeave
  | SetTardy
  | SetMissingClass
  | SetIsFirstGrade1Semester
  | SetIsFirstGrade2Semester
  | SetIsSecondGrade1Semester
  | SetIsSecondGrade2Semester
  | SetIsThirdGrade1Semester
  | SetGedAverageScore
  | SetSubjectScores
  | null;

export const getDiligence = (payload: DiligenceType): GradeActionTypes => ({
  payload,
  type: GET_DILIGENCE
});
export const patchDiligence = (payload: DiligenceType): GradeActionTypes => ({
  payload,
  type: PATCH_DILIGENCE
});
export const getGedGrade = (payload: GedGradeType): GradeActionTypes => ({
  payload,
  type: GET_GED_GRADE
});
export const patchGedGrade = (payload: GedGradeType): GradeActionTypes => ({
  payload,
  type: PATCH_GED_GRADE
});
export const getGrade = (payload: GradeType): GradeActionTypes => ({
  payload,
  type: GET_GRADE
});
export const patchGrade = (payload: GradeType): GradeActionTypes => ({
  payload,
  type: PATCH_GRADE
});

export const setVolunteer = (payload: {
  volunteer: number;
}): GradeActionTypes => ({
  payload,
  type: SET_VOLUNTEER
});

export const setAbsent = (payload: { absent: number }): GradeActionTypes => ({
  payload,
  type: SET_ABSENT
});

export const setEarlyLeave = (payload: {
  earlyLeave: number;
}): GradeActionTypes => ({
  payload,
  type: SET_EARLY_LEAVE
});

export const setTardy = (payload: { tardy: number }): GradeActionTypes => ({
  payload,
  type: SET_TARDY
});

export const setMissingClass = (payload: {
  missingClass: number;
}): GradeActionTypes => ({
  payload,
  type: SET_MISSING_CLASS
});

export const setIsFirstGrade1Semester = (payload: {
  isMissSemester: boolean;
}): GradeActionTypes => ({
  payload,
  type: SET_IS_FIRST_GRADE_1_SEMESTER
});

export const setIsFirstGrade2Semester = (payload: {
  isMissSemester: boolean;
}): GradeActionTypes => ({
  payload,
  type: SET_IS_FIRST_GRADE_2_SEMESTER
});

export const setIsSecondGrade1Semester = (payload: {
  isMissSemester: boolean;
}): GradeActionTypes => ({
  payload,
  type: SET_IS_SECOND_GRADE_1_SEMESTER
});

export const setIsSecondGrade2Semester = (payload: {
  isMissSemester: boolean;
}): GradeActionTypes => ({
  payload,
  type: SET_IS_SECOND_GRADE_2_SEMESTER
});

export const setIsThirdGrade1Semester = (payload: {
  isMissSemester: boolean;
}): GradeActionTypes => ({
  payload,
  type: SET_IS_THIRD_GRADE_1_SEMESTER
});

export const setGedAverageScore = (payload: {
  gedAverageScore: number;
}): GradeActionTypes => ({
  payload,
  type: SET_GED_AVERAGE_SCORE
});

export const setSubjectScores = (payload: {
  subjectScores?: Array<{
    semester: number;
    subject:
      | "korean"
      | "math"
      | "social"
      | "science"
      | "english"
      | "history"
      | "tech_home";
    score: string;
  }>;
}): GradeActionTypes => ({
  payload,
  type: SET_SUBJECT_SCORES
});
