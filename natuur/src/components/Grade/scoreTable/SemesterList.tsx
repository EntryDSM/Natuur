import React, { FC } from "react";

import * as S from "../../../styles/Grade";

interface OwnProps {
  graduationClassification: string;
}

const SemesterList: FC<OwnProps> = ({ graduationClassification }) => {
  return (
    <>
      <S.TrTitle isScore>
        <S.TdTitle rowSpan={2} />
        <S.Td colSpan={2}>1학년</S.Td>
        <S.Td colSpan={2}>2학년</S.Td>
        <S.Td colSpan={graduationClassification === "졸업자" ? 2 : 1}>
          3학년
        </S.Td>
      </S.TrTitle>

      <S.TrTitle isScore>
        <S.BorderRightTd>1학기</S.BorderRightTd>
        <S.BorderRightTd>2학기</S.BorderRightTd>
        <S.BorderRightTd>1학기</S.BorderRightTd>
        <S.BorderRightTd>2학기</S.BorderRightTd>
        {graduationClassification === "졸업자" ? (
          <>
            <S.BorderRightTd>1학기</S.BorderRightTd>
            <S.Td>2학기</S.Td>
          </>
        ) : (
          <S.Td>1학기</S.Td>
        )}
      </S.TrTitle>
    </>
  );
};

export default SemesterList;
