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

export interface SetVolunteer {
  type: typeof SET_VOLUNTEER;
  payload: { volunteer: string };
}

export interface SetAbsent {
  type: typeof SET_ABSENT;
  payload: { absent: string };
}

export interface SetEarlyLeave {
  type: typeof SET_EARLY_LEAVE;
  payload: { earlyLeave: string };
}

export interface SetTardy {
  type: typeof SET_TARDY;
  payload: { tardy: string };
}

export interface SetMissingClass {
  type: typeof SET_MISSING_CLASS;
  payload: { missingClass: string };
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
  payload: { gedAverageScore: string };
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
        | "tech_and_home";
      score: "A" | "B" | "C" | "D" | "E" | "X";
    }>;
  };
}

export type GradeActionTypes =
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

export const setVolunteer = (payload: {
  volunteer: string;
}): GradeActionTypes => ({
  payload,
  type: SET_VOLUNTEER
});

export const setAbsent = (payload: { absent: string }): GradeActionTypes => ({
  payload,
  type: SET_ABSENT
});

export const setEarlyLeave = (payload: {
  earlyLeave: string;
}): GradeActionTypes => ({
  payload,
  type: SET_EARLY_LEAVE
});

export const setTardy = (payload: { tardy: string }): GradeActionTypes => ({
  payload,
  type: SET_TARDY
});

export const setMissingClass = (payload: {
  missingClass: string;
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
  gedAverageScore: string;
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
      | "tech_and_home";
    score: "A" | "B" | "C" | "D" | "E" | "X";
  }>;
}): GradeActionTypes => ({
  payload,
  type: SET_SUBJECT_SCORES
});
