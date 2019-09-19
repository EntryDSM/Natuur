import { all, fork, takeLatest, put, call } from "redux-saga/effects";

import {
  GET_DILIGENCE,
  GET_DILIGENCE_SUCCESS,
  GET_DILIGENCE_FAILURE,
  GET_GED_GRADE,
  GET_GED_GRADE_SUCCESS,
  GET_GED_GRADE_FAILURE,
  GET_GRADE,
  GET_GRADE_SUCCESS,
  GET_GRADE_FAILURE,
  PATCH_DILIGENCE,
  PATCH_DILIGENCE_SUCCESS,
  PATCH_DILIGENCE_FAILURE,
  PATCH_GED_GRADE,
  PATCH_GED_GRADE_SUCCESS,
  PATCH_GED_GRADE_FAILURE,
  PATCH_GRADE,
  PATCH_GRADE_SUCCESS,
  PATCH_GRADE_FAILURE,
  DiligenceApiType,
  GetDiligence,
  PatchDiligence,
  GedGradeApiType,
  GetGedGrade,
  PatchGedGrade,
  GradeApiType,
  GetGrade,
  PatchGrade
} from "../../actions/grade";
import {
  getUserDiligenceGradeApi,
  patchUserDiligenceGradeApi,
  getGedApplicantGradeApi,
  patchGedApplicantGradeApi,
  getApplicantGradeApi,
  patchApplicantGradeApi
} from "../../../../lib/api";
import { tokenRefresh } from "../token";

function* getUserDiligenceGrade(action: GetDiligence) {
  const { accessToken } = action.payload;
  try {
    const response: DiligenceApiType = yield call(getUserDiligenceGradeApi, {
      accessToken
    });
    yield put({ type: GET_DILIGENCE_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        getUserDiligenceGradeApi,
        { accessToken },
        GET_DILIGENCE_SUCCESS,
        GET_DILIGENCE_FAILURE
      );
    }
    yield put({ type: GET_DILIGENCE_FAILURE });
  }
}

function* watchGetUserDiligenceGrade() {
  yield takeLatest(GET_DILIGENCE, getUserDiligenceGrade);
}

function* patchUserDiligenceGrade(action: PatchDiligence) {
  try {
    const response: DiligenceApiType = yield call(
      patchUserDiligenceGradeApi,
      action.payload
    );
    yield put({ type: PATCH_DILIGENCE_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        patchUserDiligenceGradeApi,
        action.payload,
        PATCH_DILIGENCE_SUCCESS,
        PATCH_DILIGENCE_FAILURE
      );
    }
    yield put({ type: PATCH_DILIGENCE_FAILURE });
  }
}

function* watchPatchUserDiligenceGrade() {
  yield takeLatest(PATCH_DILIGENCE, patchUserDiligenceGrade);
}

function* getGedApplicantGrade(action: GetGedGrade) {
  const { accessToken } = action.payload;
  try {
    const response: GedGradeApiType = yield call(getGedApplicantGradeApi, {
      accessToken
    });
    yield put({ type: GET_GRADE_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        getGedApplicantGradeApi,
        { accessToken },
        GET_GRADE_SUCCESS,
        GET_GRADE_FAILURE
      );
    }
    yield put({ type: GET_GRADE_FAILURE });
  }
}

function* watchGetGedApplicantGrade() {
  yield takeLatest(GET_GRADE, getGedApplicantGrade);
}

function* patchGedApplicantGrade(action: PatchGedGrade) {
  try {
    const response: GedGradeApiType = yield call(
      patchGedApplicantGradeApi,
      action.payload
    );
    yield put({ type: PATCH_GRADE_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        patchGedApplicantGradeApi,
        action.payload,
        PATCH_GRADE_SUCCESS,
        PATCH_GRADE_FAILURE
      );
    }
    yield put({ type: PATCH_GRADE_FAILURE });
  }
}

function* watchPatchGedApplicantGrade() {
  yield takeLatest(PATCH_GRADE, patchGedApplicantGrade);
}

function* getApplicantGrade(action: GetGrade) {
  const { accessToken } = action.payload;
  try {
    const response: GradeApiType = yield call(getApplicantGradeApi, {
      accessToken
    });
    yield put({ type: GET_GED_GRADE_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        getApplicantGradeApi,
        { accessToken },
        GET_GED_GRADE_SUCCESS,
        GET_GED_GRADE_FAILURE
      );
    }
    yield put({ type: GET_GED_GRADE_FAILURE });
  }
}

function* watchGetApplicantGrade() {
  yield takeLatest(GET_GED_GRADE, getApplicantGrade);
}

function* patchApplicantGrade(action: PatchGrade) {
  try {
    const response: GradeApiType = yield call(
      patchApplicantGradeApi,
      action.payload
    );
    yield put({ type: PATCH_GED_GRADE_SUCCESS, payload: response });
  } catch (e) {
    if (e.response.status === 401) {
      yield tokenRefresh(
        patchApplicantGradeApi,
        action.payload,
        PATCH_GED_GRADE_SUCCESS,
        PATCH_GED_GRADE_FAILURE
      );
    }
    yield put({ type: PATCH_GED_GRADE_FAILURE });
  }
}

function* watchPatchApplicantGrade() {
  yield takeLatest(PATCH_GED_GRADE, patchApplicantGrade);
}

export default function* infoSaga() {
  yield all([
    fork(watchGetUserDiligenceGrade),
    fork(watchPatchUserDiligenceGrade),
    fork(watchGetGedApplicantGrade),
    fork(watchPatchGedApplicantGrade),
    fork(watchGetApplicantGrade),
    fork(watchPatchApplicantGrade)
  ]);
}
