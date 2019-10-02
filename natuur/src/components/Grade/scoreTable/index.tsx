import React, { FC, useRef, useEffect } from "react";

import ResetTable from "./ResetTable";
import Wrapper from "../Wrapper";
import SemesterList from "./SemesterList";
import GradeList from "./GradeList";

interface OwnProps {
  graduationClassification: string;
  accessToken: string;
  getGrade: (payload: { accessToken: string }) => void;
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

const ScoreTable: FC<OwnProps> = ({
  accessToken,
  graduationClassification,
  getGrade,
  setSubjectScores,
  subjectScores
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getGrade({ accessToken });
    }
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
              value => value.subject === "tech_home"
            )}
            course="기술가정"
            subject="tech_home"
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
