import { all, fork, takeLatest, call, put } from "redux-saga/effects";

import {
  GET_CALUCULATED_SCORE,
  GET_CALUCULATED_SCORE_SUCCESS,
  GET_CALUCULATED_SCORE_FAILURE,
  GetCalculatedScore
} from "../../actions/print";
import { getCalculatedScoresApi } from "../../../../lib/api";
import { GetCalculatedScoreApiType } from "../../../../lib/api/apiType";
import { tokenRefresh } from "../token";

function* getCaluculatedScore(action: GetCalculatedScore) {
  const { accessToken } = action.payload;

  try {
    const response: GetCalculatedScoreApiType = yield call(
      getCalculatedScoresApi,
      { accessToken }
    );
    yield put({
      type: GET_CALUCULATED_SCORE_SUCCESS,
      payload: { calculatedScore: response }
    });
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 422) {
      yield tokenRefresh(
        getCalculatedScoresApi,
        {},
        GET_CALUCULATED_SCORE_SUCCESS,
        GET_CALUCULATED_SCORE_FAILURE
      );
    }
    yield put({
      type: GET_CALUCULATED_SCORE_FAILURE,
      payload: { caluculatedScoreStatus: error.response.status }
    });
  }
}

function* watchGetCaluculatedScore() {
  yield takeLatest(GET_CALUCULATED_SCORE, getCaluculatedScore);
}

export default function* printSaga() {
  yield all([fork(watchGetCaluculatedScore)]);
}
