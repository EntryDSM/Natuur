import {
  GET_DILIGENCE,
  GET_DILIGENCE_SUCCESS,
  GET_DILIGENCE_FAILURE,
  GET_GED_GRADE,
  GET_GED_GRADE_SUCCESS,
  GET_GED_GRADE_FAILURE,
  GET_GRADE,
  GET_GRADE_SUCCESS,
  GET_GRADE_FAILURE,
  PATCH_DILIGENCE,
  PATCH_DILIGENCE_SUCCESS,
  PATCH_DILIGENCE_FAILURE,
  PATCH_GED_GRADE,
  PATCH_GED_GRADE_SUCCESS,
  PATCH_GED_GRADE_FAILURE,
  PATCH_GRADE,
  PATCH_GRADE_SUCCESS,
  PATCH_GRADE_FAILURE,
  SET_VOLUNTEER,
  SET_ABSENT,
  SET_EARLY_LEAVE,
  SET_TARDY,
  SET_MISSING_CLASS,
  SET_IS_FIRST_GRADE_1_SEMESTER,
  SET_IS_FIRST_GRADE_2_SEMESTER,
  SET_IS_SECOND_GRADE_1_SEMESTER,
  SET_IS_SECOND_GRADE_2_SEMESTER,
  SET_IS_THIRD_GRADE_1_SEMESTER,
  SET_GED_AVERAGE_SCORE,
  SET_SUBJECT_SCORES,
  GradeActionTypes
} from "../../actions/grade";
import { returnSubjectScoresList } from "../../../../lib/utils/subjectList";

interface RootState {
  volunteer: number;
  absent: number;
  earlyLeave: number;
  tardy: number;
  missingClass: number;
  gedAverageScore: number;
  subjectScores: Array<{
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
  isFirstGradeSmester1: boolean;
  isFirstGradeSmester2: boolean;
  isSecondGradeSmester1: boolean;
  isSecondGradeSmester2: boolean;
  isThirdGradeSmester1: boolean;
}

const initialState: RootState = {
  volunteer: 0,
  absent: 0,
  earlyLeave: 0,
  tardy: 0,
  missingClass: 0,
  gedAverageScore: 0,
  subjectScores: returnSubjectScoresList(),
  isFirstGradeSmester1: false,
  isFirstGradeSmester2: false,
  isSecondGradeSmester1: false,
  isSecondGradeSmester2: false,
  isThirdGradeSmester1: false
};

const gradeReducer = (
  state = initialState,
  action: GradeActionTypes
): RootState => {
  switch (action.type) {
    case SET_VOLUNTEER:
      return {
        ...state,
        volunteer: action.payload.volunteer
      };
    case SET_ABSENT:
      return {
        ...state,
        absent: action.payload.absent
      };
    case SET_EARLY_LEAVE:
      return {
        ...state,
        earlyLeave: action.payload.earlyLeave
      };
    case SET_TARDY:
      return {
        ...state,
        tardy: action.payload.tardy
      };
    case SET_MISSING_CLASS:
      return {
        ...state,
        missingClass: action.payload.missingClass
      };
    case SET_IS_FIRST_GRADE_1_SEMESTER:
      return {
        ...state,
        isFirstGradeSmester1: action.payload.isMissSemester
      };
    case SET_IS_FIRST_GRADE_2_SEMESTER:
      return {
        ...state,
        isFirstGradeSmester2: action.payload.isMissSemester
      };
    case SET_IS_SECOND_GRADE_1_SEMESTER:
      return {
        ...state,
        isSecondGradeSmester1: action.payload.isMissSemester
      };
    case SET_IS_SECOND_GRADE_2_SEMESTER:
      return {
        ...state,
        isSecondGradeSmester2: action.payload.isMissSemester
      };
    case SET_IS_THIRD_GRADE_1_SEMESTER:
      return {
        ...state,
        isThirdGradeSmester1: action.payload.isMissSemester
      };
    case SET_GED_AVERAGE_SCORE:
      return {
        ...state,
        gedAverageScore: action.payload.gedAverageScore
      };
    case SET_SUBJECT_SCORES:
      return {
        ...state,
        subjectScores: action.payload.subjectScores
      };
    case GET_DILIGENCE:
      return {
        ...state
      };
    case GET_DILIGENCE_SUCCESS: {
      const {
        volunteer_time,
        full_cut_count,
        period_cut_count,
        late_count,
        early_leave_count
      } = action.payload;

      return {
        ...state,
        volunteer: volunteer_time,
        absent: full_cut_count,
        earlyLeave: period_cut_count,
        tardy: late_count,
        missingClass: early_leave_count
      };
    }
    case GET_DILIGENCE_FAILURE:
      return {
        ...state
      };
    case PATCH_DILIGENCE:
      return {
        ...state
      };
    case PATCH_DILIGENCE_SUCCESS:
      return {
        ...state
      };
    case PATCH_DILIGENCE_FAILURE:
      return {
        ...state
      };
    case GET_GED_GRADE:
      return {
        ...state
      };
    case GET_GED_GRADE_SUCCESS: {
      const { ged_average_score } = action.payload;
      return {
        ...state,
        gedAverageScore: ged_average_score
      };
    }
    case GET_GED_GRADE_FAILURE:
      return {
        ...state
      };
    case PATCH_GED_GRADE:
      return {
        ...state
      };
    case PATCH_GED_GRADE_SUCCESS:
      return {
        ...state
      };
    case PATCH_GED_GRADE_FAILURE:
      return {
        ...state
      };
    case GET_GRADE:
      return {
        ...state
      };
    case GET_GRADE_SUCCESS: {
      const { subject_scores } = action.payload;
      return {
        ...state,
        subjectScores: subject_scores
      };
    }
    case GET_GRADE_FAILURE:
      return {
        ...state
      };
    case PATCH_GRADE:
      return {
        ...state
      };
    case PATCH_GRADE_SUCCESS:
      return {
        ...state
      };
    case PATCH_GRADE_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default gradeReducer;
