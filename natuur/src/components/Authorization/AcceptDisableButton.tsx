import React from "react";

import {
  AcceptButtonComponent,
  ButtonComponentCover,
  ButtonComponentArrow,
  ButtonComponentText
} from "../../styles/default";

const AcceptDisableButton = () => (
  <AcceptButtonComponent>
    <ButtonComponentCover false next as="button">
      <ButtonComponentArrow false next>
        〉
      </ButtonComponentArrow>
      <ButtonComponentText false next>
        인증하기
      </ButtonComponentText>
    </ButtonComponentCover>
  </AcceptButtonComponent>
);

export default AcceptDisableButton;
