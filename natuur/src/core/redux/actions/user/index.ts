// Types
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const RESET_STATE = "RESET_STATE";
export const GET_USER_EMAIL = "GET_USER_EMAIL";

interface LogInPayload {
  email: string;
  password: string;
  access?: string;
  refresh?: string;
}
export interface LogIn {
  type: typeof LOG_IN | typeof LOG_IN_SUCCESS | typeof LOG_IN_FAILURE;
  payload: LogInPayload;
}
interface ResetState {
  type: typeof RESET_STATE;
}
interface GetUserEmail {
  type: typeof GET_USER_EMAIL;
  payload: { userEmail: string };
}

// Actions
export type UserActionTypes = LogIn | ResetState | GetUserEmail | null;

export const logIn = (payload: LogInPayload): UserActionTypes => ({
  payload,
  type: LOG_IN
});

export const resetState = (): UserActionTypes => ({
  type: RESET_STATE
});

export const getUserEmail = (payload: {
  userEmail: string;
}): UserActionTypes => ({
  payload,
  type: GET_USER_EMAIL
});
