import { all, fork, takeLatest, put, call } from "redux-saga/effects";

import {
  GET_CLASSIFICATION,
  GET_CLASSIFICATION_SUCCESS,
  GET_CLASSIFICATION_FAILURE,
  PATCH_CLASSIFICATION,
  PATCH_CLASSIFICATION_SUCCESS,
  PATCH_CLASSIFICATION_FAILURE,
  GetClassificationInfo,
  ClassifiationInfoApiType,
  PatchClassificationInfo
} from "../../actions/info";
import {
  getClassificationInfoApi,
  patchClassificationInfoApi
} from "../../../../lib/api";
import { tokenRefresh } from "../token";

function* getClassificationInfo(action: GetClassificationInfo) {
  try {
    const response: ClassifiationInfoApiType = yield call(
      getClassificationInfoApi,
      action.payload.accessToken
    );
    yield put({ type: GET_CLASSIFICATION_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        getClassificationInfoApi,
        action.payload,
        GET_CLASSIFICATION_SUCCESS,
        GET_CLASSIFICATION_FAILURE
      );
    }
    yield put({ type: GET_CLASSIFICATION_FAILURE });
  }
}

function* watchGetClassificationInfo() {
  yield takeLatest(GET_CLASSIFICATION, getClassificationInfo);
}

function* patchClassificationInfo(action: PatchClassificationInfo) {
  const {
    is_ged,
    apply_type,
    social_detail_type,
    is_daejeon,
    is_graduated,
    additional_type
  } = action.payload;
  try {
    yield call(patchClassificationInfoApi, action.payload.accessToken, {
      is_ged,
      apply_type,
      social_detail_type,
      is_daejeon,
      is_graduated,
      additional_type
    });
    yield put({ type: PATCH_CLASSIFICATION_SUCCESS });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        patchClassificationInfoApi,
        action.payload,
        PATCH_CLASSIFICATION_SUCCESS,
        PATCH_CLASSIFICATION_FAILURE
      );
    }
    yield put({ type: PATCH_CLASSIFICATION_FAILURE });
  }
}

function* watchPatchClassificationInfo() {
  yield takeLatest(PATCH_CLASSIFICATION, patchClassificationInfo);
}

export default function* infoSaga() {
  yield all([
    fork(watchGetClassificationInfo),
    fork(watchPatchClassificationInfo)
  ]);
}
