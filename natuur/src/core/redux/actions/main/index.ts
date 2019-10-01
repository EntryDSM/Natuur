import { UserApplicantStatusApiType } from "../../../../lib/api/apiType";

export const PATCH_FIANL_SUBMIT = "PATCH_FIANL_SUBMIT";
export const PATCH_FIANL_SUBMIT_SUCCESS = "PATCH_FIANL_SUBMIT_SUCCESS";
export const PATCH_FIANL_SUBMIT_FAILURE = "PATCH_FIANL_SUBMIT_FAILURE";
export const GET_USER_APPLICANT_STATUS = "GET_USER_APPLICANT_STATUS";
export const GET_USER_APPLICANT_STATUS_SUCCESS =
  "GET_USER_APPLICANT_STATUS_SUCCESS";
export const GET_USER_APPLICANT_STATUS_FAILURE =
  "GET_USER_APPLICANT_STATUS_FAILURE";

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

export interface PatchFinalSubmit {
  type:
    | typeof PATCH_FIANL_SUBMIT
    | typeof PATCH_FIANL_SUBMIT_SUCCESS
    | typeof PATCH_FIANL_SUBMIT_FAILURE;
  payload: { accessToken: string };
}

export type MainActionTypes =
  | UserApplicantStatus
  | PatchFinalSubmit;

// actions
export const getUserApplicantStatus = (
  payload: UserApplicantStatusType
): MainActionTypes => ({
  payload,
  type: GET_USER_APPLICANT_STATUS
});

export const patchFinalSubmit = (payload: {
  accessToken: string;
}): MainActionTypes => ({
  payload,
  type: PATCH_FIANL_SUBMIT
});
