import React, { FC } from "react";

import * as S from "../../../styles/Information";

interface OwnProps {
  explanationText?: string;
  rowTitle: string;
  isDisable?: boolean;
  isNotUsed?: boolean;
}

const InputRow: FC<OwnProps> = ({
  rowTitle,
  explanationText = "",
  children,
  isDisable,
  isNotUsed
}) => {
  return (
    <S.RowWrapper isDisable={isDisable} isNotUsed={isNotUsed}>
      <S.TitleBox>{rowTitle}</S.TitleBox>
      <S.CheckBoxWrapper>{children}</S.CheckBoxWrapper>
      {explanationText && (
        <S.ExplanationRow>{explanationText}</S.ExplanationRow>
      )}
    </S.RowWrapper>
  );
};

export default InputRow;
