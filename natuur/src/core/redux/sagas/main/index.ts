import { all, fork, takeLatest, call, put } from "redux-saga/effects";

import {
  GET_USER_APPLICANT_STATUS,
  GET_USER_APPLICANT_STATUS_SUCCESS,
  GET_USER_APPLICANT_STATUS_FAILURE,
  UserApplicantStatus,
  UserApplicantStatusType
} from "../../actions/main";
import { getUserApplicationStatusApi } from "../../../../lib/api";

function* getUserApplicationStatus(action: UserApplicantStatus) {
  try {
    const response: UserApplicantStatusType = yield call(
      getUserApplicationStatusApi,
      action.payload
    );
    yield put({ type: GET_USER_APPLICANT_STATUS_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: GET_USER_APPLICANT_STATUS_FAILURE });
  }
}

function* watchGetUserApplicantStatus() {
  yield takeLatest(GET_USER_APPLICANT_STATUS, getUserApplicationStatus);
}

export default function* mainSaga() {
  yield all([fork(watchGetUserApplicantStatus)]);
}
