import React, { FC, useEffect } from "react";

import InputRow from "./InputRow";
import * as S from "../../../styles/Information";

interface OwnProps {
  radioType: string;
  setRadioType: (radiosType: string) => void;
  isGedState: boolean;
}

const radioList: Array<{ CHECK_BOX_CASE: string; CHECK_BOX_NAME: string }> = [
  { CHECK_BOX_CASE: "expectedCheckBox", CHECK_BOX_NAME: "졸업 예정자" },
  { CHECK_BOX_CASE: "graduateCheckBox", CHECK_BOX_NAME: "졸업자" }
];

const GraduationClassificationRow: FC<OwnProps> = ({
  radioType,
  setRadioType,
  isGedState
}) => {
  useEffect(() => {
    if (isGedState) {
      setRadioType("");
    }
  },        [isGedState]);

  return (
    <InputRow rowTitle="졸업 구분" isDisable={isGedState}>
      {radioList.map(result => (
        <S.CheckBoxItem
          checkBoxCase="GraduationClassification"
          key={result.CHECK_BOX_CASE}
        >
          <S.CheckBox
            type="checkbox"
            name="GraduationClassificationRow"
            id={result.CHECK_BOX_CASE}
            value={result.CHECK_BOX_NAME}
            onClick={({ currentTarget: { value } }) => setRadioType(value)}
            disabled={isGedState}
          />
          <S.CircleLabel htmlFor={result.CHECK_BOX_CASE}>
            {radioType === result.CHECK_BOX_NAME && <S.AcceptCircle />}
          </S.CircleLabel>
          <S.InputTextLabel htmlFor={result.CHECK_BOX_CASE}>
            {result.CHECK_BOX_NAME}
          </S.InputTextLabel>
        </S.CheckBoxItem>
      ))}
    </InputRow>
  );
};

export default GraduationClassificationRow;
