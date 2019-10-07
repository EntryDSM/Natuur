import React, { FC, useEffect } from "react";

import * as S from "../../../styles/Grade";
import SemesterTd from "./SemesterTd";
import ThirdSemesterTd from "./ThirdSemesterTd";
import Wrapper from "../Wrapper";

interface OwnProps {
  isFirstGradeSmester1: boolean;
  isFirstGradeSmester2: boolean;
  isSecondGradeSmester1: boolean;
  isSecondGradeSmester2: boolean;
  isThirdGradeSmester1: boolean;
  setIsFirstGrade1Semester: (payload: { isMissSemester: boolean }) => void;
  setIsFirstGrade2Semester: (payload: { isMissSemester: boolean }) => void;
  setIsSecondGrade1Semester: (payload: { isMissSemester: boolean }) => void;
  setIsSecondGrade2Semester: (payload: { isMissSemester: boolean }) => void;
  setIsThirdGrade1Semester: (payload: { isMissSemester: boolean }) => void;
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

const MissedSemester: FC<OwnProps> = ({
  isFirstGradeSmester1,
  isFirstGradeSmester2,
  isSecondGradeSmester1,
  isSecondGradeSmester2,
  isThirdGradeSmester1,
  setIsFirstGrade1Semester,
  setIsFirstGrade2Semester,
  setIsSecondGrade1Semester,
  setIsSecondGrade2Semester,
  setIsThirdGrade1Semester,
  setSubjectScores,
  subjectScores
}) => {
  useEffect(() => {
    if (isFirstGradeSmester1) {
      setSubjectScores({
        subjectScores: subjectScores.map(value => {
          if (value.semester === 1) {
            return {
              ...value,
              score: "X"
            };
          }
          return value;
        })
      });
    } else {
      setSubjectScores({
        subjectScores: subjectScores.map(value => {
          if (value.semester === 1) {
            return {
              ...value,
              score: "A"
            };
          }
          return value;
        })
      });
    }
  },        [isFirstGradeSmester1]);

  useEffect(() => {
    if (isFirstGradeSmester2) {
      setSubjectScores({
        subjectScores: subjectScores.map(value => {
          if (value.semester === 2) {
            return {
              ...value,
              score: "X"
            };
          }
          return value;
        })
      });
    } else {
      setSubjectScores({
        subjectScores: subjectScores.map(value => {
          if (value.semester === 2) {
            return {
              ...value,
              score: "A"
            };
          }
          return value;
        })
      });
    }
  },        [isFirstGradeSmester2]);

  useEffect(() => {
    if (isSecondGradeSmester1) {
      setSubjectScores({
        subjectScores: subjectScores.map(value => {
          if (value.semester === 3) {
            return {
              ...value,
              score: "X"
            };
          }
          return value;
        })
      });
    } else {
      setSubjectScores({
        subjectScores: subjectScores.map(value => {
          if (value.semester === 3) {
            return {
              ...value,
              score: "A"
            };
          }
          return value;
        })
      });
    }
  },        [isSecondGradeSmester1]);

  useEffect(() => {
    if (isSecondGradeSmester2) {
      setSubjectScores({
        subjectScores: subjectScores.map(value => {
          if (value.semester === 4) {
            return {
              ...value,
              score: "X"
            };
          }
          return value;
        })
      });
    } else {
      setSubjectScores({
        subjectScores: subjectScores.map(value => {
          if (value.semester === 4) {
            return {
              ...value,
              score: "A"
            };
          }
          return value;
        })
      });
    }
  },        [isSecondGradeSmester2]);

  useEffect(() => {
    if (isThirdGradeSmester1) {
      setSubjectScores({
        subjectScores: subjectScores.map(value => {
          if (value.semester === 5) {
            return {
              ...value,
              score: "X"
            };
          }
          return value;
        })
      });
    } else {
      setSubjectScores({
        subjectScores: subjectScores.map(value => {
          if (value.semester === 5) {
            return {
              ...value,
              score: "A"
            };
          }
          return value;
        })
      });
    }
  },        [isThirdGradeSmester1]);

  return (
    <Wrapper title="미이수 학기 선택">
      <table>
        <tbody>
          <S.TrTitle>
            <S.BorderRightTd colSpan={2}>1학년</S.BorderRightTd>
            <S.BorderRightTd colSpan={2}>2학년</S.BorderRightTd>
            <S.Td>3학년</S.Td>
          </S.TrTitle>
          <S.Tr>
            <SemesterTd
              isGradeSemester={isFirstGradeSmester1}
              setIsGradeSemester={setIsFirstGrade1Semester}
              inputId="1_grade_1"
              semester="1학기"
            />
            <SemesterTd
              isGradeSemester={isFirstGradeSmester2}
              setIsGradeSemester={setIsFirstGrade2Semester}
              inputId="1_grade_2"
              semester="2학기"
            />
            <SemesterTd
              isGradeSemester={isSecondGradeSmester1}
              setIsGradeSemester={setIsSecondGrade1Semester}
              inputId="2_grade_1"
              semester="1학기"
            />
            <SemesterTd
              isGradeSemester={isSecondGradeSmester2}
              setIsGradeSemester={setIsSecondGrade2Semester}
              inputId="2_grade_2"
              semester="2학기"
            />
            <ThirdSemesterTd
              isGradeSemester={isThirdGradeSmester1}
              setIsGradeSemester={setIsThirdGrade1Semester}
            />
          </S.Tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default MissedSemester;
