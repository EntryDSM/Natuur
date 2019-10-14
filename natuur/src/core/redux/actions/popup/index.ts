export const GET_IS_UPDATE_POPUP = "GET_IS_UPDATE_POPUP";
export const UPDATE_POPUP_CASE = "UPDATE_POPUP_CASE";
export const SHOW_POPUP = "SHOW_POPUP";

interface GetIsUpdatePopUp {
  type: typeof GET_IS_UPDATE_POPUP;
}
interface UpdatePopUpCase {
  type: typeof UPDATE_POPUP_CASE;
  payload: "default" | "login" | "set" | "check" | "pdf";
}

interface ShowPopUpCase {
  type: typeof SHOW_POPUP;
  payload: boolean;
}

export type PopUpActionTypes =
  | GetIsUpdatePopUp
  | UpdatePopUpCase
  | ShowPopUpCase
  | null;

export const getIsUpdatePopUp = (): PopUpActionTypes => ({
  type: GET_IS_UPDATE_POPUP
});

export const updatePopUpCase = (
  payload: "default" | "login" | "set" | "check" | "pdf"
): UpdatePopUpCase => ({
  payload,
  type: UPDATE_POPUP_CASE
});

export const showPopUpCase = (payload: boolean): PopUpActionTypes => ({
  payload,
  type: SHOW_POPUP
});
