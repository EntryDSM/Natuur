import {
  AuthorizationTypes,
  GET_REGISTER_VERIFY_NUMBER,
  GET_REGISTER_VERIFY_NUMBER_SUCCESS,
  GET_REGISTER_VERIFY_NUMBER_FAILURS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURS,
  RESET_STATUS
} from "../../actions/Authorization";

// reducerState
export interface RootState {
  isGetSuccess: boolean;
  isGetError: boolean;
  isGetWaiting: boolean;
  isSignUpWaiting: boolean;
  isSignUpSuccess: boolean;
  isSignUpError: boolean;
}

const initialState: RootState = {
  isGetSuccess: false,
  isGetError: false,
  isGetWaiting: false,
  isSignUpWaiting: false,
  isSignUpSuccess: false,
  isSignUpError: false
};

const AuthorizationReducer = (
  state = initialState,
  action: AuthorizationTypes
): RootState => {
  switch (action.type) {
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
        ...state,
        isSignUpWaiting: true
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSignUpSuccess: true,
        isSignUpError: false,
        isSignUpWaiting: false
      };
    }
    case SIGN_UP_FAILURS: {
      return {
        ...state,
        isSignUpSuccess: false,
        isSignUpError: true,
        isSignUpWaiting: false
      };
    }
    case RESET_STATUS: {
      return {
        ...state,
        isGetSuccess: false,
        isGetError: false,
        isGetWaiting: false,
        isSignUpSuccess: false,
        isSignUpError: false
      };
    }
    default:
      return state;
  }
};

export default AuthorizationReducer;
