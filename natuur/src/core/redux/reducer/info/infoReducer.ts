import {
  GET_CLASSIFICATION,
  GET_CLASSIFICATION_SUCCESS,
  GET_CLASSIFICATION_FAILURE,
  PATCH_CLASSIFICATION,
  PATCH_CLASSIFICATION_SUCCESS,
  PATCH_CLASSIFICATION_FAILURE,
  InfoActionTypes,
  SET_IS_GED,
  SET_APPLY_TYPE,
  SET_SELECT_REGION,
  SET_GRADUATION_CLASSFICATION,
  SET_GRADUATED_YEAR,
  SET_REMARKS
} from "../../actions/info";

interface RootState {
  isGed: boolean;
  applyType: string;
  selectRegion: string;
  graduationClassification?: string;
  graduationYear?: number;
  remarks?: string;
  isSuccess?: boolean;
}

const initialState: RootState = {
  applyType: "",
  selectRegion: "",
  isGed: false,
  isSuccess: false
};

const infoReducer = (
  state = initialState,
  action: InfoActionTypes
): RootState => {
  switch (action.type) {
    case GET_CLASSIFICATION: {
      return {
        ...state,
        isSuccess: false
      };
    }
    case GET_CLASSIFICATION_SUCCESS: {
      const {
        is_ged,
        apply_type,
        social_detail_type,
        is_daejeon,
        is_graduated,
        graduated_year,
        additional_type
      } = action.payload;

      return {
        ...state,
        isSuccess: true,
        isGed: is_ged,
        applyType: `${apply_type}${social_detail_type !== undefined &&
          "/" + social_detail_type}`,
        selectRegion: `${is_daejeon ? "대전" : "전국"}`,
        graduationClassification:
          is_graduated !== undefined &&
          `${is_graduated ? "졸업자" : "졸업 예정자"}`,
        graduationYear: graduated_year,
        remarks: additional_type
      };
    }
    case GET_CLASSIFICATION_FAILURE: {
      return state;
    }
    case PATCH_CLASSIFICATION: {
      return state;
    }
    case PATCH_CLASSIFICATION_SUCCESS: {
      console.log("요청 성공");
      return state;
    }
    case PATCH_CLASSIFICATION_FAILURE: {
      console.log("요청 실패");
      return state;
    }
    case SET_IS_GED: {
      return {
        ...state,
        isGed: action.payload
      };
    }
    case SET_APPLY_TYPE: {
      return {
        ...state,
        applyType: action.payload
      };
    }
    case SET_SELECT_REGION: {
      return {
        ...state,
        selectRegion: action.payload
      };
    }
    case SET_GRADUATION_CLASSFICATION: {
      return {
        ...state,
        graduationClassification: action.payload
      };
    }
    case SET_GRADUATED_YEAR: {
      return {
        ...state,
        graduationYear: action.payload
      };
    }
    case SET_REMARKS: {
      return {
        ...state,
        remarks: action.payload
      };
    }
    default:
      return state;
  }
};

export default infoReducer;
