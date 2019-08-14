import React, { FC } from "react";

import * as S from "../../../styles/personallinformation";
import InputRow from "../InputRow";

const radioList: Array<{ CHECK_BOX_CASE: string; CHECK_BOX_NAME: string }> = [
  { CHECK_BOX_CASE: "FEMALE", CHECK_BOX_NAME: "여자" },
  { CHECK_BOX_CASE: "MALE", CHECK_BOX_NAME: "남자" }
];

interface OwnProps {
  gender: string;
  setGender: (payload: { gender: string }) => void;
}

const GenderRow: FC<OwnProps> = ({ gender, setGender }) => {
  return (
    <InputRow rowTitle="성별" isSmall>
      {radioList.map(result => (
        <S.CheckBoxItem key={result.CHECK_BOX_CASE}>
          <S.CheckBox
            type="radio"
            name="genderRow"
            id={result.CHECK_BOX_CASE}
            value={result.CHECK_BOX_NAME}
            onChange={({ currentTarget: { value } }) =>
              setGender({ gender: value === "여자" ? "FEMALE" : "MALE" })
            }
          />
          <S.CircleLabel htmlFor={result.CHECK_BOX_CASE}>
            {gender === result.CHECK_BOX_CASE && <S.AcceptCircle />}
          </S.CircleLabel>
          <S.InputTextLabel htmlFor={result.CHECK_BOX_CASE}>
            {result.CHECK_BOX_NAME}
          </S.InputTextLabel>
        </S.CheckBoxItem>
      ))}
    </InputRow>
  );
};

export default GenderRow;
