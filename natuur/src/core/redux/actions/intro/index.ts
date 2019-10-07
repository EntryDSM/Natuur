export const GET_DOCUMENT = "GET_DOCUMENT";
export const GET_DOCUMENT_SUCCESS = "GET_DOCUMENT_SUCCESS";
export const GET_DOCUMENT_FAILURE = "GET_DOCUMENT_FAILURE";
export const PATCH_DOCUMENT = "PATCH_DOCUMENT";
export const PATCH_DOCUMENT_SUCCESS = "PATCH_DOCUMENT_SUCCESS";
export const PATCH_DOCUMENT_FAILURE = "PATCH_DOCUMENT_FAILURE";
export const SET_SELF_INTRODUCTION = "SET_SELF_INTRODUCTION";
export const SET_STUDY_PLAN = "SET_STUDY_PLAN";

export interface DocumentApiType {
  self_introduction_text?: string;
  study_plan_text?: string;
}
export interface GetDocumentType extends DocumentApiType {
  accessToken: string;
}
export interface PatchDocumentType extends DocumentApiType {
  accessToken: string;
}

export interface GetDocument {
  type:
    | typeof GET_DOCUMENT
    | typeof GET_DOCUMENT_SUCCESS
    | typeof GET_DOCUMENT_FAILURE;
  payload: GetDocumentType;
}
export interface PatchDocument {
  type:
    | typeof PATCH_DOCUMENT
    | typeof PATCH_DOCUMENT_SUCCESS
    | typeof PATCH_DOCUMENT_FAILURE;
  payload: PatchDocumentType;
}
export interface SetIntroduction {
  type: typeof SET_SELF_INTRODUCTION;
  payload: { text: string };
}
export interface SetStudyPlan {
  type: typeof SET_STUDY_PLAN;
  payload: { text: string };
}

export type introActionTypes =
  | GetDocument
  | PatchDocument
  | SetIntroduction
  | SetStudyPlan;

export const getDocument = (payload: GetDocumentType): introActionTypes => ({
  payload,
  type: GET_DOCUMENT
});

export const patchDocument = (
  payload: PatchDocumentType
): introActionTypes => ({
  payload,
  type: PATCH_DOCUMENT
});

export const setSelfIntroduction = (payload: {
  text: string;
}): introActionTypes => ({
  payload,
  type: SET_SELF_INTRODUCTION
});

export const setStudyPlan = (payload: { text: string }): introActionTypes => ({
  payload,
  type: SET_STUDY_PLAN
});
