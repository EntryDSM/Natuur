import { combineReducers } from "redux";

import defaultReducer from "./default/defaultReducer";
import AuthorizationReducer from "./Authorization/AuthorizationReducer";
import userReducer from "./User/userReducer";
import popUpReducer from "./popup/popupReducer";
import verificationReducer from "./User/verificationReducer";
import writeNewPasswordReducer from "./User/writeNewPasswordReducer";
import sendApplicantPasswordReducer from "./User/sendApplicantPasswordReducer";

export default combineReducers({
  AuthorizationReducer,
  defaultReducer,
  userReducer,
  popUpReducer,
  verificationReducer,
  writeNewPasswordReducer,
  sendApplicantPasswordReducer
  // reducers
});
