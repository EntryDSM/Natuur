import { combineReducers } from "redux";

import defaultReducer from "./default/defaultReducer";
import AuthorizationReducer from "./Authorization/AuthorizationReducer";

export default combineReducers({
  defaultReducer,
  AuthorizationReducer
  // reducers
});
