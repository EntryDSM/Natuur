import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxSaga from "redux-saga";

import reducer from "../reducer";
import sagas from "../sagas";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state: AppState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {}
};

const persistedState = loadState();

// saga
const sagaMiddleWare = reduxSaga();

// redux mapState type
export type AppState = ReturnType<typeof reducer>;

export const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(sagaMiddleWare)
  // composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

store.subscribe(() => {
  saveState({
    ...store.getState()
  });
});

sagaMiddleWare.run(sagas);
