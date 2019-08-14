import React, { FC } from "react";

import * as S from "../../../styles/personallinformation";
import InputRow from "../InputRow";
import SelectBox from "../SelectBox";
import { YEAR_LIST, MONTH_LIST, DATE_LIST } from "../constant";

interface OwnProps {
  birthYear: string;
  birthMonth: string;
  birthDate: string;
  setBirthYear: (year: string) => void;
  setBirthMonth: (month: string) => void;
  setBirthDate: (date: string) => void;
}

const BirthRow: FC<OwnProps> = ({
  birthYear,
  birthMonth,
  birthDate,
  setBirthYear,
  setBirthMonth,
  setBirthDate
}) => {
  return (
    <InputRow rowTitle="생년월일" isSmall>
      <S.SelectBoxWrapper isBig>
        <SelectBox
          value={birthYear}
          setValue={setBirthYear}
          valueList={YEAR_LIST}
          isBig
        />
        <span>년</span>
      </S.SelectBoxWrapper>
      <S.SelectBoxWrapper>
        <SelectBox
          value={birthMonth}
          setValue={setBirthMonth}
          valueList={MONTH_LIST}
        />
        <span>월</span>
      </S.SelectBoxWrapper>
      <S.SelectBoxWrapper>
        <SelectBox
          value={birthDate}
          setValue={setBirthDate}
          valueList={DATE_LIST}
        />
        <span>일</span>
      </S.SelectBoxWrapper>
    </InputRow>
  );
};

export default BirthRow;
