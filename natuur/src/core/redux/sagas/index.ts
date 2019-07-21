import { all, call } from "redux-saga/effects";

import user from "./user";
import verification from "./verification";
import main from "./main";

export default function* rootSaga() {
  yield all([call(user), call(verification), call(main)]);
}
