import React, { FC, useCallback } from "react";

import {
  AcceptButtonComponent,
  ButtonCover,
  ButtonArrow,
  ButtonText
} from "../../../styles/default";

interface Props {
  updateToastr(toastrInformation: {
    toastrState?: "info" | "errorState" | "success" | "warning";
    toastrTitle?: string;
    toastrMessage?: string;
    timer?: number;
    id?: number;
  }): void;
}

const AcceptDisableButton: FC<Props> = ({ updateToastr }) => {
  const createToastr = useCallback(() => {
    updateToastr({
      timer: 5,
      toastrMessage: "개인정보 이용약관에 동의해주세요.",
      toastrState: "warning"
    });
  },                               []);

  return (
    <AcceptButtonComponent>
      <ButtonCover
        onClick={createToastr}
        as="button"
        to="/auth"
        isdisable="true"
        next="true"
      >
        <ButtonArrow>〉</ButtonArrow>
        <ButtonText>계정인증</ButtonText>
      </ButtonCover>
    </AcceptButtonComponent>
  );
};

export default AcceptDisableButton;
