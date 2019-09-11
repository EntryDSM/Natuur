import React, { FC } from "react";

import * as S from "../../../styles/Grade";
import checkIcon from "../../../assets/Information/checked.png";

interface OwnProps {
  isGradeSemester: boolean;
  setIsGradeSemester: (payload: { isMissSemester: boolean }) => void;
}

const ThirdSemesterTd: FC<OwnProps> = ({
  isGradeSemester,
  setIsGradeSemester
}) => (
  <S.Td>
    <p>
      <S.CheckInput
        type="checkbox"
        id="3_grade_1"
        onClick={() => setIsGradeSemester({ isMissSemester: !isGradeSemester })}
      />
      <S.CheckBox htmlFor="3_grade_1">
        {isGradeSemester && <S.CheckBoxAccept src={checkIcon} alt="체크" />}
      </S.CheckBox>
      <S.TextLabel htmlFor="3_grade_1">1학기</S.TextLabel>
    </p>
  </S.Td>
);

export default ThirdSemesterTd;
