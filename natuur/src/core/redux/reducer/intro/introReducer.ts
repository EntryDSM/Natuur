import {
  GET_DOCUMENT,
  GET_DOCUMENT_FAILURE,
  GET_DOCUMENT_SUCCESS,
  PATCH_DOCUMENT,
  PATCH_DOCUMENT_FAILURE,
  PATCH_DOCUMENT_SUCCESS,
  SET_SELF_INTRODUCTION,
  SET_STUDY_PLAN,
  introActionTypes
} from "../../actions/intro";

interface RootState {
  selfIntroduction: string;
  studyPlan: string;
  isSuccess: boolean;
  isError: boolean;
}

const initialState: RootState = {
  selfIntroduction: "",
  studyPlan: "",
  isSuccess: false,
  isError: false
};

const introReducer = (
  state = initialState,
  action: introActionTypes
): RootState => {
  switch (action.type) {
    case GET_DOCUMENT:
      return {
        ...state
      };
    case GET_DOCUMENT_SUCCESS:
      return {
        ...state,
        selfIntroduction: action.payload.self_introduction_text,
        studyPlan: action.payload.study_plan_text
      };
    case GET_DOCUMENT_FAILURE:
      return {
        ...state
      };
    case PATCH_DOCUMENT:
      return {
        ...state
      };
    case PATCH_DOCUMENT_SUCCESS:
      return {
        ...state,
        isSuccess: true
      };
    case PATCH_DOCUMENT_FAILURE:
      return {
        ...state,
        isError: true
      };
    case SET_SELF_INTRODUCTION:
      return {
        ...state,
        selfIntroduction: action.payload.text
      };
    case SET_STUDY_PLAN:
      return {
        ...state,
        studyPlan: action.payload.text
      };
    default:
      return state;
  }
};

export default introReducer;
