export interface ModalType {
  [key: string]: {
    component: SelectModalType;
    select: boolean;
  };
}
export type SelectModalType =
  | "EmailChecker"
  | "SendVerificationNumber"
  | "WriteVerificationNumber"
  | "WriteNewPassword";

export function changeSetNextPasswordModal(
  setModalObject: (modalCase: ModalType) => void,
  modalCase: ModalType,
  modalId: number
): void {
  setModalObject({
    ...modalCase,
    [modalId]: {
      ...modalCase[modalId],
      select: false
    },
    [modalId + 1]: {
      ...modalCase[modalId + 1],
      select: true
    }
  });
}

export function changeSetPrevPasswordModal(
  setModalObject: (modalCase: ModalType) => void,
  modalCase: ModalType,
  modalId: number
): void {
  setModalObject({
    ...modalCase,
    [modalId]: {
      ...modalCase[modalId],
      select: false
    },
    1: {
      ...modalCase[1],
      select: true
    }
  });
}

export function selectSetPasswordModal(modalCase: ModalType): SelectModalType {
  for (let elementCase = 1; elementCase <= 4; elementCase++) {
    if (modalCase[`${elementCase}`].select) {
      return modalCase[elementCase].component;
    }
  }
}
