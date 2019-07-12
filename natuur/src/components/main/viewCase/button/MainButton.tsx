import React, { FC } from "react";

import { ButtonCover, ButtonContent } from "../../../../styles/Main";

interface Props {
  content: string;
  clickEvent(): void;
}

const MainButton: FC<Props> = ({ content, clickEvent }) => (
  <ButtonCover onClick={clickEvent}>
    <ButtonContent>{content}</ButtonContent>
  </ButtonCover>
);

export default MainButton;
