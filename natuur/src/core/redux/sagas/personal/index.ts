import { all, fork, takeLatest, call, put } from "redux-saga/effects";

import {
  SearchAddress,
  SearchAddressApiType,
  ChangeApplicantPhoto,
  GetApplicantPhoto,
  SEARCH_ADDRESS,
  SEARCH_ADDRESS_SUCCESS,
  SEARCH_ADDRESS_FAILURE,
  PUT_APPLICANT_PHOTO,
  PUT_APPLICANT_PHOTO_SUCCESS,
  PUT_APPLICANT_PHOTO_FAILURE,
  GET_APPLICANT_PHOTO,
  GET_APPLICANT_PHOTO_SUCCESS,
  GET_APPLICANT_PHOTO_FAILURE
} from "../../actions/personal";
import { getMapDataApi } from "../../../../lib/api/kakao";
import {
  changeUserApplicantPhotoApi,
  getUserApplicantPhotoApi
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

function* changeUserApplicantPhoto(action: ChangeApplicantPhoto) {
  try {
    yield call(
      changeUserApplicantPhotoApi,
      action.payload.accessToken,
      action.payload.payload
    );
    yield put({ type: PUT_APPLICANT_PHOTO_SUCCESS });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        changeUserApplicantPhotoApi,
        action.payload,
        PUT_APPLICANT_PHOTO_SUCCESS,
        PUT_APPLICANT_PHOTO_FAILURE
      );
    }
    yield put({ type: PUT_APPLICANT_PHOTO_FAILURE });
  }
}

function* getUserApplicantPhoto(action: GetApplicantPhoto) {
  const { accessToken } = action.payload;

  try {
    const response: Blob = yield call(getUserApplicantPhotoApi, {
      accessToken
    });
    yield put({ type: GET_APPLICANT_PHOTO_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        getUserApplicantPhotoApi,
        { accessToken },
        GET_APPLICANT_PHOTO_SUCCESS,
        GET_APPLICANT_PHOTO_FAILURE
      );
    }
    yield put({ type: GET_APPLICANT_PHOTO_FAILURE });
  }
}

function* watchGetMapData() {
  yield takeLatest(SEARCH_ADDRESS, getMapData);
}
function* watchChangeUserApplicantPhoto() {
  yield takeLatest(PUT_APPLICANT_PHOTO, changeUserApplicantPhoto);
}
function* watchGetUserApplicantPhoto() {
  yield takeLatest(GET_APPLICANT_PHOTO, getUserApplicantPhoto);
}

export default function* personalSaga() {
  yield all([
    fork(watchGetMapData),
    fork(watchChangeUserApplicantPhoto),
    fork(watchGetUserApplicantPhoto)
  ]);
}
