import { createStore, applyMiddleware } from "redux";
import reduxSaga from "redux-saga";

import reducer from "../reducer";
import sagas from "../sagas";

// saga
const sagaMiddleWare = reduxSaga();

// redux mapState type
export type AppState = ReturnType<typeof reducer>;

const devtools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  reducer,
  devtools,
  applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(sagas);
