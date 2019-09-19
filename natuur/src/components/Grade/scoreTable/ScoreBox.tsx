import React, { FC, useCallback } from "react";
import { useSelector } from "react-redux";

import * as S from "../../../styles/Grade";
import { SCORE_LIST } from "./constance";
import { AppState } from "../../../core/redux/store/store";

interface OwnProps {
  subject:
    | "korean"
    | "social"
    | "history"
    | "math"
    | "science"
    | "english"
    | "tech_home";
  subjectScores: Array<{
    semester: number;
    subject: string;
    score: string;
  }>;
  isSelected: boolean;
  semester: number;
  setIsSelected: (isSelected: boolean) => void;
  setSubjectScores: (payload: {
    subjectScores?: Array<{
      semester: number;
      subject: string;
      score: string;
    }>;
  }) => void;
}

const ScoreBox: FC<OwnProps> = ({
  isSelected,
  setIsSelected,
  subjectScores,
  subject,
  setSubjectScores,
  semester
}) => {
  const subjectScoreAll = useSelector<AppState, any>(
    state => state.gradeReducer.subjectScores
  );

  const setSubjectScoresAndsetIsSelected = useCallback(
    (score: string) => {
      const subjects = [...subjectScoreAll];

      setIsSelected(false);
      setSubjectScores({
        subjectScores: subjects.map((value, index, arr) => {
          if (value.subject === subject) {
            if (value.semester === semester) {
              return {
                ...value,
                score
              };
            }
          }
          return arr[index];
        })
      });
    },
    [subjectScoreAll]
  );

  return (
    <S.ScoresBox isSelected={isSelected}>
      {isSelected ? (
        <>
          <S.ScoreList>
            {SCORE_LIST.map(value => (
              <S.ScoreItem
                key={value}
                onClick={() => setSubjectScoresAndsetIsSelected(value)}
              >
                {value}
              </S.ScoreItem>
            ))}
          </S.ScoreList>
          <p />
          <S.ScoreItem
            onClick={() => setSubjectScoresAndsetIsSelected("X")}
            as="div"
          >
            X
          </S.ScoreItem>
        </>
      ) : (
        <S.ScoreItem onClick={() => setIsSelected(true)} as="div">
          {subjectScores[semester - 1].score}
        </S.ScoreItem>
      )}
    </S.ScoresBox>
  );
};

export default ScoreBox;
