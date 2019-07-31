import React, { FC } from "react";

import * as S from "../../../styles/Authorization";
import { TextInput, EventButton } from ".";

interface Props {
  title?: string;
  placeHolder?: string;
  name?: string;
  type?: string;
  isCheckMark?: boolean;
  isWarning?: boolean;
  warningMessage?: string;
  isReadOnly?: boolean;
  isWrong?: boolean;
  isCheckAuthorization?: boolean;
  isButtonRow?: boolean;
  buttonWidth?: number;
  buttonContent?: string;
  buttonEvent?: () => void;
  buttonMargin?: number;
  handleChanger?(event: React.ChangeEvent<HTMLInputElement>): void;
}

const InputRow: FC<Props> = ({
  title,
  placeHolder,
  name,
  handleChanger,
  isCheckMark,
  type,
  isWarning,
  warningMessage,
  isReadOnly,
  isWrong,
  isButtonRow,
  isCheckAuthorization,
  buttonWidth,
  buttonContent,
  buttonEvent,
  buttonMargin
}) => {
  return (
    <S.InfomationInputBoxCoverWrapper>
      <S.InfomationInputBoxWrapperTitle>{title}</S.InfomationInputBoxWrapperTitle>
      <TextInput
        type={type}
        placeHolder={placeHolder}
        name={name}
        handleChanger={handleChanger}
        isCheckMark={isCheckMark}
        isReadOnly={isReadOnly}
      />
      {isButtonRow && (
        <EventButton
          isButtonDisable={!isCheckAuthorization}
          buttonWidth={buttonWidth}
          buttonContent={buttonContent}
          buttonEvent={buttonEvent}
          buttonMargin={buttonMargin}
        />
      )}
      {isWarning && (
        <S.InformationInputSpaceWarning>
          {warningMessage}
        </S.InformationInputSpaceWarning>
      )}
      {isWrong && (
        <S.InformationInputSpaceWrong>
          비밀번호를 정확히 입력해주세요
        </S.InformationInputSpaceWrong>
      )}
    </S.InfomationInputBoxCoverWrapper>
  );
};

export default InputRow;
