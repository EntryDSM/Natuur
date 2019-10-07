import React, { FC } from "react";

import * as S from "../../../styles/personallinformation";
import { NameRow, GenderRow, BirthRow, StudentRow, MiddleRow } from ".";
import IdPhotoWrapper from "./IdPhotoWrapper";

interface OwnProps {
  email: string;
  accessToken: string;
  isGed: boolean;
  name: string;
  gender: string;
  birthYear: string;
  birthMonth: string;
  birthDate: string;
  userClass: string;
  studentID: string;
  middleSchool: string;
  imagePath: string;
  file: string;
  setFile: (file: string) => void;
  setName: (payload: { name: string }) => void;
  setGender: (payload: { gender: string }) => void;
  setBirthYear: (year: string) => void;
  setBirthMonth: (month: string) => void;
  setBirthDate: (date: string) => void;
  setClass: (payload: { class: string }) => void;
  setStudentID: (payload: { studentID: string }) => void;
  setIsOpenPopUp: (isOpenPopUp: boolean) => void;
  setMiddleSchool: (payload: { school: string }) => void;
  changeApplicantPhoto: (payload: { accessToken: string; file: File }) => void;
}

const IdPhotoComponent: FC<OwnProps> = ({
  isGed,
  name,
  gender,
  birthYear,
  birthMonth,
  birthDate,
  userClass,
  studentID,
  middleSchool,
  imagePath,
  file,
  setFile,
  setName,
  setGender,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
  setClass,
  setStudentID,
  setIsOpenPopUp,
  setMiddleSchool,
  email,
  accessToken,
  changeApplicantPhoto
}) => {
  return (
    <S.idPhotoWrapper>
      <div>
        <NameRow name={name} setName={setName} />
        <S.GradationHorizon />

        <GenderRow gender={gender} setGender={setGender} />
        <S.GradationHorizon />

        <BirthRow
          birthYear={birthYear}
          birthMonth={birthMonth}
          birthDate={birthDate}
          setBirthYear={setBirthYear}
          setBirthMonth={setBirthMonth}
          setBirthDate={setBirthDate}
        />
        <S.GradationHorizon />

        <StudentRow
          isGed={isGed}
          userClass={userClass}
          studentID={studentID}
          setClass={setClass}
          setStudentID={setStudentID}
        />
        <S.GradationHorizon />

        <MiddleRow
          isGed={isGed}
          middleSchool={middleSchool}
          setMiddleSchool={setMiddleSchool}
          setIsOpenPopUp={setIsOpenPopUp}
        />
      </div>
      <IdPhotoWrapper
        changeApplicantPhoto={changeApplicantPhoto}
        email={email}
        accessToken={accessToken}
        imagePath={imagePath}
        file={file}
        setFile={setFile}
      />
    </S.idPhotoWrapper>
  );
};

export default IdPhotoComponent;
