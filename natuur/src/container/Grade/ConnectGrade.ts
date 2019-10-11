import { connect } from "react-redux";

import Grade from "./Grade";
import { AppState } from "../../core/redux/store/store";
import {
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
} from "../../core/redux/actions/grade";

export const mapStateToProps = (state: AppState) => ({
  accessToken: state.userReducer.accessToken,
  volunteer: state.gradeReducer.volunteer,
  absent: state.gradeReducer.absent,
  earlyLeave: state.gradeReducer.earlyLeave,
  tardy: state.gradeReducer.tardy,
  missingClass: state.gradeReducer.missingClass,
  gedAverageScore: state.gradeReducer.gedAverageScore,
  subjectScores: state.gradeReducer.subjectScores,
  isFirstGradeSmester1: state.gradeReducer.isFirstGradeSmester1,
  isFirstGradeSmester2: state.gradeReducer.isFirstGradeSmester2,
  isSecondGradeSmester1: state.gradeReducer.isSecondGradeSmester1,
  isSecondGradeSmester2: state.gradeReducer.isSecondGradeSmester2,
  isThirdGradeSmester1: state.gradeReducer.isThirdGradeSmester1,
  graduationClassification: state.infoReducer.graduationClassification,
  isGed: state.infoReducer.isGed,
  ged_grade: state.applicantDocument.ged_grade,
  diligence_grade: state.applicantDocument.diligence_grade,
  school_grade: state.applicantDocument.school_grade
});

export const mapDispatchToProps = dispatch => ({
  setVolunteer: (payload: { volunteer: string }) =>
    dispatch(setVolunteer(payload)),
  setAbsent: (payload: { absent: string }) => dispatch(setAbsent(payload)),
  setEarlyLeave: (payload: { earlyLeave: string }) =>
    dispatch(setEarlyLeave(payload)),
  setTardy: (payload: { tardy: string }) => dispatch(setTardy(payload)),
  setMissingClass: (payload: { missingClass: string }) =>
    dispatch(setMissingClass(payload)),
  setIsFirstGrade1Semester: (payload: { isMissSemester: boolean }) =>
    dispatch(setIsFirstGrade1Semester(payload)),
  setIsFirstGrade2Semester: (payload: { isMissSemester: boolean }) =>
    dispatch(setIsFirstGrade2Semester(payload)),
  setIsSecondGrade1Semester: (payload: { isMissSemester: boolean }) =>
    dispatch(setIsSecondGrade1Semester(payload)),
  setIsSecondGrade2Semester: (payload: { isMissSemester: boolean }) =>
    dispatch(setIsSecondGrade2Semester(payload)),
  setIsThirdGrade1Semester: (payload: { isMissSemester: boolean }) =>
    dispatch(setIsThirdGrade1Semester(payload)),
  setGedAverageScore: (payload: { gedAverageScore: string }) =>
    dispatch(setGedAverageScore(payload)),
  setSubjectScores: (payload: {
    subjectScores?: Array<{
      semester: number;
      subject:
        | "korean"
        | "math"
        | "social"
        | "science"
        | "english"
        | "history"
        | "tech_and_home";
      score: "A" | "B" | "C" | "D" | "E" | "X";
    }>;
  }) => dispatch(setSubjectScores(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grade);
