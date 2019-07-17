import { all, fork, takeLatest, put, call } from "redux-saga/effects";

import {
  SendVerificationNumber,
  ResetApplicantPassword,
  ReSendApplicationPassword,
  SendApplicantPassword,
  SEND_VERIFICATION_NUMBER,
  SEND_VERIFICATION_NUMBER_SUCCESS,
  SEND_VERIFICATION_NUMBER_FAILURE,
  RESET_APPLICANT_PASSWORD,
  RESET_APPLICANT_PASSWORD_SUCCESS,
  RESET_APPLICANT_PASSWORD_FAILURE,
  RE_SEND_VERIFICATION_NUMBER,
  RE_SEND_VERIFICATION_NUMBER_SUCCESS,
  RE_SEND_VERIFICATION_NUMBER_FAILURE,
  SEND_APPLICANT_PASSWORD,
  SEND_APPLICANT_PASSWORD_SUCCESS,
  SEND_APPLICANT_PASSWORD_FAILURE
} from "../../actions/verification";
import {
  sendVerificationEmailApi,
  setApplicantPasswordApi,
  sendApplicantPasswordApi
} from "../../../../lib/api";

function* sendVerificationEmail(action: SendVerificationNumber) {
  try {
    yield call(sendVerificationEmailApi, action.payload);
    yield put({ type: SEND_VERIFICATION_NUMBER_SUCCESS });
  } catch (e) {
    yield put({ type: SEND_VERIFICATION_NUMBER_FAILURE });
  }
}

function* watchSendVerificationEmail() {
  yield takeLatest(SEND_VERIFICATION_NUMBER, sendVerificationEmail);
}

function* setApplicantPassword(action: ResetApplicantPassword) {
  try {
    yield call(setApplicantPasswordApi, action.payload);
    yield put({ type: RESET_APPLICANT_PASSWORD_SUCCESS });
  } catch (e) {
    yield put({ type: RESET_APPLICANT_PASSWORD_FAILURE });
  }
}

function* watchSetApplicantPassword() {
  yield takeLatest(RESET_APPLICANT_PASSWORD, setApplicantPassword);
}

function* reSendVerificationEmail(action: ReSendApplicationPassword) {
  try {
    yield call(sendVerificationEmailApi, action.payload);
    yield put({ type: RE_SEND_VERIFICATION_NUMBER_SUCCESS });
  } catch (e) {
    yield put({ type: RE_SEND_VERIFICATION_NUMBER_FAILURE });
  }
}

function* watchReSendVerificationEmail() {
  yield takeLatest(RE_SEND_VERIFICATION_NUMBER, reSendVerificationEmail);
}

function* sendApplicantVerification(action: SendApplicantPassword) {
  try {
    yield call(sendApplicantPasswordApi, action.payload);
    yield put({ type: SEND_APPLICANT_PASSWORD_SUCCESS });
  } catch (e) {
    yield put({ type: SEND_APPLICANT_PASSWORD_FAILURE });
  }
}

function* watchSendApplicantVerification() {
  yield takeLatest(SEND_APPLICANT_PASSWORD, sendApplicantVerification);
}

export default function* verificationSaga() {
  yield all([
    fork(watchSendVerificationEmail),
    fork(watchSetApplicantPassword),
    fork(watchSendApplicantVerification),
    fork(watchReSendVerificationEmail)
  ]);
}
