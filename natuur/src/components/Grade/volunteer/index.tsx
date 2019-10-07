import React, { FC, useRef, useEffect } from "react";

import Wrapper from "../Wrapper";
import VolunteerRow from "./VolunteerRow";
import AttendanceRow from "./AttendanceRow";

interface OwnProps {
  volunteerTime: number;
  setVolunteerTime: (payload: { volunteer: number }) => void;
  absent: number;
  setAbsent: (payload: { absent: number }) => void;
  earlyLeave: number;
  setEarlyLeave: (payload: { earlyLeave: number }) => void;
  tardy: number;
  setTardy: (payload: { tardy: number }) => void;
  missingClass: number;
  setMissingClass: (payload: { missingClass: number }) => void;
  diligenceGrade: {
    volunteer_time: number;
    full_cut_count: number;
    period_cut_count: number;
    late_count: number;
    early_leave_count: number;
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
  isGed: boolean;
}

const Volunteer: FC<OwnProps> = ({
  volunteerTime,
  absent,
  earlyLeave,
  tardy,
  missingClass,
  setVolunteerTime,
  setAbsent,
  setEarlyLeave,
  setTardy,
  setMissingClass,
  diligenceGrade,
  isOpen,
  setIsOpen,
  isGed
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!isOpen.grade) {
        if (diligenceGrade) {
          const {
            volunteer_time,
            full_cut_count,
            period_cut_count,
            late_count,
            early_leave_count
          } = diligenceGrade;

          setVolunteerTime({ volunteer: volunteer_time });
          setAbsent({ absent: full_cut_count });
          setEarlyLeave({ earlyLeave: early_leave_count });
          setTardy({ tardy: late_count });
          setMissingClass({ missingClass: period_cut_count });
        }
      }
    }
    return () => setIsOpen({ pageName: "grade", isOpen: true });
  },        []);

  return (
    <Wrapper title={`봉사 & 출석`}>
      <table>
        <tbody>
          <VolunteerRow
            setVolunteerTime={setVolunteerTime}
            volunteerTime={volunteerTime}
          />
          <AttendanceRow
            absent={absent}
            setAbsent={setAbsent}
            earlyLeave={earlyLeave}
            setEarlyLeave={setEarlyLeave}
            tardy={tardy}
            setTardy={setTardy}
            missingClass={missingClass}
            setMissingClass={setMissingClass}
          />
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Volunteer;
