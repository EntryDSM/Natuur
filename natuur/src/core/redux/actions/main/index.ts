// Types
export const GET_USER_APPLICANT_STATUS = "GET_USER_APPLICANT_STATUS";
export const GET_USER_APPLICANT_STATUS_SUCCESS =
  "GET_USER_APPLICANT_STATUS_SUCCESS";
export const GET_USER_APPLICANT_STATUS_FAILURE =
  "GET_USER_APPLICANT_STATUS_FAILURE";
export const GET_USER_APPLICANT_INFOMATION = "GET_USER_APPLICANT_INFOMATION";
export const GET_USER_APPLICANT_INFOMATION_SUCCESS =
  "GET_USER_APPLICANT_INFOMATION_SUCCESS";
export const GET_USER_APPLICANT_INFOMATION_FAILURE =
  "GET_USER_APPLICANT_INFOMATION_FAILURE";

export interface UserApplicantStatusApiType {
  isPaid?: boolean;
  isPassedFirstApply?: boolean;
  isPassedFinalApply?: boolean;
  isPrintedApplicationArrived?: boolean;
  isFinalSubmit?: boolean;
  receiptCode?: number;
  examCode?: number;
}
interface UserApplicantStatusType extends UserApplicantStatusApiType {
  accessToken: string;
}
export interface UserApplicantStatus {
  type:
    | typeof GET_USER_APPLICANT_STATUS
    | typeof GET_USER_APPLICANT_STATUS_SUCCESS
    | typeof GET_USER_APPLICANT_STATUS_FAILURE;
  payload: UserApplicantStatusType;
}

export interface UserApplicantInfoApiType {
  email?: string;
  applicantName?: string;
  sex?: string;
  birthDate?: string;
  parentName?: string;
  parentTel?: string;
  applicantTel?: string;
  address?: string;
  postCode?: number;
  imagePath?: string;
}
interface UserApplicantInfoType extends UserApplicantInfoApiType {
  email: string;
  accessToken: string;
}
export interface UserApplicantInfo {
  type:
    | typeof GET_USER_APPLICANT_INFOMATION
    | typeof GET_USER_APPLICANT_INFOMATION_SUCCESS
    | typeof GET_USER_APPLICANT_INFOMATION_FAILURE;
  payload: UserApplicantInfoType;
}

export type MainActionTypes = UserApplicantStatus | UserApplicantInfo | null;

// actions
export const getUserApplicantStatus = (
  payload: UserApplicantStatusType
): MainActionTypes => ({
  payload,
  type: GET_USER_APPLICANT_STATUS
});

export const getUserApplicantInfo = (
  payload: UserApplicantInfoType
): MainActionTypes => ({
  payload,
  type: GET_USER_APPLICANT_INFOMATION
});
