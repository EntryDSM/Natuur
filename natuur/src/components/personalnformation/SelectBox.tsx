import React, { FC, useState } from "react";

import * as S from "../../styles/personallinformation";

interface OwnProps {
  value: string;
  setValue: (value: string) => void;
  valueList: string[];
  isBig?: boolean;
  isPopUp?: boolean;
}

const closeBox = (
  setValue: (value: string) => void,
  result: string,
  setIsOpenSelectBox: (isOpenSelectBox: boolean) => void
) => {
  setIsOpenSelectBox(false);
  setValue(result);
};

const SelectBox: FC<OwnProps> = ({
  value,
  setValue,
  valueList,
  isBig,
  isPopUp
}) => {
  const [isOpenSelectBox, setIsOpenSelectBox] = useState(false);

  return (
    <S.SelectBox isBig={isBig} isPopUp={isPopUp} isOpen={isOpenSelectBox}>
      <S.SelectAccept onClick={() => setIsOpenSelectBox(!isOpenSelectBox)}>
        <S.InputTextLabel>{value}</S.InputTextLabel>
        <S.DropDown />
      </S.SelectAccept>
      <S.SelectHorizon />
      <S.SelecOptionList>
        {valueList.map(result => (
          <S.SelecOption
            key={result}
            onClick={() => closeBox(setValue, result, setIsOpenSelectBox)}
          >
            {result}
          </S.SelecOption>
        ))}
      </S.SelecOptionList>
    </S.SelectBox>
  );
};

export default SelectBox;
