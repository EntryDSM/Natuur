// Types
export const GET_CLASSIFICATION = "GET_CLASSIFICATION";
export const GET_CLASSIFICATION_SUCCESS = "GET_CLASSIFICATION_SUCCESS";
export const GET_CLASSIFICATION_FAILURE = "GET_CLASSIFICATION_FAILURE";
export const PATCH_CLASSIFICATION = "PATCH_CLASSIFICATION";
export const PATCH_CLASSIFICATION_SUCCESS = "PATCH_CLASSIFICATION_SUCCESS";
export const PATCH_CLASSIFICATION_FAILURE = "PATCH_CLASSIFICATION_FAILURE";
export const SET_IS_GED = "SET_IS_GED";
export const SET_APPLY_TYPE = "SET_APPLY_TYPE";
export const SET_SELECT_REGION = "SET_SELECT_REGION";
export const SET_GRADUATION_CLASSFICATION = "SET_GRADUATION_CLASSFICATION";
export const SET_GRADUATED_YEAR = "SET_GRADUATED_YEAR";
export const SET_REMARKS = "SET_REMARKS";

export interface ClassifiationInfoApiType {
  is_ged?: boolean;
  apply_type?: string;
  social_detail_type?: string;
  graduated_year?: number;
  is_daejeon?: boolean;
  is_graduated?: boolean;
  additional_type?: string;
}
export interface GetClassificationInfoType extends ClassifiationInfoApiType {
  accessToken: string;
}
export interface GetClassificationInfo {
  type:
    | typeof GET_CLASSIFICATION
    | typeof GET_CLASSIFICATION_SUCCESS
    | typeof GET_CLASSIFICATION_FAILURE;
  payload: GetClassificationInfoType;
}

export interface PatchClassificationInfoType extends ClassifiationInfoApiType {
  accessToken: string;
}
export interface PatchClassificationInfo {
  type:
    | typeof PATCH_CLASSIFICATION
    | typeof PATCH_CLASSIFICATION_SUCCESS
    | typeof PATCH_CLASSIFICATION_FAILURE;
  payload: PatchClassificationInfoType;
}

export interface SetIsGed {
  type: typeof SET_IS_GED;
  payload: boolean;
}
export interface SetApplyType {
  type: typeof SET_APPLY_TYPE;
  payload: string;
}
export interface SetSelectRegion {
  type: typeof SET_SELECT_REGION;
  payload: string;
}
export interface SetGraduationClassifcation {
  type: typeof SET_GRADUATION_CLASSFICATION;
  payload: string;
}
export interface SetGraduationYear {
  type: typeof SET_GRADUATED_YEAR;
  payload: number;
}
export interface SetRemarks {
  type: typeof SET_REMARKS;
  payload: string;
}

export type InfoActionTypes =
  | GetClassificationInfo
  | PatchClassificationInfo
  | SetIsGed
  | SetApplyType
  | SetSelectRegion
  | SetGraduationClassifcation
  | SetGraduationYear
  | SetRemarks
  | null;

// actions
export const getClassificationInfo = (
  payload: GetClassificationInfoType
): InfoActionTypes => ({
  payload,
  type: GET_CLASSIFICATION
});

export const patchClassificationInfo = (
  payload: PatchClassificationInfoType
): InfoActionTypes => ({
  payload,
  type: PATCH_CLASSIFICATION
});

export const setIsGed = (payload: boolean): InfoActionTypes => ({
  payload,
  type: SET_IS_GED
});
export const setApplyType = (payload: string): InfoActionTypes => ({
  payload,
  type: SET_APPLY_TYPE
});
export const setSelectRegion = (payload: string): InfoActionTypes => ({
  payload,
  type: SET_SELECT_REGION
});
export const setGraduationClassification = (
  payload: string
): InfoActionTypes => ({
  payload,
  type: SET_GRADUATION_CLASSFICATION
});
export const setGraduationYear = (payload: number): InfoActionTypes => ({
  payload,
  type: SET_GRADUATED_YEAR
});
export const setRemark = (payload: string): InfoActionTypes => ({
  payload,
  type: SET_REMARKS
});
