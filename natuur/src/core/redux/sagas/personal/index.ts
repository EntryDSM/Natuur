import { all, fork, takeLatest, call, put } from "redux-saga/effects";

import {
  SearchAddress,
  SearchSchool,
  SearchAddressApiType,
  ChangeApplicantPhoto,
  GetApplicantPhoto,
  SEARCH_ADDRESS,
  SEARCH_ADDRESS_SUCCESS,
  SEARCH_ADDRESS_FAILURE,
  SEARCH_SCHOOL,
  SEARCH_SCHOOL_SUCCESS,
  SEARCH_SCHOOL_FAILURE,
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
  getUserApplicantPhotoApi,
  getSchoolDataApi
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
    if (e.response.status === 401 || e.response.status === 422) {
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
  const { file } = action.payload;
  try {
    yield call(changeUserApplicantPhotoApi, action.payload);
    yield put({ type: PUT_APPLICANT_PHOTO_SUCCESS });
  } catch (e) {
    if (e.response.status === 401 || e.response.status === 422) {
      yield tokenRefresh(
        changeUserApplicantPhotoApi,
        { file },
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

    yield put({
      type: GET_APPLICANT_PHOTO_SUCCESS,
      payload: response
    });
  } catch (e) {
    if (e.response.status === 401 || e.response.status === 422) {
      yield tokenRefresh(
        getUserApplicantPhotoApi,
        {},
        GET_APPLICANT_PHOTO_SUCCESS,
        GET_APPLICANT_PHOTO_FAILURE
      );
    }
    yield put({ type: GET_APPLICANT_PHOTO_FAILURE });
  }
}

function* getSchoolData(action: SearchSchool) {
  const { accessToken, school } = action.payload;

  try {
    const response: Array<{ name: string; code: string }> = yield call(
      getSchoolDataApi,
      {
        accessToken,
        school
      }
    );
    yield put({
      type: SEARCH_SCHOOL_SUCCESS,
      payload: { schoolList: response }
    });
  } catch (e) {
    if (e.response.status === 401 || e.response.status === 422) {
      yield tokenRefresh(
        getSchoolDataApi,
        {
          school
        },
        SEARCH_SCHOOL_SUCCESS,
        SEARCH_SCHOOL_FAILURE
      );
    }
    yield put({ type: SEARCH_SCHOOL_FAILURE });
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
function* watchGetSchoolData() {
  yield takeLatest(SEARCH_SCHOOL, getSchoolData);
}

export default function* personalSaga() {
  yield all([
    fork(watchGetMapData),
    fork(watchChangeUserApplicantPhoto),
    fork(watchGetUserApplicantPhoto),
    fork(watchGetSchoolData)
  ]);
}
