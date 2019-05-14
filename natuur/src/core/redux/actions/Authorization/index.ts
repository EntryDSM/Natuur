// reducerState
export interface RootState {
  userEmail: string;
  userPassword: string;
  userPasswordCheck: string;
}

// Types
export const UPDATE_USER_EMAIL = "UPDATE_USER_EMAIL";
export const UPDATE_USER_PASSWORD = "UPDATE_USER_PASSWORD";
export const UPDATE_USER_PASSWORD_CHECK = "UPDATE_USER_PASSWORD_CHECK";

interface UpdateUserEmail {
  type: string;
  payload: string;
}

interface UpdateUserPassword {
  type: string;
  payload: string;
}

interface UpdateUserPasswordCheck {
  type: string;
  payload: string;
}

export type AuthorizationTypes =
  | UpdateUserEmail
  | UpdateUserPassword
  | UpdateUserPasswordCheck
  | null;

// Actions
export const updateUserEmail = (payload: string) => ({
  type: UPDATE_USER_EMAIL,
  payload
});

export const updateUserPassword = (payload: string) => ({
  type: UPDATE_USER_PASSWORD,
  payload
});

export const updateUserPasswordCheck = (payload: string) => ({
  type: UPDATE_USER_PASSWORD_CHECK,
  payload
});
