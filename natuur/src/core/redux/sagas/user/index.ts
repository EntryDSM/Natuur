import { all, fork, takeLatest, put, call } from "redux-saga/effects";

import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LogIn
} from "../../actions/user";
import { getLoginApi } from "../../../../lib/api";

function* getLogin(action: LogIn) {
  try {
    const response: { access: string; refresh: string } = yield call(
      getLoginApi,
      action.payload
    );
    yield put({ type: LOG_IN_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: LOG_IN_FAILURE, payload: e });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, getLogin);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
