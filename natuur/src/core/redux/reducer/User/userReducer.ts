import { LOG_IN, RootState, UserActionTypes } from "../../actions/user";

const initialState: RootState = {
  jwtToken: ""
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): RootState => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        jwtToken: action.payload.data
      };
    }
    default:
      return state;
  }
};

export default userReducer;
