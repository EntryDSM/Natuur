import {
  UserActionTypes,
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURS,
  REFRESH_JWT,
  REFRESH_JWT_SUCCESS,
  REFRESH_JWT_FAILURS,
  RESET_STATE,
  GET_USER_EMAIL,
  CHECK_ACCESS_TOKEN
} from "../../actions/user";

export interface RootState {
  isWaiting?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  accessToken?: string;
  refreshToken?: string;
  userEmail?: string;
  isExpirationJWT: boolean;
}

const initialState: RootState = {
  isError: false,
  isWaiting: false,
  isSuccess: false,
  accessToken: "",
  refreshToken: "",
  userEmail: "",
  isExpirationJWT: true
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): RootState => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isWaiting: true
      };
    }
    case LOG_IN_SUCCESS: {
      const { access, refresh } = action.payload;

      return {
        ...state,
        accessToken: access,
        refreshToken: refresh,
        isSuccess: true,
        isError: false,
        isWaiting: false,
        isExpirationJWT: false
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isError: true,
        isSuccess: false,
        isWaiting: false
      };
    }
    case LOG_OUT: {
      return {
        ...state
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        accessToken: "",
        refreshToken: ""
      };
    }
    case LOG_OUT_FAILURS: {
      return {
        ...state
      };
    }
    case REFRESH_JWT: {
      return {
        ...state
      };
    }
    case REFRESH_JWT_SUCCESS: {
      return {
        ...state,
        accessToken: action.payload.access,
        isExpirationJWT: false
      };
    }
    case REFRESH_JWT_FAILURS: {
      return {
        ...state
      };
    }
    case RESET_STATE: {
      return {
        ...state,
        isSuccess: false,
        isError: false,
        isWaiting: false
      };
    }
    case GET_USER_EMAIL: {
      return {
        ...state,
        userEmail: action.payload.userEmail
      };
    }
    case CHECK_ACCESS_TOKEN: {
      return {
        ...state,
        isExpirationJWT: action.payload.isAccess
      };
    }
    default:
      return state;
  }
};

export default userReducer;
