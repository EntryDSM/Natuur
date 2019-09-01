import { all, fork, takeLatest, call, put } from "redux-saga/effects";

import {
  SearchAddress,
  SearchAddressApiType,
  GetApplicantInfo,
  GetApplicantInfoApiType,
  PatchApplicantInfo,
  ChangeApplicantPhoto,
  SEARCH_ADDRESS,
  SEARCH_ADDRESS_SUCCESS,
  SEARCH_ADDRESS_FAILURE,
  GET_APPLICANT_INFO,
  GET_APPLICANT_INFO_SUCCESS,
  GET_APPLICANT_INFO_FAILURE,
  PATCH_APPLICANT_INFO,
  PATCH_APPLICANT_INFO_SUCCESS,
  PATCH_APPLICANT_INFO_FAILURE,
  CHANGE_APPLICANT_PHOTO,
  CHANGE_APPLICANT_PHOTO_SUCCESS,
  CHANGE_APPLICANT_PHOTO_FAILURE
} from "../../actions/personal";
import { getMapDataApi } from "../../../../lib/api/kakao";
import {
  getUserApplicantInfoApi,
  patchUserApplicantInfoApi,
  changeUserApplicantPhotoApi
} from "../../../../lib/api";
import { tokenRefresh } from "../token";

function* getMapData(action: SearchAddress) {
  try {
    const response: SearchAddressApiType = yield call(
      getMapDataApi,
      action.payload
    );
    yield put({ type: SEARCH_ADDRESS_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        getMapDataApi,
        action.payload,
        SEARCH_ADDRESS_SUCCESS,
        SEARCH_ADDRESS_FAILURE
      );
    }
    yield put({ type: SEARCH_ADDRESS_FAILURE });
  }
}

function* getUserApplicantInfo(action: GetApplicantInfo) {
  try {
    const response: GetApplicantInfoApiType = yield call(
      getUserApplicantInfoApi,
      action.payload
    );
    yield put({ type: GET_APPLICANT_INFO_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        getUserApplicantInfoApi,
        action.payload,
        GET_APPLICANT_INFO_SUCCESS,
        GET_APPLICANT_INFO_FAILURE
      );
    }
    yield put({ type: GET_APPLICANT_INFO_FAILURE });
  }
}

function* patchUserApplicantInfo(action: PatchApplicantInfo) {
  try {
    yield call(
      patchUserApplicantInfoApi,
      action.payload.email,
      action.payload.accessToken,
      action.payload.payload
    );
    yield put({ type: PATCH_APPLICANT_INFO_SUCCESS });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        patchUserApplicantInfoApi,
        action.payload,
        PATCH_APPLICANT_INFO_SUCCESS,
        PATCH_APPLICANT_INFO_FAILURE
      );
    }
    yield put({ type: PATCH_APPLICANT_INFO_FAILURE });
  }
}

function* changeUserApplicantPhoto(action: ChangeApplicantPhoto) {
  try {
    yield call(
      changeUserApplicantPhotoApi,
      action.payload.email,
      action.payload.accessToken,
      action.payload.payload
    );
    yield put({ type: CHANGE_APPLICANT_PHOTO_SUCCESS });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        changeUserApplicantPhotoApi,
        action.payload,
        CHANGE_APPLICANT_PHOTO_SUCCESS,
        CHANGE_APPLICANT_PHOTO_FAILURE
      );
    }
    yield put({ type: CHANGE_APPLICANT_PHOTO_FAILURE });
  }
}

function* watchGetMapData() {
  yield takeLatest(SEARCH_ADDRESS, getMapData);
}
function* watchGetUserApplicantInfo() {
  yield takeLatest(GET_APPLICANT_INFO, getUserApplicantInfo);
}
function* watchPatchUserApplicantInfo() {
  yield takeLatest(PATCH_APPLICANT_INFO, patchUserApplicantInfo);
}
function* watchChangeUserApplicantPhoto() {
  yield takeLatest(CHANGE_APPLICANT_PHOTO, changeUserApplicantPhoto);
}

export default function* personalSaga() {
  yield all([
    fork(watchGetMapData),
    fork(watchGetUserApplicantInfo),
    fork(watchPatchUserApplicantInfo),
    fork(watchChangeUserApplicantPhoto)
  ]);
}
