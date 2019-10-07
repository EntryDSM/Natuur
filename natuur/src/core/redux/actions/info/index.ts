// Types
export const SET_IS_GED = "SET_IS_GED";
export const SET_APPLY_TYPE = "SET_APPLY_TYPE";
export const SET_SELECT_REGION = "SET_SELECT_REGION";
export const SET_GRADUATION_CLASSFICATION = "SET_GRADUATION_CLASSFICATION";
export const SET_GRADUATED_YEAR = "SET_GRADUATED_YEAR";
export const SET_REMARKS = "SET_REMARKS";

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
  payload: string;
}
export interface SetRemarks {
  type: typeof SET_REMARKS;
  payload: string;
}

export type InfoActionTypes =
  | SetIsGed
  | SetApplyType
  | SetSelectRegion
  | SetGraduationClassifcation
  | SetGraduationYear
  | SetRemarks
  | null;

// actions
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
export const setGraduationYear = (payload: string): InfoActionTypes => ({
  payload,
  type: SET_GRADUATED_YEAR
});
export const setRemark = (payload: string): InfoActionTypes => ({
  payload,
  type: SET_REMARKS
});
