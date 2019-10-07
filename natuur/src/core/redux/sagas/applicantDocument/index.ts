import { fork, put, call, takeLatest, all } from "redux-saga/effects";

import {
  GET_APPLICATION_DOCUMENT,
  GET_APPLICATION_DOCUMENT_SUCCESS,
  GET_APPLICATION_DOCUMENT_FAILURS,
  PUT_GED_DOCUMENT,
  PUT_GED_DOCUMENT_SUCCESS,
  PUT_GED_DOCUMENT_FAILURS,
  PUT_GRADUATED_DOCUMENT,
  PUT_GRADUATED_DOCUMENT_SUCCESS,
  PUT_GRADUATED_DOCUMENT_FAILURS,
  PUT_UNGRADUATED_DOCUMENT,
  PUT_UNGRADUATED_DOCUMENT_SUCCESS,
  PUT_UNGRADUATED_DOCUMENT_FAILURS,
  GetApplicationDocument,
  PutGedDocument,
  PutGraduaatedDocument,
  PutUnGraduaatedDocument
} from "../../actions/applicantDocument";
import {
  getApplicationDocumentApi,
  putGedApplicationDocumentApi,
  putGraduatedApplicationDocumentApi,
  putUnGraduatedApplicationDocumentApi
} from "../../../../lib/api";
import { GetApplicantDocumentApiType } from "../../../../lib/api/apiType";
import { tokenRefresh } from "../token";

function* getApplicationDocument(action: GetApplicationDocument) {
  try {
    const response: GetApplicantDocumentApiType = yield call(
      getApplicationDocumentApi,
      action.payload
    );
    yield put({ type: GET_APPLICATION_DOCUMENT_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401 || e.response.status === 422) {
      yield tokenRefresh(
        getApplicationDocumentApi,
        { putStatusCode: e.response.status },
        GET_APPLICATION_DOCUMENT_SUCCESS,
        GET_APPLICATION_DOCUMENT_FAILURS
      );
    }
    yield put({ type: GET_APPLICATION_DOCUMENT_FAILURS });
  }
}

function* putGedApplicationDocument(action: PutGedDocument) {
  try {
    yield call(putGedApplicationDocumentApi, action.payload);
    yield put({ type: PUT_GED_DOCUMENT_SUCCESS });
  } catch (e) {
    if (e.response.status === 401 || e.response.status === 422) {
      yield tokenRefresh(
        putGedApplicationDocumentApi,
        { putStatusCode: e.response.status },
        PUT_GED_DOCUMENT_SUCCESS,
        PUT_GED_DOCUMENT_FAILURS
      );
    }
    yield put({
      type: PUT_GED_DOCUMENT_FAILURS,
      payload: { putStatusCode: e.response.status }
    });
  }
}

function* putGraduatedApplicationDocument(action: PutGraduaatedDocument) {
  try {
    yield call(putGraduatedApplicationDocumentApi, action.payload);
    yield put({ type: PUT_GRADUATED_DOCUMENT_SUCCESS });
  } catch (e) {
    if (e.response.status === 401 || e.response.status === 422) {
      yield tokenRefresh(
        putGraduatedApplicationDocumentApi,
        { putStatusCode: e.response.status },
        PUT_GRADUATED_DOCUMENT_SUCCESS,
        PUT_GRADUATED_DOCUMENT_FAILURS
      );
    }
    yield put({
      type: PUT_GRADUATED_DOCUMENT_FAILURS,
      payload: { putStatusCode: e.response.status }
    });
  }
}

function* putUnGraduatedApplicationDocument(action: PutUnGraduaatedDocument) {
  try {
    yield call(putUnGraduatedApplicationDocumentApi, action.payload);
    yield put({ type: PUT_UNGRADUATED_DOCUMENT_SUCCESS });
  } catch (e) {
    if (e.response.status === 401 || e.response.status === 422) {
      yield tokenRefresh(
        putUnGraduatedApplicationDocumentApi,
        { putStatusCode: e.response.status },
        PUT_UNGRADUATED_DOCUMENT_SUCCESS,
        PUT_UNGRADUATED_DOCUMENT_FAILURS
      );
    }
    yield put({
      type: PUT_UNGRADUATED_DOCUMENT_FAILURS,
      payload: { putStatusCode: e.response.status }
    });
  }
}

function* watchGetApplicationDocument() {
  yield takeLatest(GET_APPLICATION_DOCUMENT, getApplicationDocument);
}

function* watchPutGedApplicationDocument() {
  yield takeLatest(PUT_GED_DOCUMENT, putGedApplicationDocument);
}

function* watchPutGraduatedApplicationDocument() {
  yield takeLatest(PUT_GRADUATED_DOCUMENT, putGraduatedApplicationDocument);
}

function* watchPutUnGraduatedApplicationDocument() {
  yield takeLatest(PUT_UNGRADUATED_DOCUMENT, putUnGraduatedApplicationDocument);
}

export default function* applicantDocumentSaga() {
  yield all([
    fork(watchGetApplicationDocument),
    fork(watchPutGedApplicationDocument),
    fork(watchPutGraduatedApplicationDocument),
    fork(watchPutUnGraduatedApplicationDocument)
  ]);
}
