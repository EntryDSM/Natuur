import { AuthorizationTypes } from "../../actions/Authorization";

// reducerState
export interface RootState {}

const initialState: RootState = {};

const AuthorizationReducer = (
  state = initialState,
  action: AuthorizationTypes
) => {};

export default AuthorizationReducer;
