import { RootState } from "../../reducer/default/defaultReducer";

// Types
export const UPDATE_TOASTR = "UPDATE_TOASTR";
export const REMOVE_TOASTR = "REMOVE_TOASTR";

export interface PayloadType {
  toastrState?: "info" | "errorState" | "success" | "warning";
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

export type DefaultActionTypes = UpdateToastr | RemoveToastr;

// Actions
export const updateToastr = (payload: PayloadType) => ({
  payload,
  type: UPDATE_TOASTR
});

export const removeToastr = (payload: number) => ({
  payload,
  type: REMOVE_TOASTR
});
