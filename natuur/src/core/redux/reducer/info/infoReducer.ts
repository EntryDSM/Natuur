import {
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
  graduationYear?: string;
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
