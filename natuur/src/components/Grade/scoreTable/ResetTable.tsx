import React, { FC, useCallback } from "react";

import * as S from "../../../styles/Grade";
import { SCORE_LIST } from "./constance";

interface OwnProps {
  setSubjectScores: (payload: {
    subjectScores?: Array<{
      semester: number;
      subject: string;
      score: string;
    }>;
  }) => void;
  subjectScores: Array<{
    semester: number;
    subject: string;
    score: "A" | "B" | "C" | "D" | "E" | "X";
  }>;
}

const ResetTable: FC<OwnProps> = ({ subjectScores, setSubjectScores }) => {
  const resetSubjectTable = useCallback((score: string) => {
    setSubjectScores({
      subjectScores: subjectScores.map(value => {
        return {
          ...value,
          score
        };
      })
    });
  },                                    []);

  return (
    <S.ResetGradeWrapper>
      <p>전체 성적 초기화</p>

      <S.ScoreList>
        {SCORE_LIST.map(value => (
          <S.ScoreItem key={value} onClick={() => resetSubjectTable(value)}>
            {value}
          </S.ScoreItem>
        ))}
      </S.ScoreList>
    </S.ResetGradeWrapper>
  );
};

export default ResetTable;
