import { all, fork, takeLatest, put, call } from "redux-saga/effects";

import {
  GET_DOCUMENT,
  GET_DOCUMENT_FAILURE,
  GET_DOCUMENT_SUCCESS,
  PATCH_DOCUMENT,
  PATCH_DOCUMENT_FAILURE,
  PATCH_DOCUMENT_SUCCESS,
  GetDocument,
  PatchDocument,
  DocumentApiType
} from "../../actions/intro";
import { getUserDocumentApi, patchUserDocumentApi } from "../../../../lib/api";

function* getUserDocument(action: GetDocument) {
  try {
    const response: DocumentApiType = yield call(
      getUserDocumentApi,
      action.payload
    );
    yield put({ type: GET_DOCUMENT_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: GET_DOCUMENT_FAILURE });
  }
}

function* watchGetUserDocument() {
  yield takeLatest(GET_DOCUMENT, getUserDocument);
}

function* patchUserDocument(action: PatchDocument) {
  try {
    yield call(patchUserDocumentApi, action.payload);
    yield put({ type: PATCH_DOCUMENT_SUCCESS });
  } catch (e) {
    yield put({ type: PATCH_DOCUMENT_FAILURE });
  }
}

function* watchPatchUserDocument() {
  yield takeLatest(PATCH_DOCUMENT, patchUserDocument);
}

export default function* introSaga() {
  yield all([fork(watchGetUserDocument), fork(watchPatchUserDocument)]);
}
