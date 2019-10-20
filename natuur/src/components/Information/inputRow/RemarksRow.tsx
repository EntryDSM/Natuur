import React, { FC, useEffect } from "react";

import InputRow from "./InputRow";
import * as S from "../../../styles/Information";

interface OwnProps {
  radioType: string;
  applyType: string;
  setRadioType: (radiosType: string) => void;
}

const radioList: Array<{ CHECK_BOX_CASE: string; CHECK_BOX_NAME: string }> = [
  { CHECK_BOX_CASE: "nationalCheckBox", CHECK_BOX_NAME: "국가 유공자" },
  { CHECK_BOX_CASE: "exceptionCheckBox", CHECK_BOX_NAME: "특례 입학 대상자" }
];

const RemarksRow: FC<OwnProps> = ({ radioType, setRadioType, applyType }) => {
  useEffect(() => {
    if (applyType !== "일반전형") {
      setRadioType("");
    }
  },        [applyType]);

  return (
    <InputRow rowTitle="특기사항" isDisable={applyType !== "일반전형"}>
      {radioList.map(result => (
        <S.CheckBoxItem checkBoxCase="Remarks" key={result.CHECK_BOX_CASE}>
          <S.CheckBox
            type="checkbox"
            name="remarksRow"
            id={result.CHECK_BOX_CASE}
            value={result.CHECK_BOX_NAME}
            onClick={({ currentTarget: { value } }) =>
              radioType === value ? setRadioType("") : setRadioType(value)
            }
            disabled={applyType !== "일반전형"}
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

export default RemarksRow;
