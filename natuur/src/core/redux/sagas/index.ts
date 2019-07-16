import { all, call } from "redux-saga/effects";

import user from "./user";
import verification from "./verification";

export default function* rootSaga() {
  yield all([call(user), call(verification)]);
}
