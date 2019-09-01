import React, { FC } from "react";

import * as S from "../../../styles/preview/recommendationLetter";
import RecommendationTable from "./RecommendationTable";

const RecommendationBody: FC = () => (
  <S.BodyContent>
    <S.Information>
      <S.Blank isUnderLine widthSize={68} /> 중학교
      <br />
      3학년 <S.Blank widthSize={60} />반
      <br />
      성명 : <S.Blank widthSize={75} />
    </S.Information>

    <RecommendationTable />

    <S.ContentText>
      위 학생을 2020학년도 대덕소프트웨어마이스터고등학교 특별전형
      <br />
      대상자로 추천합니다.
    </S.ContentText>
    <S.Date>
      2019 년 <S.Blank widthSize={50} /> 월 <S.Blank widthSize={50} /> 일
    </S.Date>
    <S.TeacherSignature>
      작성자 담임: <S.Blank widthSize={100} /> (서명)
    </S.TeacherSignature>
    <S.MiddleSchoolPrincipal>
      <S.Blank isUnderLine widthSize={230} /> 중학교장
    </S.MiddleSchoolPrincipal>
    <S.PrincipalStamp>
      <p>출신중학교장</p>
      <p>직인</p>
    </S.PrincipalStamp>
    <S.SchoolName>대덕소프트웨어마이스터고등학교장 귀하</S.SchoolName>
  </S.BodyContent>
);

export default RecommendationBody;
