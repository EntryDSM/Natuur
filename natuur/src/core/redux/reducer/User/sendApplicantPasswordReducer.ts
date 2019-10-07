import {
  VerificationActionTypes,
  RE_SEND_VERIFICATION_NUMBER,
  RE_SEND_VERIFICATION_NUMBER_SUCCESS,
  RE_SEND_VERIFICATION_NUMBER_FAILURE,
  SEND_APPLICANT_PASSWORD,
  SEND_APPLICANT_PASSWORD_SUCCESS,
  SEND_APPLICANT_PASSWORD_FAILURE,
  REVERT_RE_SEND_VERIFICATION_STATE
} from "../../actions/verification";

export interface RootState {
  isVerifyWaiting?: boolean;
  isVerifyError?: boolean;
  isVerifySuccess?: boolean;
  isAppliWaiting?: boolean;
  isAppliError?: boolean;
  isAppliSuccess?: boolean;
}

const initialState: RootState = {
  isVerifyError: false,
  isVerifySuccess: false,
  isVerifyWaiting: true,
  isAppliError: false,
  isAppliSuccess: false,
  isAppliWaiting: false
};

const sendApplicantPasswordReducer = (
  state = initialState,
  action: VerificationActionTypes
): RootState => {
  switch (action.type) {
    case RE_SEND_VERIFICATION_NUMBER: {
      return {
        ...state,
        isVerifyWaiting: true
      };
    }
    case RE_SEND_VERIFICATION_NUMBER_SUCCESS: {
      return {
        ...state,
        isVerifySuccess: true,
        isVerifyError: false,
        isVerifyWaiting: false
      };
    }
    case RE_SEND_VERIFICATION_NUMBER_FAILURE: {
      return {
        ...state,
        isVerifyError: true,
        isVerifySuccess: false,
        isVerifyWaiting: false
      };
    }
    case SEND_APPLICANT_PASSWORD: {
      return {
        ...state,
        isAppliWaiting: true
      };
    }
    case SEND_APPLICANT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isAppliSuccess: true,
        isAppliError: false,
        isAppliWaiting: false
      };
    }
    case SEND_APPLICANT_PASSWORD_FAILURE: {
      return {
        ...state,
        isAppliError: true,
        isAppliSuccess: false,
        isAppliWaiting: false
      };
    }
    case REVERT_RE_SEND_VERIFICATION_STATE: {
      return {
        isVerifyError: false,
        isVerifySuccess: false,
        isVerifyWaiting: true,
        isAppliError: false,
        isAppliSuccess: false,
        isAppliWaiting: false
      };
    }
    default:
      return state;
  }
};

export default sendApplicantPasswordReducer;
