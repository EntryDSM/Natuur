import React, { FC, useState } from "react";

import {
  AcceptButtonComponent,
  ButtonComponentCover,
  ButtonComponentArrow,
  ButtonComponentText
} from "../../styles/default";

interface Props {
  updateToastr(toastrInformation: object): void;
  removeToastr(): void;
}

const AcceptDisableButton: FC<Props> = ({ updateToastr, removeToastr }) => {
  const CreateToastr = () => {
    removeToastr();
    updateToastr({
      timer: 5,
      toastrMessage: "개인정보를 입력해주세요.",
      toastrState: "warning"
    });
  };

  return (
    <AcceptButtonComponent>
      <ButtonComponentCover
        isDisable={true}
        next={true}
        as="button"
        onClick={() => CreateToastr()}
      >
        <ButtonComponentArrow isDisable={true} next={true}>
          〉
        </ButtonComponentArrow>
        <ButtonComponentText isDisable={true} next={true}>
          인증하기
        </ButtonComponentText>
      </ButtonComponentCover>
    </AcceptButtonComponent>
  );
};

export default AcceptDisableButton;
