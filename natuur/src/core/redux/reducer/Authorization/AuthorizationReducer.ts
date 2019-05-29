import {
  RootState,
  UPDATE_USER_EMAIL,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_PASSWORD_CHECK,
  AuthorizationTypes
} from "../../actions/Authorization";

const initialState: RootState = {
  userEmail: "",
  userPassword: "",
  userPasswordCheck: ""
};

const AuthorizationReducer = (
  state = initialState,
  action: AuthorizationTypes
): RootState => {
  switch (action.type) {
    case UPDATE_USER_EMAIL: {
      return {
        ...state,
        userEmail: action.payload
      };
    }
    case UPDATE_USER_PASSWORD: {
      return {
        ...state,
        userPassword: action.payload
      };
    }
    case UPDATE_USER_PASSWORD_CHECK: {
      return {
        ...state,
        userPasswordCheck: action.payload
      };
    }
    default:
      return state;
  }
};

export default AuthorizationReducer;
