import { fork, put, call, takeLatest, all } from "redux-saga/effects";

import {
  SEND_AUTHENTICATION_NUMBER_BY_EMAIL,
  SEND_AUTHENTICATION_NUMBER_BY_EMAIL_SUCCESS,
  SEND_AUTHENTICATION_NUMBER_BY_EMAIL_FAILURS,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURS,
  GET_REGISTER_VERIFY_NUMBER,
  GET_REGISTER_VERIFY_NUMBER_SUCCESS,
  GET_REGISTER_VERIFY_NUMBER_FAILURS,
  AuthenticationNumberByEmail,
  RegisterVerifyNumber,
  SignUp
} from "../../actions/Authorization";
import {
  sendAuthenticationNumberByEmailApi,
  getRegisterVerifyNumberApi,
  signupApi
} from "../../../../lib/api";

function* sendAuthenticationNumberByEmail(action: AuthenticationNumberByEmail) {
  try {
    yield call(sendAuthenticationNumberByEmailApi, action.payload);
    yield put({ type: SEND_AUTHENTICATION_NUMBER_BY_EMAIL_SUCCESS });
  } catch (e) {
    yield put({ type: SEND_AUTHENTICATION_NUMBER_BY_EMAIL_FAILURS });
  }
}
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

function* watchSendAuthenticationNumberByEmail() {
  yield takeLatest(
    SEND_AUTHENTICATION_NUMBER_BY_EMAIL,
    sendAuthenticationNumberByEmail
  );
}
function* watchGetRegisterVerifyNumber() {
  yield takeLatest(GET_REGISTER_VERIFY_NUMBER, getRegisterVerifyNumber);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP, singUp);
}

export default function* authorizationSaga() {
  yield all([
    fork(watchSendAuthenticationNumberByEmail),
    fork(watchGetRegisterVerifyNumber),
    fork(watchSignUp)
  ]);
}
