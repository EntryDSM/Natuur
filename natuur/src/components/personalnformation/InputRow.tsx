import React, { FC } from "react";

import * as S from "../../styles/personallinformation";

interface OwnProps {
  explanationText?: string;
  rowTitle: string;
  isSmall?: boolean;
  isAddress?: boolean;
}

const InputRow: FC<OwnProps> = ({
  rowTitle,
  explanationText = "",
  children,
  isSmall,
  isAddress
}) => {
  return (
    <S.RowWrapper isAddress={isAddress} isSmall={isSmall}>
      <S.TitleBox>{rowTitle}</S.TitleBox>
      <S.CheckBoxWrapper>{children}</S.CheckBoxWrapper>
      {explanationText && (
        <S.ExplanationRow>{explanationText}</S.ExplanationRow>
      )}
    </S.RowWrapper>
  );
};

export default InputRow;
