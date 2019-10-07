import React, { FC } from "react";

import * as S from "../../styles/404Page";
import danger from "../../assets/danger.png";

const ErrorPage: FC = () => (
  <S.PageWrapper>
    <S.ErrorMessage>
      4<span>0</span>4
    </S.ErrorMessage>
    <S.Message>
      잘못된 <span>URL</span>입니다. 이전으로 돌아가 주시기 바랍니다.
    </S.Message>
    <img src={danger} alt="이전으로 돌아가주세요." />
  </S.PageWrapper>
);

export default ErrorPage;
