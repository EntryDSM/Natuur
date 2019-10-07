import React, { FC } from "react";

import * as S from "../../../styles/Grade";
import GradeTd from "./GradeTd";

interface OwnProps {
  isLast?: boolean;
  course: "국어" | "사회" | "역사" | "수학" | "과학" | "기술가정" | "영어";
  subject:
    | "korean"
    | "social"
    | "history"
    | "math"
    | "science"
    | "english"
    | "tech_and_home";
  subjectScores: Array<{
    semester: number;
    subject: string;
    score: "A" | "B" | "C" | "D" | "E" | "X";
  }>;
  setSubjectScores: (payload: {
    subjectScores?: Array<{
      semester: number;
      subject: string;
      score: string;
    }>;
  }) => void;
}

const GradeList: FC<OwnProps> = ({
  subject,
  course,
  isLast,
  subjectScores,
  setSubjectScores
}) => {
  return (
    <S.GradeTr isLast={isLast}>
      <S.TdTitle isScore>{course}</S.TdTitle>
      {subjectScores.map((value, index, arr) => {
        if (value.semester === arr.length) {
          return (
            <GradeTd
              subject={subject}
              subjectScores={arr}
              semester={value.semester}
              setSubjectScores={setSubjectScores}
              key={index}
              isLast
            />
          );
        }
        return (
          <GradeTd
            subject={subject}
            subjectScores={subjectScores}
            semester={value.semester}
            setSubjectScores={setSubjectScores}
            key={index}
          />
        );
      })}
    </S.GradeTr>
  );
};

export default GradeList;
