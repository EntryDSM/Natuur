import { all, fork, takeLatest, call, put } from "redux-saga/effects";

import {
  GET_USER_APPLICANT_STATUS,
  GET_USER_APPLICANT_STATUS_SUCCESS,
  GET_USER_APPLICANT_STATUS_FAILURE,
  GET_USER_APPLICANT_INFOMATION,
  GET_USER_APPLICANT_INFOMATION_SUCCESS,
  GET_USER_APPLICANT_INFOMATION_FAILURE,
  PATCH_FIANL_SUBMIT,
  PATCH_FIANL_SUBMIT_FAILURE,
  PATCH_FIANL_SUBMIT_SUCCESS,
  UserApplicantStatus,
  UserApplicantInfo,
  PatchFinalSubmit,
  UserApplicantStatusApiType,
  UserApplicantInfoApiType
} from "../../actions/main";
import {
  getUserApplicationStatusApi,
  getUserApplicantInfoApi,
  patchFianlSubmitApi
} from "../../../../lib/api";
import { tokenRefresh } from "../token";

function* getUserApplicationStatus(action: UserApplicantStatus) {
  try {
    const response: UserApplicantStatusApiType = yield call(
      getUserApplicationStatusApi,
      action.payload
    );
    yield put({ type: GET_USER_APPLICANT_STATUS_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        getUserApplicationStatusApi,
        action.payload,
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

function* getUserApplicantInfo(action: UserApplicantInfo) {
  try {
    const response: UserApplicantInfoApiType = yield call(
      getUserApplicantInfoApi,
      action.payload
    );
    yield put({
      type: GET_USER_APPLICANT_INFOMATION_SUCCESS,
      payload: response
    });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        getUserApplicantInfoApi,
        action.payload,
        GET_USER_APPLICANT_INFOMATION_SUCCESS,
        GET_USER_APPLICANT_INFOMATION_FAILURE
      );
    }
    yield put({ type: GET_USER_APPLICANT_INFOMATION_FAILURE });
  }
}

function* watchGetUserApplicantInfo() {
  yield takeLatest(GET_USER_APPLICANT_INFOMATION, getUserApplicantInfo);
}

function* patchFinalSubmit(action: PatchFinalSubmit) {
  try {
    const response = yield call(patchFianlSubmitApi, action.payload);
    yield put({
      type: PATCH_FIANL_SUBMIT_SUCCESS,
      payload: response
    });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        patchFianlSubmitApi,
        action.payload,
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
  yield all([
    fork(watchGetUserApplicantStatus),
    fork(watchGetUserApplicantInfo),
    fork(watchPatchFinalSubmit)
  ]);
}
