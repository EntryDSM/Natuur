import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxSaga from "redux-saga";

import reducer from "../reducer";
import sagas from "../sagas";

// saga
const sagaMiddleWare = reduxSaga();

// redux mapState type
export type AppState = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(sagas);
