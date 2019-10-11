import React, { FC, useRef, useEffect } from "react";

import Wrapper from "../Wrapper";
import VolunteerRow from "./VolunteerRow";
import AttendanceRow from "./AttendanceRow";

interface OwnProps {
  volunteerTime: string;
  setVolunteerTime: (payload: { volunteer: string }) => void;
  absent: string;
  setAbsent: (payload: { absent: string }) => void;
  earlyLeave: string;
  setEarlyLeave: (payload: { earlyLeave: string }) => void;
  tardy: string;
  setTardy: (payload: { tardy: string }) => void;
  missingClass: string;
  setMissingClass: (payload: { missingClass: string }) => void;
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
  setMissingClass
}) => {
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
