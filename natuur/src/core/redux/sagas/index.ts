import { all, call } from "redux-saga/effects";

import user from "./user";
import verification from "./verification";
import main from "./main";
import authorization from "./authorization";
import personal from "./personal";
import info from "./info";
import intro from "./intro";
import grade from "./grade";
import tokenSaga from "./token";

export default function* rootSaga() {
  yield all([
    call(user),
    call(verification),
    call(main),
    call(authorization),
    call(personal),
    call(info),
    call(intro),
    call(grade),
    call(tokenSaga)
  ]);
}
