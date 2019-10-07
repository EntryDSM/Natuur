import React, { FC } from "react";

import * as S from "../../../styles/preview/nonSmokingPledge";
import {
  NON_SMOKING_ROW_1,
  NON_SMOKING_ROW_2,
  NON_SMOKING_ROW_3,
  DECLARATION_1,
  DECLARATION_2
} from "./constance";
import AgreeTable from "./AgreeTable";
import AgreeCheckContainer from "./AgreeCheckContainer";
import { returnMonthAndDate } from "../../../lib/utils/date";

interface OwnProps {
  name: string;
}

const NonSmokingBody: FC<OwnProps> = ({ name }) => {
  const { stringMonth, stringDate } = returnMonthAndDate();

  return (
    <S.ContentWrapper id="contentDiv">
      <S.VowText isFirst>{NON_SMOKING_ROW_1}</S.VowText>
      <S.VowText>{NON_SMOKING_ROW_2}</S.VowText>
      <S.VowText>{NON_SMOKING_ROW_3}</S.VowText>
      <S.VowAgreeText isFirst>
        나 (
        <S.Blank isCenter widthSize={100}>
          {name}
        </S.Blank>
        )은(는) {DECLARATION_1}
      </S.VowAgreeText>
      <S.VowAgreeText>{DECLARATION_2}</S.VowAgreeText>

      <AgreeTable />

      <AgreeCheckContainer />

      <S.Date>
        2019 년 <S.Blank widthSize={40}>{stringMonth}</S.Blank>월{" "}
        <S.Blank widthSize={40}>{stringDate}</S.Blank>일
      </S.Date>
      <S.VolunteerSignature>
        <p>
          지원자 성명 <S.Blank widthSize={100} /> (서명)
        </p>
        <p>
          보호자 성명 <S.Blank widthSize={100} /> (서명)
        </p>
      </S.VolunteerSignature>
    </S.ContentWrapper>
  );
};

export default NonSmokingBody;
