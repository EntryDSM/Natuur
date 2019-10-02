import { RootState } from "../../reducer/default/defaultReducer";

// Types
export const UPDATE_TOASTR = "UPDATE_TOASTR";
export const REMOVE_TOASTR = "REMOVE_TOASTR";
export const SET_IS_OPEN = "SET_IS_OPEN";

export interface PayloadType {
  toastrState?: string;
  toastrTitle?: string;
  toastrMessage?: string;
  timer?: number;
  id?: number;
}

interface UpdateToastr {
  type: typeof UPDATE_TOASTR;
  payload: PayloadType;
}

interface RemoveToastr {
  type: typeof REMOVE_TOASTR;
  payload: PayloadType;
}

interface SetIsOpen {
  type: typeof SET_IS_OPEN;
  payload: {
    pageName: "info" | "personal" | "grade" | "intro";
    isOpen: boolean;
  };
}

export type DefaultActionTypes = UpdateToastr | RemoveToastr | SetIsOpen;

// Actions
export const updateToastr = (payload: RootState) => ({
  payload,
  type: UPDATE_TOASTR
});

export const removeToastr = (payload: number) => ({
  payload,
  type: REMOVE_TOASTR
});

export const setIsOpen = (payload: {
  pageName: "info" | "personal" | "grade" | "intro";
  isOpen: boolean;
}) => ({
  payload,
  type: SET_IS_OPEN
});
