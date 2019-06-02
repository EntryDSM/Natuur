import { all, fork, takeLatest, put, call } from "redux-saga/effects";

import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../../actions/user";
import { getLoginApi } from "../../../../lib/api";

function* getLogin() {
  try {
    const response = yield call(getLoginApi);
    yield put({ type: LOG_IN_SUCCESS, payload: response });
  } catch (e) {
    console.log(e);
    yield put({ type: LOG_IN_FAILURE, payload: e });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, getLogin);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
