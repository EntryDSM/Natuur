// Types
export const SEND_AUTHENTICATION_NUMBER_BY_EMAIL =
  "SEND_AUTHENTICATION_NUMBER_BY_EMAIL";
export const SEND_AUTHENTICATION_NUMBER_BY_EMAIL_SUCCESS =
  "SEND_AUTHENTICATION_NUMBER_BY_EMAIL_SUCCESS";
export const SEND_AUTHENTICATION_NUMBER_BY_EMAIL_FAILURS =
  "SEND_AUTHENTICATION_NUMBER_BY_EMAIL_FAILURS";

export const GET_REGISTER_VERIFY_NUMBER = "GET_REGISTER_VERIFY_NUMBER";
export const GET_REGISTER_VERIFY_NUMBER_SUCCESS =
  "GET_REGISTER_VERIFY_NUMBER_SUCCESS";
export const GET_REGISTER_VERIFY_NUMBER_FAILURS =
  "GET_REGISTER_VERIFY_NUMBER_FAILURS";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURS = "SIGN_UP_FAILURS";

export interface AuthenticationNumberByEmail {
  type:
    | typeof SEND_AUTHENTICATION_NUMBER_BY_EMAIL
    | typeof SEND_AUTHENTICATION_NUMBER_BY_EMAIL_SUCCESS
    | typeof SEND_AUTHENTICATION_NUMBER_BY_EMAIL_FAILURS;
  payload: { email: string; isResend?: boolean };
}

export interface RegisterVerifyNumber {
  type:
    | typeof GET_REGISTER_VERIFY_NUMBER
    | typeof GET_REGISTER_VERIFY_NUMBER_SUCCESS
    | typeof GET_REGISTER_VERIFY_NUMBER_FAILURS;
  payload: { email: string; verify: string };
}

export interface SignUp {
  type: typeof SIGN_UP | typeof SIGN_UP_SUCCESS | typeof SIGN_UP_FAILURS;
  payload: { email: string; password: string };
}

export type AuthorizationTypes =
  | AuthenticationNumberByEmail
  | RegisterVerifyNumber
  | SignUp
  | null;

// Actions
export const sendAuthenticationNumberByEmail = (payload: {
  email: string;
  isResend?: boolean;
}): AuthorizationTypes => ({
  payload,
  type: SEND_AUTHENTICATION_NUMBER_BY_EMAIL
});

export const getRegisterVerifyNumber = (payload: {
  verify: string;
  email: string;
}): AuthorizationTypes => ({
  payload,
  type: GET_REGISTER_VERIFY_NUMBER
});

export const signUp = (payload: {
  email: string;
  password: string;
}): AuthorizationTypes => ({
  payload,
  type: SIGN_UP
});
