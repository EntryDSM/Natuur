import React, { FC, useRef, useState, useEffect } from "react";

import InputRow from "./InputRow";
import * as S from "../../../styles/Information";
import SelectBox from "./SocialIntegration/SelectBox";

interface OwnProps {
  radioType: string;
  setRadioType: (radiosType: string) => void;
}

const radioList: Array<{ CHECK_BOX_CASE: string; CHECK_BOX_NAME: string }> = [
  { CHECK_BOX_CASE: "generalCheckBox", CHECK_BOX_NAME: "일반전형" },
  { CHECK_BOX_CASE: "meisterCheckBox", CHECK_BOX_NAME: "마이스터 인재전형" }
];

const SelecTypeRow: FC<OwnProps> = ({ radioType, setRadioType }) => {
  const didMountRef = useRef(false);
  const [socialIntegrationType, setSocialIntegration] = useState("");
  const [isOpenSelectBox, setIsOpenSelectBox] = useState(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      setSocialIntegration(
        radioType.split("/")[1] !== undefined
          ? `/${radioType.split("/")[1]}`
          : ""
      );
    }
  },        []);

  return (
    <InputRow rowTitle="전형 선택">
      {radioList.map(result => (
        <S.CheckBoxItem checkBoxCase="SelectType" key={result.CHECK_BOX_CASE}>
          <S.CheckBox
            type="radio"
            name="selecTypeRow"
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
      <S.CheckBoxItem checkBoxCase="SelectType">
        <S.CheckBox
          type="radio"
          name="selecTypeRow"
          id="socialIntegrationCheckBox"
          value={`사회통합전형${socialIntegrationType}`}
          onClick={() => setIsOpenSelectBox(!isOpenSelectBox)}
        />
        <S.CircleLabel htmlFor="socialIntegrationCheckBox">
          {radioType === `사회통합전형${socialIntegrationType}` && (
            <S.AcceptCircle />
          )}
        </S.CircleLabel>
        <S.InputTextLabel htmlFor="socialIntegrationCheckBox">
          {`사회통합전형${socialIntegrationType}`}
        </S.InputTextLabel>
        <S.DropDown htmlFor="socialIntegrationCheckBox" isSmall />
        {isOpenSelectBox && (
          <SelectBox
            setSocialIntegration={setSocialIntegration}
            setIsOpenSelectBox={setIsOpenSelectBox}
            setRadioType={setRadioType}
          />
        )}
      </S.CheckBoxItem>
    </InputRow>
  );
};

export default SelecTypeRow;
