import React, { FC } from "react";

import * as S from "../../../styles/default/eventButton";

interface OwnProps {
  isButtonDisable?: boolean;
  buttonWidth: number;
  buttonContent: string;
  buttonMargin: number;
  buttonEvnet: () => void;
}

const EventButton: FC<OwnProps> = ({
  buttonWidth,
  buttonContent,
  buttonEvnet,
  isButtonDisable = false,
  buttonMargin
}) => (
  <S.Button
    onClick={buttonEvnet}
    width={buttonWidth}
    isDisable={isButtonDisable}
    marginLeft={buttonMargin}
  >
    <S.ButtonText>{buttonContent}</S.ButtonText>
  </S.Button>
);

export default EventButton;
