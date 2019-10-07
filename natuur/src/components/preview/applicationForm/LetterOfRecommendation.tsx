import React, { FC } from "react";

import * as S from "../../../styles/preview/applicationForm";

interface OwnProps {
  middleSchool: string;
}

const LetterOfRecommendation: FC<OwnProps> = ({ middleSchool }) => (
  <S.SealContainer>
    <S.Signature widthSize={60}>
      <span>추</span>
      <span>천</span>
      <span>서</span>
    </S.Signature>
    <S.CenterAlignText>
      본 입학원서의 내용은 사실과 다름이 없으며 상기자는 귀교에 입학 적격자로
      인정되므로 추천합니다.
    </S.CenterAlignText>
    <S.CenterAlignText>
      2019년 10월 <S.Blank widthSize={10} /> 일
    </S.CenterAlignText>
    <S.Signature pb={4} widthSize={300}>
      <S.SignatureItem widthSize={130}>
        교사 : <span>(서명)</span>
      </S.SignatureItem>
      <S.SignatureItem isEnd widthSize={130}>
        <S.Blank mr={6} isUnderLine>
          {middleSchool.split("중학교")[0]}
        </S.Blank>
        중학교장 <span>(직인)</span>
      </S.SignatureItem>
    </S.Signature>
  </S.SealContainer>
);

export default LetterOfRecommendation;
