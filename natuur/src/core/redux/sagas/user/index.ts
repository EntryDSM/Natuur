import { all, fork, takeLatest, put, call } from "redux-saga/effects";

import {
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURS,
  LogIn,
  LogOut
} from "../../actions/user";
import { getLoginApi, userLogOutApi } from "../../../../lib/api";

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
function* logOut(action: LogOut) {
  try {
    yield call(userLogOutApi, action.payload);
    yield put({ type: LOG_OUT_SUCCESS });
  } catch (e) {
    yield put({ type: LOG_OUT_FAILURS });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, getLogin);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT, logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchLogOut)]);
}
