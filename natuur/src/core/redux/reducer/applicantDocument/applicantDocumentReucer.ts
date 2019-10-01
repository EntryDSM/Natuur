import {
  GET_APPLICATION_DOCUMENT,
  GET_APPLICATION_DOCUMENT_SUCCESS,
  GET_APPLICATION_DOCUMENT_FAILURS,
  PUT_GED_DOCUMENT,
  PUT_GED_DOCUMENT_SUCCESS,
  PUT_GED_DOCUMENT_FAILURS,
  PUT_GRADUATED_DOCUMENT,
  PUT_GRADUATED_DOCUMENT_SUCCESS,
  PUT_GRADUATED_DOCUMENT_FAILURS,
  PUT_UNGRADUATED_DOCUMENT,
  PUT_UNGRADUATED_DOCUMENT_SUCCESS,
  PUT_UNGRADUATED_DOCUMENT_FAILURS,
  ApplicantDocumentActionTypes
} from "../../actions/applicantDocument";
import {
  GedApplicationApiType,
  GraduatedApplicationApiType,
  UnGraduatedApplicationApiType
} from "../../../../lib/api/apiType";

type RootState =
  | { putStatusCode: number }
  | GedApplicationApiType & GraduatedApplicationApiType
  | UnGraduatedApplicationApiType;

const initialState: RootState = {
  putStatusCode: 0,
  classification: {
    apply_type: "COMMON",
    additional_type: "NOT_APPLICABLE",
    is_daejeon: false
  },
  personal_information: {
    name: "",
    sex: "MALE",
    birth_date: "",
    parent_name: "",
    parent_tel: "",
    applicant_tel: "",
    address: "",
    post_code: "",
    student_number: "",
    school_name: "",
    school_tel: ""
  },
  diligence_grade: {
    volunteer_time: 0,
    full_cut_count: 0,
    period_cut_count: 0,
    late_count: 0,
    early_leave_count: 0
  },
  ged_grade: {
    ged_average_score: 0
  },
  school_grade: {
    korean: ["A", "A", "A", "A", "A"],
    social: ["A", "A", "A", "A", "A"],
    history: ["A", "A", "A", "A", "A"],
    math: ["A", "A", "A", "A", "A"],
    science: ["A", "A", "A", "A", "A"],
    tech_and_home: ["A", "A", "A", "A", "A"],
    english: ["A", "A", "A", "A", "A"]
  },
  self_introduction_and_study_plan: {
    self_introduction: "",
    study_plan: ""
  }
};

const applicantDocumentReducer = (
  state = initialState,
  action: ApplicantDocumentActionTypes
): RootState => {
  switch (action.type) {
    case GET_APPLICATION_DOCUMENT:
      return {
        ...state
      };
    case GET_APPLICATION_DOCUMENT_SUCCESS: {
      const {
        classification,
        personal_information,
        diligence_grade,
        school_grade,
        self_introduction_and_study_plan
      } = action.payload;
      return {
        ...state,
        classification,
        personal_information,
        diligence_grade,
        school_grade,
        self_introduction_and_study_plan
      };
    }
    case GET_APPLICATION_DOCUMENT_FAILURS:
      return {
        ...state
      };
    case PUT_GED_DOCUMENT:
      return {
        ...state
      };
    case PUT_GED_DOCUMENT_SUCCESS: {
      return {
        ...state,
        putStatusCode: 204
      };
    }
    case PUT_GED_DOCUMENT_FAILURS:
      return {
        ...state,
        putStatusCode: action.payload.putStatusCode
      };
    case PUT_GRADUATED_DOCUMENT:
      return {
        ...state
      };
    case PUT_GRADUATED_DOCUMENT_SUCCESS: {
      return {
        ...state,
        putStatusCode: 204
      };
    }
    case PUT_GRADUATED_DOCUMENT_FAILURS:
      return {
        ...state,
        putStatusCode: action.payload.putStatusCode
      };
    case PUT_UNGRADUATED_DOCUMENT:
      return {
        ...state
      };
    case PUT_UNGRADUATED_DOCUMENT_SUCCESS: {
      return {
        ...state,
        putStatusCode: 204
      };
    }
    case PUT_UNGRADUATED_DOCUMENT_FAILURS:
      return {
        ...state,
        putStatusCode: action.payload.putStatusCode
      };
    default:
      return state;
  }
};

export default applicantDocumentReducer;
