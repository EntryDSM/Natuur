import React, { FC } from "react";

import InputRow from "./InputRow";
import * as S from "../../../styles/Information";

interface OwnProps {
  radioType: string;
  setRadioType: (radiosType: string) => void;
}

const radioList: Array<{ CHECK_BOX_CASE: string; CHECK_BOX_NAME: string }> = [
  { CHECK_BOX_CASE: "daejeonCheckBox", CHECK_BOX_NAME: "대전" },
  { CHECK_BOX_CASE: "nationwideCheckBox", CHECK_BOX_NAME: "전국" }
];

const SelecRegionRow: FC<OwnProps> = ({ radioType, setRadioType }) => (
  <InputRow rowTitle="지역 선택">
    {radioList.map(result => (
      <S.CheckBoxItem checkBoxCase="SelectRegion" key={result.CHECK_BOX_CASE}>
        <S.CheckBox
          type="radio"
          name="selectRegionRow"
          id={result.CHECK_BOX_CASE}
          value={result.CHECK_BOX_NAME}
          onChange={({ currentTarget: { value } }) => setRadioType(value)}
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

export default SelecRegionRow;
