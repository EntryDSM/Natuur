import { combineReducers } from "redux";

import defaultReducer from "./default/defaultReducer";
import AuthorizationReducer from "./Authorization/AuthorizationReducer";
import userReducer from "./User/userReducer";

export default combineReducers({
  AuthorizationReducer,
  defaultReducer,
  userReducer
  // reducers
});
