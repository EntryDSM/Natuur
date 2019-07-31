import React, { FC } from "react";

import {
  AcceptButtonComponent,
  ButtonCover,
  ButtonArrow,
  ButtonText
} from "../../../styles/default";

const AcceptButton: FC = () => (
  <AcceptButtonComponent>
    <ButtonCover as="button" next>
      <ButtonArrow>〉</ButtonArrow>
      <ButtonText>생성하기</ButtonText>
    </ButtonCover>
  </AcceptButtonComponent>
);

export default AcceptButton;
