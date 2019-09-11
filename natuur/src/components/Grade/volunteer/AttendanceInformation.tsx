import React, { FC } from "react";

import * as S from "../../../styles/Grade";
import { checkOnlyNumber } from "../../../lib/regularExpressions";

interface OwnProps {
  caseName: "결석" | "조퇴" | "지각" | "결과";
  inforCase: "absent" | "earlyLeave" | "tardy" | "missingClass";
  onChangeHandler: (payload: {
    absent?: number;
    earlyLeave?: number;
    tardy?: number;
    missingClass?: number;
  }) => void;
  inputValue: number;
}

const AttendanceInformation: FC<OwnProps> = ({
  caseName,
  inforCase,
  onChangeHandler,
  inputValue
}) => (
  <S.Div marginLeft={48}>
    <S.SpaceBetweenDiv widthSize={335}>
      {`전체 무단 ${caseName} 일수`}
      <S.InputCover>
        <S.Input
          type="text"
          maxLength={3}
          onChange={({ target: { value } }) =>
            checkOnlyNumber(value) &&
            onChangeHandler({ [inforCase]: Number(value) })
          }
          value={inputValue}
        />
        일
      </S.InputCover>
    </S.SpaceBetweenDiv>
  </S.Div>
);

export default AttendanceInformation;
