import React, { FC } from "react";

import {
  AcceptButtonComponent,
  ButtonComponentCover,
  ButtonComponentArrow,
  ButtonComponentText
} from "../../styles/default";

const AcceptButton: FC = () => (
  <AcceptButtonComponent>
    <ButtonComponentCover
      as="button"
      next
      // v-if="(isAccept && verify[0] && verify[1] && verify[2])"
      // @click="moveToNextPage"
    >
      <ButtonComponentArrow next>〉</ButtonComponentArrow>
      <ButtonComponentText next>인증하기</ButtonComponentText>
    </ButtonComponentCover>
  </AcceptButtonComponent>
);

export default AcceptButton;
