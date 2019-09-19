import React, { FC, useEffect, useRef } from "react";

import * as S from "../../styles/Grade";
import HeadLine from "../../components/default/Common/HeadLine";
import Volunteer from "../../components/Grade/volunteer";
import MissedSemester from "../../components/Grade/missedSemester";
import ScoreTable from "../../components/Grade/scoreTable";
import GedScoreTable from "../../components/Grade/GedScoreTable";
import Pagination from "../../components/default/pagination/Pagination";
import { mapStateToProps, mapDispatchToProps } from "./ConnectGrade";
import { DiligenceType, GradeType } from "../../core/redux/actions/grade";
import { subjectList } from "../../lib/utils/subjectList";

const patchGradeData = async (
  accessToken: string,
  subjectScores: Array<{
    semester: number;
    subject:
      | "korean"
      | "math"
      | "social"
      | "science"
      | "english"
      | "history"
      | "tech_home";
    score: string;
  }>,
  volunteer: number,
  absent: number,
  earlyLeave: number,
  tardy: number,
  missingClass: number,
  patchDiligence: (payload: DiligenceType) => void,
  patchGrade: (payload: GradeType) => void
) => {
  await patchDiligence({
    accessToken,
    volunteer_time: volunteer,
    full_cut_count: absent,
    period_cut_count: earlyLeave,
    late_count: tardy,
    early_leave_count: missingClass
  });
  await patchGrade({ accessToken, subject_scores: subjectScores });
};

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Grade: FC<Props> = ({
  accessToken,
  volunteer,
  absent,
  earlyLeave,
  tardy,
  missingClass,
  gedAverageScore,
  subjectScores,
  isFirstGradeSmester1,
  isFirstGradeSmester2,
  isSecondGradeSmester1,
  isSecondGradeSmester2,
  isThirdGradeSmester1,
  isGed,
  graduationClassification,
  getDiligence,
  patchDiligence,
  getGedGrade,
  patchGedGrade,
  getGrade,
  patchGrade,
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
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      const graduateScores = [...subjectScores];

      if (graduationClassification === "졸업자") {
        if (graduateScores[graduateScores.length - 1].semester === 5) {
          for (const subject of subjectList) {
            graduateScores.push({
              subject,
              score: "A",
              semester: 6
            });
          }
        }
        setSubjectScores({ subjectScores: graduateScores });
      } else {
        setSubjectScores({
          subjectScores: graduateScores.filter(value => value.semester <= 5)
        });
      }
    }
  },        [didMountRef]);

  return (
    <div>
      <S.GradeWrapper>
        <HeadLine subText="2020 입학원서 작성" title="성적 입력" />
        {isGed ? (
          <GedScoreTable
            accessToken={accessToken}
            getGedGrade={getGedGrade}
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
              accessToken={accessToken}
              getDiligence={getDiligence}
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
              accessToken={accessToken}
              graduationClassification={graduationClassification}
              getGrade={getGrade}
              setSubjectScores={setSubjectScores}
              subjectScores={subjectScores}
            />
          </>
        )}
        <Pagination
          connectServer={
            isGed
              ? () =>
                  patchGedGrade({
                    accessToken,
                    ged_average_score: gedAverageScore
                  })
              : () =>
                  patchGradeData(
                    accessToken,
                    subjectScores,
                    volunteer,
                    absent,
                    earlyLeave,
                    tardy,
                    missingClass,
                    patchDiligence,
                    patchGrade
                  )
          }
          prevRouterPath="/personal"
          nextRouterPath="/intro"
          AcceptPagination="grade"
        />
      </S.GradeWrapper>
    </div>
  );
};

export default Grade;
