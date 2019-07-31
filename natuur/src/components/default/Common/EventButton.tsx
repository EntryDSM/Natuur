import React, { FC } from "react";

import * as S from "../../../styles/default/eventButton";

interface OwnProps {
  isButtonDisable?: boolean;
  buttonWidth: number;
  buttonContent: string;
  buttonMargin: number;
  buttonEvent: () => void;
}

const EventButton: FC<OwnProps> = ({
  buttonWidth,
  buttonContent,
  buttonEvent,
  isButtonDisable = false,
  buttonMargin
}) => (
  <S.Button
    onClick={buttonEvent}
    width={buttonWidth}
    isDisable={isButtonDisable}
    marginLeft={buttonMargin}
  >
    <S.ButtonText>{buttonContent}</S.ButtonText>
  </S.Button>
);

export default EventButton;
