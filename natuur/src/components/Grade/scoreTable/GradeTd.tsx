import React, { FC, useState } from "react";

import * as S from "../../../styles/Grade";
import ScoreBox from "./ScoreBox";

interface OwnProps {
  subject:
    | "korean"
    | "social"
    | "history"
    | "math"
    | "science"
    | "english"
    | "tech_home";
  isLast?: boolean;
  subjectScores: Array<{
    semester: number;
    subject: string;
    score: "A" | "B" | "C" | "D" | "E" | "X";
  }>;
  semester: number;
  setSubjectScores: (payload: {
    subjectScores?: Array<{
      semester: number;
      subject: string;
      score: string;
    }>;
  }) => void;
}

const GradeTd: FC<OwnProps> = ({
  subject,
  isLast,
  subjectScores,
  semester,
  setSubjectScores
}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      {isLast ? (
        <S.Td isScore>
          <div>
            <ScoreBox
              subject={subject}
              semester={semester}
              subjectScores={subjectScores}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              setSubjectScores={setSubjectScores}
            />
          </div>
          {isSelected || <S.EmphasisScore />}
        </S.Td>
      ) : (
        <S.BorderRightTd isScore>
          <div>
            <ScoreBox
              subject={subject}
              semester={semester}
              subjectScores={subjectScores}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              setSubjectScores={setSubjectScores}
            />
          </div>
          {isSelected || <S.EmphasisScore />}
        </S.BorderRightTd>
      )}
    </>
  );
};

export default GradeTd;
