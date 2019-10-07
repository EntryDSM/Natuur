import { all, call } from "redux-saga/effects";

import user from "./user";
import verification from "./verification";
import main from "./main";
import authorization from "./authorization";
import personal from "./personal";
import tokenSaga from "./token";
import applicantDocument from "./applicantDocument";

export default function* rootSaga() {
  yield all([
    call(user),
    call(verification),
    call(main),
    call(authorization),
    call(personal),
    call(tokenSaga),
    call(applicantDocument)
  ]);
}
