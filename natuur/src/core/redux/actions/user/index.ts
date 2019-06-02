// reducerState
export interface RootState {
  jwtToken: string;
}

// Types
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

interface LoginPayloadType {
  data: string;
}

interface LogIn {
  type: string;
  payload: LoginPayloadType;
}

export type UserActionTypes = LogIn | null;

// Actions
const logIn = (payload: RootState) => ({
  payload,
  type: LOG_IN
});
