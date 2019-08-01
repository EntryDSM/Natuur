import {
  UserActionTypes,
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  RESET_STATE,
  GET_USER_EMAIL
} from "../../actions/user";

export interface RootState {
  isWaiting?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  accessToken?: string;
  refreshToken?: string;
  userEmail?: string;
}

const initialState: RootState = {
  isError: false,
  isWaiting: false,
  isSuccess: false,
  accessToken: "",
  refreshToken: "",
  userEmail: ""
};

const userReducer = (
  state = initialState,
  // action: UserActionTypes---------------------------------------------------------------------------------------
  action
): RootState => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isWaiting: true
      };
    }
    case LOG_IN_SUCCESS: {
      // const { access, refresh } = action.payload;---------------------------------------------------------------------------------------
      const { access_token } = action.payload;

      return {
        ...state,
        // accessToken: access,---------------------------------------------------------------------------------------
        // refreshToken: refresh,---------------------------------------------------------------------------------------
        accessToken: access_token,
        isSuccess: true,
        isError: false,
        isWaiting: false
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
        userEmail: action.payload
      };
    }
    default:
      return state;
  }
};

export default userReducer;
