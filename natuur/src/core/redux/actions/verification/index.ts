// Types
export const SEND_VERIFICATION_NUMBER = "SEND_VERIFICATION_NUMBER";
export const SEND_VERIFICATION_NUMBER_SUCCESS =
  "SEND_VERIFICATION_NUMBER_SUCCESS";
export const SEND_VERIFICATION_NUMBER_FAILURE =
  "SEND_VERIFICATION_NUMBER_FAILURE";
export const RESET_APPLICANT_PASSWORD = "RESET_APPLICANT_PASSWORD";
export const RESET_APPLICANT_PASSWORD_SUCCESS =
  "RESET_APPLICANT_PASSWORD_SUCCESS";
export const RESET_APPLICANT_PASSWORD_FAILURE =
  "RESET_APPLICANT_PASSWORD_FAILURE";
export const RE_SEND_VERIFICATION_NUMBER = "RE_SEND_VERIFICATION_NUMBER";
export const RE_SEND_VERIFICATION_NUMBER_SUCCESS =
  "RE_SEND_VERIFICATION_NUMBER_SUCCESS";
export const RE_SEND_VERIFICATION_NUMBER_FAILURE =
  "RE_SEND_VERIFICATION_NUMBER_FAILURE";
export const SEND_APPLICANT_PASSWORD = "SEND_APPLICANT_PASSWORD";
export const SEND_APPLICANT_PASSWORD_SUCCESS =
  "SEND_APPLICANT_PASSWORD_SUCCESS";
export const SEND_APPLICANT_PASSWORD_FAILURE =
  "SEND_APPLICANT_PASSWORD_FAILURE";
export const REVERT_SEND_VERIFICATION_STATE = "REVERT_SEND_VERIFICATION_STATE";
export const REVERT_RESET_APPLICATN_STATE = "REVERT_RESET_APPLICATN_STATE";
export const REVERT_RE_SEND_VERIFICATION_STATE =
  "REVERT_RE_SEND_VERIFICATION_STATE";

export interface SendVerificationNumber {
  type:
    | typeof SEND_VERIFICATION_NUMBER
    | typeof SEND_VERIFICATION_NUMBER_SUCCESS
    | typeof SEND_VERIFICATION_NUMBER_FAILURE;
  payload: string;
}
export interface ResetApplicantPassword {
  type:
    | typeof RESET_APPLICANT_PASSWORD
    | typeof RESET_APPLICANT_PASSWORD_SUCCESS
    | typeof RESET_APPLICANT_PASSWORD_FAILURE;
  payload: {
    email: string;
    password: string;
  };
}
export interface SendApplicantPassword {
  type:
    | typeof SEND_APPLICANT_PASSWORD
    | typeof SEND_APPLICANT_PASSWORD_SUCCESS
    | typeof SEND_APPLICANT_PASSWORD_FAILURE;
  payload: {
    email: string;
    verify: string;
  };
}
export interface ReSendApplicationPassword {
  type:
    | typeof RE_SEND_VERIFICATION_NUMBER
    | typeof RE_SEND_VERIFICATION_NUMBER_SUCCESS
    | typeof RE_SEND_VERIFICATION_NUMBER_FAILURE;
  payload: string;
}
export interface RevertSendVerificationState {
  type: typeof REVERT_SEND_VERIFICATION_STATE;
}
export interface RevertReSendVerificationState {
  type: typeof REVERT_RE_SEND_VERIFICATION_STATE;
}
export interface RevertResetApplicantState {
  type: typeof REVERT_RESET_APPLICATN_STATE;
}

// Actions
export type VerificationActionTypes =
  | SendVerificationNumber
  | ResetApplicantPassword
  | SendApplicantPassword
  | ReSendApplicationPassword
  | RevertSendVerificationState
  | RevertReSendVerificationState
  | RevertResetApplicantState
  | null;

export const sendVerificationNumber = (
  payload: string
): VerificationActionTypes => ({
  payload,
  type: SEND_VERIFICATION_NUMBER
});

export const resetApplicantPassword = (payload: {
  email: string;
  password: string;
}): VerificationActionTypes => ({
  payload,
  type: RESET_APPLICANT_PASSWORD
});

export const sendApplicantPassword = (payload: {
  email: string;
  verify: string;
}): VerificationActionTypes => ({
  payload,
  type: SEND_APPLICANT_PASSWORD
});

export const reSendVerificationNumber = (
  payload: string
): VerificationActionTypes => ({
  payload,
  type: RE_SEND_VERIFICATION_NUMBER
});

export const revertSendVerificationState = (): VerificationActionTypes => ({
  type: REVERT_SEND_VERIFICATION_STATE
});

export const revertReSendVerificationState = (): VerificationActionTypes => ({
  type: REVERT_RE_SEND_VERIFICATION_STATE
});

export const revertResetApplicantState = (): VerificationActionTypes => ({
  type: REVERT_RESET_APPLICATN_STATE
});
