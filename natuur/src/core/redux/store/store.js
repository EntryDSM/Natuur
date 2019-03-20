import { createStore } from "redux";

import reducer from "../reducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSTION__ &&
  window.__REDUX_DEVTOOLS_EXTENSTION__();

export const store = createStore(reducer, devtools);
