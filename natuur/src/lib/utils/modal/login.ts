export function updatePopUp(
  getIsUpdatePopUp: () => void,
  updatePopUpCase: (
    popUpCase: "default" | "login" | "set" | "check" | "pdf" | "finalSubmit"
  ) => void,
  popUpCase: "default" | "login" | "set" | "check" | "pdf" | "finalSubmit"
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
