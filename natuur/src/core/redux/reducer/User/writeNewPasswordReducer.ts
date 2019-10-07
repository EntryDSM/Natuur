import {
  VerificationActionTypes,
  RESET_APPLICANT_PASSWORD,
  RESET_APPLICANT_PASSWORD_SUCCESS,
  RESET_APPLICANT_PASSWORD_FAILURE,
  REVERT_RESET_APPLICATN_STATE
} from "../../actions/verification";

export interface RootState {
  isWaiting?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

const initialState: RootState = {
  isError: false,
  isSuccess: false,
  isWaiting: false
};

const writeNewPasswordReducer = (
  state = initialState,
  action: VerificationActionTypes
): RootState => {
  switch (action.type) {
    case RESET_APPLICANT_PASSWORD: {
      return {
        ...state,
        isWaiting: true
      };
    }
    case RESET_APPLICANT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        isError: false,
        isWaiting: false
      };
    }
    case RESET_APPLICANT_PASSWORD_FAILURE: {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isWaiting: false
      };
    }
    case REVERT_RESET_APPLICATN_STATE: {
      return {
        isError: false,
        isSuccess: false,
        isWaiting: false
      };
    }
    default:
      return state;
  }
};

export default writeNewPasswordReducer;
