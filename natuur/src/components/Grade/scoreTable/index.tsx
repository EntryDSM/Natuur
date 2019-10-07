import React, { FC, useRef, useEffect } from "react";

import ResetTable from "./ResetTable";
import Wrapper from "../Wrapper";
import SemesterList from "./SemesterList";
import GradeList from "./GradeList";

interface OwnProps {
  graduationClassification: string;
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
  schoolGrade: {
    korean: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    social: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    history: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    math: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    science: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    tech_and_home: Array<"A" | "B" | "C" | "D" | "E" | "X">;
    english: Array<"A" | "B" | "C" | "D" | "E" | "X">;
  };
  isOpen: {
    info: boolean;
    personal: boolean;
    grade: boolean;
    intro: boolean;
  };
  setIsOpen: (payload: {
    pageName: "info" | "personal" | "grade" | "intro";
    isOpen: boolean;
  }) => void;
}

const ScoreTable: FC<OwnProps> = ({
  graduationClassification,
  setSubjectScores,
  subjectScores,
  schoolGrade,
  isOpen,
  setIsOpen
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      const subjectScores = [];

      if (!isOpen.grade) {
        for (const subject in schoolGrade) {
          if (schoolGrade.hasOwnProperty(subject)) {
            subjectScores.push(
              schoolGrade[subject].map((value, index) => ({
                semester: index + 1,
                subject,
                score: value
              }))
            );
          }
        }

        setSubjectScores({ subjectScores });
      }
    }
    return () => setIsOpen({ pageName: "grade", isOpen: true });
  },        []);

  return (
    <Wrapper title="성적입력">
      <ResetTable
        setSubjectScores={setSubjectScores}
        subjectScores={subjectScores}
      />
      <table>
        <tbody>
          <SemesterList graduationClassification={graduationClassification} />
          <GradeList
            setSubjectScores={setSubjectScores}
            subjectScores={subjectScores.filter(
              value => value.subject === "korean"
            )}
            course="국어"
            subject="korean"
          />
          <GradeList
            setSubjectScores={setSubjectScores}
            subjectScores={subjectScores.filter(
              value => value.subject === "social"
            )}
            course="사회"
            subject="social"
          />
          <GradeList
            setSubjectScores={setSubjectScores}
            subjectScores={subjectScores.filter(
              value => value.subject === "history"
            )}
            course="역사"
            subject="history"
          />
          <GradeList
            setSubjectScores={setSubjectScores}
            subjectScores={subjectScores.filter(
              value => value.subject === "math"
            )}
            course="수학"
            subject="math"
          />
          <GradeList
            setSubjectScores={setSubjectScores}
            subjectScores={subjectScores.filter(
              value => value.subject === "science"
            )}
            course="과학"
            subject="science"
          />
          <GradeList
            setSubjectScores={setSubjectScores}
            subjectScores={subjectScores.filter(
              value => value.subject === "tech_and_home"
            )}
            course="기술가정"
            subject="tech_and_home"
          />
          <GradeList
            setSubjectScores={setSubjectScores}
            subjectScores={subjectScores.filter(
              value => value.subject === "english"
            )}
            isLast
            course="영어"
            subject="english"
          />
        </tbody>
      </table>
    </Wrapper>
  );
};

export default ScoreTable;
