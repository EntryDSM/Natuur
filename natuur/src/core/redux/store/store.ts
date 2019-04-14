import { createStore } from "redux";

import reducers from "../reducer";

// redux mapState type
export type AppState = ReturnType<typeof reducers>;

const devtools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducers, devtools);
