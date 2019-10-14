export function updatePopUp(
  getIsUpdatePopUp: () => void,
  updatePopUpCase: (
    popUpCase: "default" | "login" | "set" | "check" | "pdf"
  ) => void,
  popUpCase: "default" | "login" | "set" | "check" | "pdf"
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
