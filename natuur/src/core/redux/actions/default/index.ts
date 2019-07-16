import { RootState } from "../../reducer/default/defaultReducer";

// Types
export const UPDATE_TOASTR = "UPDATE_TOASTR";
export const REMOVE_TOASTR = "REMOVE_TOASTR";

export interface PayloadType {
  toastrState?: string;
  toastrTitle?: string;
  toastrMessage?: string;
  timer?: number;
  id?: number;
}

interface UpdateToastr {
  type: string;
  payload: PayloadType;
}

interface RemoveToastr {
  type: string;
  payload: PayloadType;
}

export type DefaultActionTypes = UpdateToastr | RemoveToastr | null;

// Actions
export const updateToastr = (payload: RootState) => ({
  payload,
  type: UPDATE_TOASTR
});

export const removeToastr = (payload: number) => ({
  payload,
  type: REMOVE_TOASTR
});
