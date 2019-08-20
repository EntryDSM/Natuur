import React, { FC } from "react";

import * as S from "../../styles/mypage";
import warningSign from "../../assets/warning-sign.png";
import checkSign from "../../assets/mypage-check.png";

interface OwnProps {
  title: "전형구분" | "인적사항" | "성적입력" | "자기소개서";
  isActive: boolean;
}

const PageItem: FC<OwnProps> = ({ title, isActive }) => (
  <S.PageItemWrapper isActive={isActive}>
    <p>{title}</p>
    <hr />
    <div>
      {isActive ? (
        <img src={checkSign} alt="완료 됨" />
      ) : (
        <img src={warningSign} alt="완료되지 않음" />
      )}
    </div>
  </S.PageItemWrapper>
);

export default PageItem;
