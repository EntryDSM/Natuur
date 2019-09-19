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
  accessToken: string;
  getDiligence: (payload: { accessToken: string }) => void;
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
  accessToken,
  getDiligence
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getDiligence({ accessToken });
    }
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
