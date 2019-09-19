import React, { FC } from "react";

import * as S from "../../../styles/Grade";
import AttendanceInformation from "./AttendanceInformation";

interface OwnProps {
  absent: number;
  setAbsent: (payload: { absent: number }) => void;
  earlyLeave: number;
  setEarlyLeave: (payload: { earlyLeave: number }) => void;
  tardy: number;
  setTardy: (payload: { tardy: number }) => void;
  missingClass: number;
  setMissingClass: (payload: { missingClass: number }) => void;
}

const AttendanceRow: FC<OwnProps> = ({
  absent,
  earlyLeave,
  tardy,
  missingClass,
  setAbsent,
  setEarlyLeave,
  setTardy,
  setMissingClass
}) => (
  <>
    <S.BorderBottomTr>
      <S.TdTitle noBottomBorder rowSpan={2}>
        <p>출석정보</p>
      </S.TdTitle>
      <S.BorderRightTd>
        <AttendanceInformation
          caseName="결석"
          inforCase="absent"
          onChangeHandler={setAbsent}
          inputValue={absent}
        />
      </S.BorderRightTd>
      <S.Td>
        <AttendanceInformation
          caseName="조퇴"
          inforCase="earlyLeave"
          onChangeHandler={setEarlyLeave}
          inputValue={earlyLeave}
        />
      </S.Td>
    </S.BorderBottomTr>
    <tr>
      <S.BorderRightTd>
        <AttendanceInformation
          caseName="지각"
          inforCase="tardy"
          onChangeHandler={setTardy}
          inputValue={tardy}
        />
      </S.BorderRightTd>
      <S.Td>
        <AttendanceInformation
          caseName="결과"
          inforCase="missingClass"
          onChangeHandler={setMissingClass}
          inputValue={missingClass}
        />
      </S.Td>
    </tr>
  </>
);

export default AttendanceRow;
