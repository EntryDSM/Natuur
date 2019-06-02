import React, { FC } from "react";

import {
  InfomationInputBoxCoverWapper,
  InfomationInputBoxWapperTitle,
  InformationInputSpaceWarning,
  InformationInputSpaceWrong
} from "../../../styles/Authorization";
import { TextInput } from ".";

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
  isWrong
}) => {
  return (
    <InfomationInputBoxCoverWapper>
      <InfomationInputBoxWapperTitle>{title}</InfomationInputBoxWapperTitle>
      <TextInput
        type={type}
        placeHolder={placeHolder}
        name={name}
        handleChanger={handleChanger}
        isCheckMark={isCheckMark}
        isReadOnly={isReadOnly}
      />
      {isWarning && (
        <InformationInputSpaceWarning>
          {warningMessage}
        </InformationInputSpaceWarning>
      )}
      {isWrong && (
        <InformationInputSpaceWrong>
          비밀번호를 정확히 입력해주세요
        </InformationInputSpaceWrong>
      )}
    </InfomationInputBoxCoverWapper>
  );
};

export default InputRow;
