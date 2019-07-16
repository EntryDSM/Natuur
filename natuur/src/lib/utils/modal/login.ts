export function loginEvent(
  getIsUpdatePopUp: () => void,
  updatePopUpCase: (popUpCase: string) => void,
  popUpCase: string
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
