import { createStore } from "redux";

import reducers from "../reducer";

const devtools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducers, devtools);
