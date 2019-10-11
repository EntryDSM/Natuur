import {
  REFRESH_JWT,
  REFRESH_JWT_SUCCESS,
  REFRESH_JWT_FAILURS
} from "../../actions/user";
import { refreshJWTApi } from "../../../../lib/api";

import { all, call, put, select, takeLatest, fork } from "redux-saga/effects";

function* requsetApi(api, payload, successType, failureType) {
  try {
    const response = yield call(api, payload);
    yield put({ type: successType, payload: response });
  } catch (e) {
    yield put({ type: failureType, payload: e.response.status });
  }
}

export function* tokenRefresh(api, payload, successType, failureType) {
  const refreshToken = yield select(state => state.userReducer.refreshToken);

  try {
    const response = yield call(refreshJWTApi, { refreshToken });
    yield put({
      type: REFRESH_JWT_SUCCESS,
      payload: { access: response.access }
    });
    yield requsetApi(
      api,
      { accessToken: response.access, ...payload },
      successType,
      failureType
    );
  } catch (e) {
    yield put({
      type: REFRESH_JWT_FAILURS,
      payload: { errorRefreshStatus: e.response.status }
    });
  }
}

function* watchTokenRefresh() {
  yield takeLatest(REFRESH_JWT, yield tokenRefresh);
}

export default function* tokenSaga() {
  yield all([fork(watchTokenRefresh)]);
}
