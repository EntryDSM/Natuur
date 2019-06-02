// reducerState
export interface RootState {
  toastrInformations: PayloadType[];
}

// Types
export const UPDATE_TOASTR = "UPDATE_TOASTR";
export const REMOVE_TOASTR = "REMOVE_TOASTR";
export const TURN_OFF_TOASTR = "TURN_OFF_TOASTR";

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

interface TurnOffToastr {
  type: string;
  payload: PayloadType;
}

export type DefaultActionTypes =
  | UpdateToastr
  | RemoveToastr
  | TurnOffToastr
  | null;

// Actions
export const updateToastr = (payload: RootState) => ({
  payload,
  type: UPDATE_TOASTR
});

export const removeToastr = () => ({
  type: REMOVE_TOASTR
});

export const turnOffToastr = (payload: number) => ({
  payload,
  type: TURN_OFF_TOASTR
});
