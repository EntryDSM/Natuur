import React, { FC } from "react";

import { ButtonCover, ButtonContent } from "../../../../styles/Main";

interface Props {
  content: string;
  isWaitingPeriod?: boolean;
  clickEvent(): void;
}

const MainButton: FC<Props> = ({ content, clickEvent, isWaitingPeriod }) => (
  <ButtonCover
    isWaitingPeriod={isWaitingPeriod}
    onClick={isWaitingPeriod ? null : () => clickEvent()}
  >
    <ButtonContent>{content}</ButtonContent>
  </ButtonCover>
);

export default MainButton;
