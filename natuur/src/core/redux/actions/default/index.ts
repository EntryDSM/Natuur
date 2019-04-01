// reducerState
export interface DefaultState {
  container: string;
}

// Types
export const UPDATE_APP_CONTAINER = "UPDATE_APP_CONTAINER";

interface UpdateAppContainer {
  type: typeof UPDATE_APP_CONTAINER;
  container: DefaultState;
}

export type DefaultActionTypes = UpdateAppContainer | null; // 이런식으로 다중으로 넣음.

// Actions
export const updateAppContainer = (container: DefaultState) => ({
  type: UPDATE_APP_CONTAINER,
  container
});
