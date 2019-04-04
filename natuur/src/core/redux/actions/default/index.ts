// reducerState
export interface RootState {
  container: string;
}

// Types
export const UPDATE_APP_CONTAINER = "UPDATE_APP_CONTAINER";

interface UpdateAppContainer {
  type: string;
  payload: object;
}

export type DefaultActionTypes = UpdateAppContainer | null; // 이런식으로 다중으로 넣음.

// Actions
export const updateAppContainer = (payload: RootState) => ({
  type: UPDATE_APP_CONTAINER,
  payload
});
