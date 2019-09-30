import { fork, put, call, takeLatest, all } from "redux-saga/effects";

import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURS,
  GET_REGISTER_VERIFY_NUMBER,
  GET_REGISTER_VERIFY_NUMBER_SUCCESS,
  GET_REGISTER_VERIFY_NUMBER_FAILURS,
  RegisterVerifyNumber,
  SignUp
} from "../../actions/Authorization";
import { getRegisterVerifyNumberApi, signupApi } from "../../../../lib/api";

function* getRegisterVerifyNumber(action: RegisterVerifyNumber) {
  try {
    yield call(getRegisterVerifyNumberApi, action.payload);
    yield put({ type: GET_REGISTER_VERIFY_NUMBER_SUCCESS });
  } catch (e) {
    yield put({ type: GET_REGISTER_VERIFY_NUMBER_FAILURS });
  }
}
function* singUp(action: SignUp) {
  try {
    yield call(signupApi, action.payload);
    yield put({ type: SIGN_UP_SUCCESS });
  } catch (e) {
    yield put({ type: SIGN_UP_FAILURS });
  }
}

function* watchGetRegisterVerifyNumber() {
  yield takeLatest(GET_REGISTER_VERIFY_NUMBER, getRegisterVerifyNumber);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP, singUp);
}

export default function* authorizationSaga() {
  yield all([fork(watchGetRegisterVerifyNumber), fork(watchSignUp)]);
}
