import {
  AuthorizationTypes,
  SEND_AUTHENTICATION_NUMBER_BY_EMAIL,
  SEND_AUTHENTICATION_NUMBER_BY_EMAIL_SUCCESS,
  SEND_AUTHENTICATION_NUMBER_BY_EMAIL_FAILURS,
  GET_REGISTER_VERIFY_NUMBER,
  GET_REGISTER_VERIFY_NUMBER_SUCCESS,
  GET_REGISTER_VERIFY_NUMBER_FAILURS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURS
} from "../../actions/Authorization";

// reducerState
export interface RootState {
  isSendSuccess: boolean;
  isSendError: boolean;
  isSendWaiting: boolean;
  isGetSuccess: boolean;
  isGetError: boolean;
  isGetWaiting: boolean;
  isSignUpSuccess: boolean;
  isSignUpError: boolean;
}

const initialState: RootState = {
  isSendSuccess: false,
  isSendError: false,
  isSendWaiting: false,
  isGetSuccess: false,
  isGetError: false,
  isGetWaiting: false,
  isSignUpSuccess: false,
  isSignUpError: false
};

const AuthorizationReducer = (
  state = initialState,
  action: AuthorizationTypes
): RootState => {
  switch (action.type) {
    case SEND_AUTHENTICATION_NUMBER_BY_EMAIL: {
      return {
        ...state,
        isSendWaiting: true,
        isSendSuccess: false
      };
    }
    case SEND_AUTHENTICATION_NUMBER_BY_EMAIL_SUCCESS: {
      return {
        ...state,
        isSendSuccess: true,
        isSendError: false,
        isSendWaiting: false
      };
    }
    case SEND_AUTHENTICATION_NUMBER_BY_EMAIL_FAILURS: {
      return {
        ...state,
        isSendError: true,
        isSendSuccess: false,
        isSendWaiting: false
      };
    }
    case GET_REGISTER_VERIFY_NUMBER: {
      return {
        ...state,
        isGetWaiting: true
      };
    }
    case GET_REGISTER_VERIFY_NUMBER_SUCCESS: {
      return {
        ...state,
        isGetSuccess: true,
        isGetError: false,
        isGetWaiting: false
      };
    }
    case GET_REGISTER_VERIFY_NUMBER_FAILURS: {
      return {
        ...state,
        isGetError: true,
        isGetSuccess: false,
        isGetWaiting: false
      };
    }
    case SIGN_UP: {
      return {
        ...state
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSignUpSuccess: true,
        isSignUpError: false
      };
    }
    case SIGN_UP_FAILURS: {
      return {
        ...state,
        isSignUpSuccess: false,
        isSignUpError: true
      };
    }
    default:
      return state;
  }
};

export default AuthorizationReducer;
