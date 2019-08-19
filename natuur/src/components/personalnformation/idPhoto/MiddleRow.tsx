import React, { FC } from "react";

import * as S from "../../../styles/personallinformation";
import InputRow from "../InputRow";

interface OwnProps {
  isGed?: boolean;
  middleSchool: string;
  setIsOpenPopUp: (isOpenPopUp: boolean) => void;
}

const MiddleRow: FC<OwnProps> = ({ middleSchool, setIsOpenPopUp, isGed }) => {
  return (
    <InputRow rowTitle="중학교명" isSmall>
      <S.Input
        isDisable={isGed}
        type="text"
        value={middleSchool}
        readOnly
        inputCase="middle"
      />
      <S.SearchButton
        onClick={() => isGed || setIsOpenPopUp(true)}
        isSmall
        isDisable={isGed}
      >
        검색
      </S.SearchButton>
    </InputRow>
  );
};

export default MiddleRow;
