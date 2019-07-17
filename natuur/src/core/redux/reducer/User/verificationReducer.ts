import {
  VerificationActionTypes,
  SEND_VERIFICATION_NUMBER,
  SEND_VERIFICATION_NUMBER_SUCCESS,
  SEND_VERIFICATION_NUMBER_FAILURE,
  REVERT_SEND_VERIFICATION_STATE
} from "../../actions/verification";

export interface RootState {
  isWaiting?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

const initialState: RootState = {
  isError: false,
  isSuccess: false,
  isWaiting: true
};

const verificationReducer = (
  state = initialState,
  action: VerificationActionTypes
): RootState => {
  switch (action.type) {
    case SEND_VERIFICATION_NUMBER: {
      return {
        ...state,
        isWaiting: true
      };
    }
    case SEND_VERIFICATION_NUMBER_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        isError: false,
        isWaiting: false
      };
    }
    case SEND_VERIFICATION_NUMBER_FAILURE: {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isWaiting: false
      };
    }
    case REVERT_SEND_VERIFICATION_STATE: {
      return {
        isError: false,
        isSuccess: false,
        isWaiting: true
      };
    }
    default:
      return state;
  }
};

export default verificationReducer;
