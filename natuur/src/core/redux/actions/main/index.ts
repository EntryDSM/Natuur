// Types
export const GET_USER_APPLICANT_STATUS = "GET_USER_APPLICANT_STATUS";
export const GET_USER_APPLICANT_STATUS_SUCCESS =
  "GET_USER_APPLICANT_STATUS_SUCCESS";
export const GET_USER_APPLICANT_STATUS_FAILURE =
  "GET_USER_APPLICANT_STATUS_FAILURE";

export interface UserApplicantStatusType {
  accessToken: string;
  isPaid?: boolean;
  isPassedFirstApply?: boolean;
  isPassedFinalApply?: boolean;
  isPrintedApplicationArrived?: boolean;
  isFinalSubmit?: boolean;
  receiptCode?: number;
  examCode?: number;
}
export interface UserApplicantStatus {
  type:
    | typeof GET_USER_APPLICANT_STATUS
    | typeof GET_USER_APPLICANT_STATUS_SUCCESS
    | typeof GET_USER_APPLICANT_STATUS_FAILURE;
  payload: UserApplicantStatusType;
}

export type MainActionTypes = UserApplicantStatus | null;

// actions
export const getUserApplicantStatus = (
  payload: UserApplicantStatusType
): MainActionTypes => ({
  payload,
  type: GET_USER_APPLICANT_STATUS
});
