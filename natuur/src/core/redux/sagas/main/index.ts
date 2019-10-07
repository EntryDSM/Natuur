import { all, fork, takeLatest, call, put } from "redux-saga/effects";

import {
  GET_USER_APPLICANT_STATUS,
  GET_USER_APPLICANT_STATUS_SUCCESS,
  GET_USER_APPLICANT_STATUS_FAILURE,
  PATCH_FIANL_SUBMIT,
  PATCH_FIANL_SUBMIT_FAILURE,
  PATCH_FIANL_SUBMIT_SUCCESS,
  UserApplicantStatus,
  PatchFinalSubmit
} from "../../actions/main";
import {
  getUserApplicationStatusApi,
  patchFianlSubmitApi
} from "../../../../lib/api";
import { UserApplicantStatusApiType } from "../../../../lib/api/apiType";
import { tokenRefresh } from "../token";

function* getUserApplicationStatus(action: UserApplicantStatus) {
  try {
    const response: UserApplicantStatusApiType = yield call(
      getUserApplicationStatusApi,
      action.payload
    );
    yield put({ type: GET_USER_APPLICANT_STATUS_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401 || e.response.status === 422) {
      yield tokenRefresh(
        getUserApplicationStatusApi,
        {},
        GET_USER_APPLICANT_STATUS_SUCCESS,
        GET_USER_APPLICANT_STATUS_FAILURE
      );
    }
    yield put({ type: GET_USER_APPLICANT_STATUS_FAILURE });
  }
}

function* watchGetUserApplicantStatus() {
  yield takeLatest(GET_USER_APPLICANT_STATUS, getUserApplicationStatus);
}

function* patchFinalSubmit(action: PatchFinalSubmit) {
  try {
    const response = yield call(patchFianlSubmitApi, action.payload);
    yield put({
      type: PATCH_FIANL_SUBMIT_SUCCESS,
      payload: response
    });
  } catch (e) {
    if (e.response.status === 401 || e.response.status === 422) {
      yield tokenRefresh(
        patchFianlSubmitApi,
        {},
        PATCH_FIANL_SUBMIT_SUCCESS,
        PATCH_FIANL_SUBMIT_FAILURE
      );
    }
    yield put({ type: PATCH_FIANL_SUBMIT_FAILURE });
  }
}

function* watchPatchFinalSubmit() {
  yield takeLatest(PATCH_FIANL_SUBMIT, patchFinalSubmit);
}

export default function* mainSaga() {
  yield all([fork(watchGetUserApplicantStatus), fork(watchPatchFinalSubmit)]);
}
