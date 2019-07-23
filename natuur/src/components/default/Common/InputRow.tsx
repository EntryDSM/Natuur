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
  buttonEvnet?: () => void;
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
  buttonEvnet,
  buttonMargin
}) => {
  return (
    <S.InfomationInputBoxCoverWapper>
      <S.InfomationInputBoxWapperTitle>{title}</S.InfomationInputBoxWapperTitle>
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
          buttonEvnet={buttonEvnet}
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
    </S.InfomationInputBoxCoverWapper>
  );
};

export default InputRow;
