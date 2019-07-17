export function loginEvent(
  getIsUpdatePopUp: () => void,
  updatePopUpCase: (popUpCase: "default" | "login" | "set" | "check") => void,
  popUpCase: "default" | "login" | "set" | "check"
): void {
  getIsUpdatePopUp();
  updatePopUpCase(popUpCase);
}

export function changeComponent(
  resetState: () => void,
  onClickEvent: () => void
) {
  onClickEvent();
  resetState();
}
