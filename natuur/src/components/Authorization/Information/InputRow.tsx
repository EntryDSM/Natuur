import React, { FC } from "react";

import * as S from "../../../styles/Authorization";
import { TextInput } from "../../default/Common";

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
  isCertification?: boolean;
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
  isCertification
}) => {
  return (
    <S.InfomationInputBoxCoverWrapper>
      <S.InfomationInputBoxWapperTitle isCertification={isCertification}>
        {title}
      </S.InfomationInputBoxWapperTitle>
      <TextInput
        type={type}
        placeHolder={placeHolder}
        name={name}
        handleChanger={handleChanger}
        isCheckMark={isCheckMark}
        isReadOnly={isReadOnly}
        isCertification={isCertification}
      />
      {isWarning && (
        <S.InformationInputSpaceWarning isCertification={isCertification}>
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
