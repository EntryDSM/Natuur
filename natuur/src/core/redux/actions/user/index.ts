// Types
export const LOG_IN = "LOG_IN";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_OUT = "LOG_OUT";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURS = "LOG_OUT_FAILURS";
export const REFRESH_JWT = "REFRESH_JWT";
export const REFRESH_JWT_SUCCESS = "REFRESH_JWT_SUCCESS";
export const REFRESH_JWT_FAILURS = "REFRESH_JWT_FAILURS";
export const RESET_STATE = "RESET_STATE";
export const GET_USER_EMAIL = "GET_USER_EMAIL";
export const CHECK_ACCESS_TOKEN = "CHECK_ACCESS_TOKEN";

interface LogInPayload {
  email: string;
  password: string;
  access?: string;
  refresh?: string;
}

interface ResetState {
  type: typeof RESET_STATE;
}
interface GetUserEmail {
  type: typeof GET_USER_EMAIL;
  payload: { userEmail: string };
}
export interface LogIn {
  type: typeof LOG_IN | typeof LOG_IN_SUCCESS | typeof LOG_IN_FAILURE;
  payload: LogInPayload;
}
export interface LogOut {
  type: typeof LOG_OUT | typeof LOG_OUT_SUCCESS | typeof LOG_OUT_FAILURS;
  payload: { refreshToken: string };
}
export interface RefreshJWT {
  type:
    | typeof REFRESH_JWT
    | typeof REFRESH_JWT_SUCCESS
    | typeof REFRESH_JWT_FAILURS;
  payload: {
    refreshToken: string;
    accessToken?: string;
    access?: string;
    errorRefreshStatus?: number;
  };
}
export interface CheckAccessToken {
  type: typeof CHECK_ACCESS_TOKEN;
  payload: { isAccess: boolean };
}

// Actions
export type UserActionTypes =
  | LogIn
  | ResetState
  | GetUserEmail
  | LogOut
  | RefreshJWT
  | CheckAccessToken
  | null;

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

export const logOut = (payload: { refreshToken: string }): UserActionTypes => ({
  payload,
  type: LOG_OUT
});

export const refreshJWT = (payload: {
  refreshToken: string;
}): UserActionTypes => ({
  payload,
  type: REFRESH_JWT
});

export const checkAccessToken = (payload: {
  isAccess: boolean;
}): UserActionTypes => ({
  payload,
  type: CHECK_ACCESS_TOKEN
});
