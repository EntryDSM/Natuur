import React, { FC } from "react";

import * as S from "../../../styles/preview/SelfIntroductionAndSchoolPlan";

interface OwnProps {
  title: string;
  description: string;
  body: string;
}

const TextAreaWrapper: FC<OwnProps> = ({ title, description, body }) => (
  <S.TextAreaWrapper>
    <S.TextHeader>
      <S.TextTitle>{title}</S.TextTitle>
      <S.TextDescription>{description}</S.TextDescription>
    </S.TextHeader>
    <S.TextCount>(1,600자 이내)</S.TextCount>
    <S.TextArea>{body}</S.TextArea>
  </S.TextAreaWrapper>
);

export default TextAreaWrapper;
