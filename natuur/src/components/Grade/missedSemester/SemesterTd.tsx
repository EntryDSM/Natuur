import React, { FC } from "react";

import * as S from "../../../styles/Grade";
import checkIcon from "../../../assets/Information/checked.png";

interface OwnProps {
  isGradeSemester: boolean;
  setIsGradeSemester: (payload: { isMissSemester: boolean }) => void;
  inputId: string;
  semester: string;
}

const SemesterTd: FC<OwnProps> = ({
  isGradeSemester,
  setIsGradeSemester,
  inputId,
  semester
}) => (
  <S.BorderRightTd>
    <p>
      <S.CheckInput
        type="checkbox"
        id={inputId}
        onClick={() => setIsGradeSemester({ isMissSemester: !isGradeSemester })}
      />
      <S.CheckBox htmlFor={inputId}>
        {isGradeSemester && <S.CheckBoxAccept src={checkIcon} alt="체크" />}
      </S.CheckBox>
      <S.TextLabel htmlFor={inputId}>{semester}</S.TextLabel>
    </p>
  </S.BorderRightTd>
);

export default SemesterTd;
