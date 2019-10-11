import React, { FC } from "react";

import * as S from "../../styles/Grade";
import HeadLine from "../../components/default/Common/HeadLine";
import Volunteer from "../../components/Grade/volunteer";
import MissedSemester from "../../components/Grade/missedSemester";
import ScoreTable from "../../components/Grade/scoreTable";
import GedScoreTable from "../../components/Grade/GedScoreTable";
import Pagination from "../../components/default/pagination/Pagination";
import { mapStateToProps, mapDispatchToProps } from "./ConnectGrade";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Grade: FC<Props> = ({
  volunteer,
  absent,
  earlyLeave,
  tardy,
  missingClass,
  subjectScores,
  isFirstGradeSmester1,
  isFirstGradeSmester2,
  isSecondGradeSmester1,
  isSecondGradeSmester2,
  isThirdGradeSmester1,
  isGed,
  graduationClassification,
  gedAverageScore,
  setVolunteer,
  setAbsent,
  setEarlyLeave,
  setTardy,
  setMissingClass,
  setIsFirstGrade1Semester,
  setIsFirstGrade2Semester,
  setIsSecondGrade1Semester,
  setIsSecondGrade2Semester,
  setIsThirdGrade1Semester,
  setGedAverageScore,
  setSubjectScores
}) => {
  return (
    <div>
      <S.GradeWrapper>
        <HeadLine subText="2020 입학원서 작성" title="성적 입력" />
        {isGed ? (
          <GedScoreTable
            gedAverageScore={gedAverageScore}
            setGedAverageScore={setGedAverageScore}
          />
        ) : (
          <>
            <Volunteer
              volunteerTime={volunteer}
              setVolunteerTime={setVolunteer}
              absent={absent}
              setAbsent={setAbsent}
              earlyLeave={earlyLeave}
              setEarlyLeave={setEarlyLeave}
              tardy={tardy}
              setTardy={setTardy}
              missingClass={missingClass}
              setMissingClass={setMissingClass}
            />
            <MissedSemester
              isFirstGradeSmester1={isFirstGradeSmester1}
              isFirstGradeSmester2={isFirstGradeSmester2}
              isSecondGradeSmester1={isSecondGradeSmester1}
              isSecondGradeSmester2={isSecondGradeSmester2}
              isThirdGradeSmester1={isThirdGradeSmester1}
              setIsFirstGrade1Semester={setIsFirstGrade1Semester}
              setIsFirstGrade2Semester={setIsFirstGrade2Semester}
              setIsSecondGrade1Semester={setIsSecondGrade1Semester}
              setIsSecondGrade2Semester={setIsSecondGrade2Semester}
              setIsThirdGrade1Semester={setIsThirdGrade1Semester}
              setSubjectScores={setSubjectScores}
              subjectScores={subjectScores}
            />
            <ScoreTable
              graduationClassification={graduationClassification}
              setSubjectScores={setSubjectScores}
              subjectScores={subjectScores}
            />
          </>
        )}
        <Pagination
          prevRouterPath="/personal"
          nextRouterPath="/intro"
          AcceptPagination="grade"
        />
      </S.GradeWrapper>
    </div>
  );
};

export default Grade;
