import React, { FC } from "react";
import { useSelector } from "react-redux";

import * as S from "../../styles/mypage";
import { AppState } from "../../core/redux/store/store";

interface OwnProps {
  title: string;
  content: string;
  isPreview?: boolean;
}

const RowItem: FC<OwnProps> = ({ title, content, isPreview }) => {
  const isFinalSubmit = useSelector<AppState, boolean>(
    state => state.mainReducer.is_final_submit
  );

  return (
    <S.RowWrapper>
      <S.RowTitle>{title}</S.RowTitle>
      <S.RowContent>{content}</S.RowContent>
      {isPreview && (
        <S.PreviewButton
          isSuccess={isFinalSubmit}
          onClick={e => !isFinalSubmit && e.preventDefault()}
          to="/print"
        >
          원서 출력하기
        </S.PreviewButton>
      )}
    </S.RowWrapper>
  );
};

export default RowItem;
