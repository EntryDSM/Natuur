import React, { FC, useEffect } from "react";

import * as S from "../../../styles/personallinformation";
import InputRow from "../InputRow";
import { checkOnlyNumber } from "../../../lib/regularExpressions";

interface OwnProps {
  isGed?: boolean;
  userClass: string;
  studentID: string;
  setClass: (payload: { class: string }) => void;
  setStudentID: (payload: { studentID: string }) => void;
}

const StudentRow: FC<OwnProps> = ({
  isGed,
  userClass,
  studentID,
  setClass,
  setStudentID
}) => {
  useEffect(() => {
    if (isGed) {
      setClass({ class: undefined });
      setStudentID({ studentID: undefined });
    }
  },        [isGed]);

  return (
    <InputRow rowTitle="학번" isSmall>
      <S.InputCover isDisable>
        <S.Input type="text" value={3} readOnly inputCase="studentID" />
        <span>학년</span>
      </S.InputCover>
      <S.InputCover isDisable={isGed}>
        <S.Input
          type="text"
          value={userClass || ""}
          onChange={({ target: { value } }) =>
            checkOnlyNumber(value) && setClass({ class: value })
          }
          readOnly={isGed}
          maxLength={2}
          inputCase="studentID"
        />
        <span>반</span>
      </S.InputCover>
      <S.InputCover isDisable={isGed}>
        <S.Input
          type="text"
          value={studentID || ""}
          onChange={({ target: { value } }) =>
            checkOnlyNumber(value) && setStudentID({ studentID: value })
          }
          readOnly={isGed}
          maxLength={2}
          inputCase="studentID"
        />
        <span>번</span>
      </S.InputCover>
    </InputRow>
  );
};

export default StudentRow;
