import React, { FC, useState, useEffect } from "react";

import InputRow from "./InputRow";
import * as S from "../../../styles/Information";

const GraduationList: string[] = [
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009"
];

interface OwnProps {
  year: string;
  setYear: (year: string) => void;
  isGedState: boolean;
  graduationClassificationState: string;
}

const GraduationYearRow: FC<OwnProps> = ({
  year,
  setYear,
  isGedState,
  graduationClassificationState
}) => {
  const [isOpenSelectBox, setIsOpenSelectBox] = useState(false);

  useEffect(() => {
    setIsOpenSelectBox(false);
  },        [year]);

  useEffect(() => {
    if (graduationClassificationState === "졸업 예정자") {
      setYear("2020");
    } else if (isGedState) {
      setYear("");
    }
  },        [graduationClassificationState]);

  return (
    <InputRow
      rowTitle="졸업 연도"
      explanationText="졸업자의 경우 졸업연도를 선택해주세요"
      isDisable={isGedState || graduationClassificationState === "졸업 예정자"}
      isNotUsed={graduationClassificationState === "졸업 예정자"}
    >
      <S.GraduationSelectBox isOpen={isOpenSelectBox}>
        <S.GraduationSelectAccept
          onClick={() =>
            !(isGedState || graduationClassificationState === "졸업 예정자") &&
            setIsOpenSelectBox(!isOpenSelectBox)
          }
        >
          <S.InputTextLabel>{year}</S.InputTextLabel>
          <S.DropDown isDisable={isGedState} />
        </S.GraduationSelectAccept>
        <S.GraduationSelectHorizon />
        <S.GraduationSelecOptionList>
          {GraduationList.map(result => (
            <S.GraduationSelecOption
              key={result}
              onClick={() => setYear(result)}
            >
              {result}
            </S.GraduationSelecOption>
          ))}
        </S.GraduationSelecOptionList>
      </S.GraduationSelectBox>
      <S.GraduationText>년</S.GraduationText>
    </InputRow>
  );
};

export default GraduationYearRow;
