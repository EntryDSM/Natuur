export const GET_IS_UPDATE_POPUP = "GET_IS_UPDATE_POPUP";
export const UPDATE_POPUP_CASE = "UPDATE_POPUP_CASE";

interface GetIsUpdatePopUp {
  type: string;
  payload?: null;
}
interface UpdatePopUpCase {
  type: string;
  payload: "default" | "login" | "set" | "check";
}

export type PopUpActionTypes = GetIsUpdatePopUp | UpdatePopUpCase | null;

export const getIsUpdatePopUp = (): PopUpActionTypes => ({
  type: GET_IS_UPDATE_POPUP
});

export const updatePopUpCase = (
  payload: "default" | "login" | "set" | "check"
): UpdatePopUpCase => ({
  payload,
  type: UPDATE_POPUP_CASE
});
