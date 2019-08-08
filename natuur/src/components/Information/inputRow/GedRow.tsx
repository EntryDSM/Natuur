import React, { FC } from "react";

import InputRow from "./InputRow";
import * as S from "../../../styles/Information";
import checkIcon from "../../../assets/Information/checked.png";

interface OwnProps {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

const GedRow: FC<OwnProps> = ({ isChecked, setIsChecked }) => (
  <InputRow
    rowTitle="검정고시 지원여부"
    explanationText="검정고시를 통하여 지원하실 경우 체크해주세요"
  >
    <S.CheckBoxItem checkBoxCase="GED">
      <S.CheckBox
        type="checkbox"
        id="GedCheckBox"
        onClick={() => setIsChecked(!isChecked)}
      />
      <S.SquareLabel htmlFor="GedCheckBox">
        {isChecked && <S.CheckIcon src={checkIcon} alt="체크" />}
      </S.SquareLabel>
    </S.CheckBoxItem>
  </InputRow>
);

export default GedRow;
