import React, { FC } from "react";
import { Link } from "react-router-dom";

import * as S from "../../styles/mypage";
import warningSign from "../../assets/warning-sign.png";
import checkSign from "../../assets/mypage-check.png";

interface OwnProps {
  title: "전형구분" | "인적사항" | "성적입력" | "자기소개서";
  isActive: boolean;
  link: "info-summary" | "personal" | "grade" | "intro";
}

const PageItem: FC<OwnProps> = ({ title, isActive, link }) => (
  <Link to={link}>
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
  </Link>
);

export default PageItem;
