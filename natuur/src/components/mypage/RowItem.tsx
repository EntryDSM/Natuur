import React, { FC } from "react";

import * as S from "../../styles/mypage";

interface OwnProps {
  title: string;
  content: string;
}

const RowItem: FC<OwnProps> = ({ title, content }) => (
  <S.RowWrapper>
    <S.RowTitle>{title}</S.RowTitle>
    <S.RowContent>{content}</S.RowContent>
  </S.RowWrapper>
);

export default RowItem;
