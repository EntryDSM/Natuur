import {
  GetApplicantDocumentApiType,
  GedApplicationApiType,
  GraduatedApplicationApiType,
  UnGraduatedApplicationApiType
} from "../../../../lib/api/apiType";

export const GET_APPLICATION_DOCUMENT = "GET_APPLICATION_DOCUMENT";
export const GET_APPLICATION_DOCUMENT_SUCCESS =
  "GET_APPLICATION_DOCUMENT_SUCCESS";
export const GET_APPLICATION_DOCUMENT_FAILURS =
  "GET_APPLICATION_DOCUMENT_FAILURS";
export const PUT_GED_DOCUMENT = "GET_GED_DOCUMENT";
export const PUT_GED_DOCUMENT_SUCCESS = "GET_GED_DOCUMENT_SUCCESS";
export const PUT_GED_DOCUMENT_FAILURS = "GET_GED_DOCUMENT_FAILURS";
export const PUT_GRADUATED_DOCUMENT = "PUT_GRADUATED_DOCUMENT";
export const PUT_GRADUATED_DOCUMENT_SUCCESS = "PUT_GRADUATED_DOCUMENT_SUCCESS";
export const PUT_GRADUATED_DOCUMENT_FAILURS = "PUT_GRADUATED_DOCUMENT_FAILURS";
export const PUT_UNGRADUATED_DOCUMENT = "PUT_UNGRADUATED_DOCUMENT";
export const PUT_UNGRADUATED_DOCUMENT_SUCCESS =
  "PUT_UNGRADUATED_DOCUMENT_SUCCESS";
export const PUT_UNGRADUATED_DOCUMENT_FAILURS =
  "PUT_UNGRADUATED_DOCUMENT_FAILURS";

export interface GetApplicationDocument {
  type:
    | typeof GET_APPLICATION_DOCUMENT
    | typeof GET_APPLICATION_DOCUMENT_SUCCESS
    | typeof GET_APPLICATION_DOCUMENT_FAILURS;
  payload: { accessToken: string } & Partial<GetApplicantDocumentApiType>;
}

export interface PutGedDocument {
  type:
    | typeof PUT_GED_DOCUMENT
    | typeof PUT_GED_DOCUMENT_SUCCESS
    | typeof PUT_GED_DOCUMENT_FAILURS;
  payload: {
    accessToken: string;
    putStatusCode?: number;
  } & GedApplicationApiType;
}

export interface PutGraduaatedDocument {
  type:
    | typeof PUT_GRADUATED_DOCUMENT
    | typeof PUT_GRADUATED_DOCUMENT_SUCCESS
    | typeof PUT_GRADUATED_DOCUMENT_FAILURS;
  payload: {
    accessToken: string;
    putStatusCode?: number;
  } & GraduatedApplicationApiType;
}

export interface PutUnGraduaatedDocument {
  type:
    | typeof PUT_UNGRADUATED_DOCUMENT
    | typeof PUT_UNGRADUATED_DOCUMENT_SUCCESS
    | typeof PUT_UNGRADUATED_DOCUMENT_FAILURS;
  payload: {
    accessToken: string;
    putStatusCode?: number;
  } & UnGraduatedApplicationApiType;
}

export type ApplicantDocumentActionTypes =
  | GetApplicationDocument
  | PutGedDocument
  | PutGraduaatedDocument
  | PutUnGraduaatedDocument;

export const getApplicationDocument = (payload: {
  accessToken: string;
}): ApplicantDocumentActionTypes => ({
  payload,
  type: GET_APPLICATION_DOCUMENT
});

export const putGedDocument = (
  payload: {
    accessToken: string;
  } & GedApplicationApiType
): ApplicantDocumentActionTypes => ({
  payload,
  type: PUT_GED_DOCUMENT
});

export const putGraduaatedDocument = (
  payload: {
    accessToken: string;
  } & GraduatedApplicationApiType
): ApplicantDocumentActionTypes => ({
  payload,
  type: PUT_GRADUATED_DOCUMENT
});

export const putUnGraduaatedDocument = (
  payload: {
    accessToken: string;
  } & UnGraduatedApplicationApiType
): ApplicantDocumentActionTypes => ({
  payload,
  type: PUT_UNGRADUATED_DOCUMENT
});
