import React, { FC, useCallback } from "react";

import {
  AcceptButtonComponent,
  ButtonCover,
  ButtonArrow,
  ButtonText
} from "../../../styles/default";

interface Props {
  updateToastr(toastrInformation: object): void;
}

const AcceptDisableButton: FC<Props> = ({ updateToastr }) => {
  const createToastr = useCallback(() => {
    updateToastr({
      timer: 5,
      toastrMessage: "개인정보를 입력해주세요.",
      toastrState: "warning"
    });
  },                               []);

  return (
    <AcceptButtonComponent>
      <ButtonCover onClick={createToastr} as="button" isDisable next>
        <ButtonArrow>〉</ButtonArrow>
        <ButtonText>인증하기</ButtonText>
      </ButtonCover>
    </AcceptButtonComponent>
  );
};

export default AcceptDisableButton;
