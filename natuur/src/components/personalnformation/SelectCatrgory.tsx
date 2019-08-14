import React, { FC } from "react";

import * as S from "../../styles/personallinformation";
import IdPhotoComponent from "./idPhoto/IdPhotoComponent";
import ContactComponent from "./contact/ContactComponent";
import AddressComponent from "./address/AddressComponent";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../container/PersonalInformation/ConnectSelectCategory";
import ParentsRow from "./ParentsRow";

interface OwnProps {
  setIsOpenPopUp: (isOpenPopUp: boolean) => void;
  setIsAddress: (isAddress: boolean) => void;
  changeApplicantPhoto: (payload: {
    email: { email: string };
    accessToken: { accessToken: string };
    payload: { file: File };
  }) => void;
  name: string;
  gender: string;
  birthYear: string;
  birthMonth: string;
  birthDate: string;
  userClass: string;
  studentID: string;
  middleSchool: string;
  parentsName: string;
  schoolContact: string;
  parentsContact: string;
  userContact: string;
  zipCode: string;
  address: string;
  detailedAddress: string;
  email: string;
  accessToken: string;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;

const SelectCategory: FC<Props> = ({
  isGed,
  setIsOpenPopUp,
  setIsAddress,
  changeApplicantPhoto,
  name,
  setName,
  gender,
  setGender,
  birthYear,
  setBirthDayYear,
  birthMonth,
  setBirthDayMonth,
  birthDate,
  setBirthDayDate,
  userClass,
  setClass,
  studentID,
  setStudentID,
  middleSchool,
  parentsName,
  setParentsName,
  schoolContact,
  setSchoolContact,
  parentsContact,
  setParentsContact,
  userContact,
  setUserContact,
  detailedAddress,
  setDetailedAddress,
  zipCode,
  address,
  email,
  accessToken,
  imagePath
}) => {
  return (
    <S.CategoryList>
      <IdPhotoComponent
        isGed={isGed}
        name={name}
        gender={gender}
        birthYear={birthYear}
        birthMonth={birthMonth}
        birthDate={birthDate}
        userClass={userClass}
        studentID={studentID}
        middleSchool={middleSchool}
        setName={setName}
        setGender={setGender}
        setBirthYear={setBirthDayYear}
        setBirthMonth={setBirthDayMonth}
        setBirthDate={setBirthDayDate}
        setClass={setClass}
        setStudentID={setStudentID}
        setIsOpenPopUp={setIsOpenPopUp}
        email={email}
        accessToken={accessToken}
        changeApplicantPhoto={changeApplicantPhoto}
        imagePath={imagePath}
      />
      <S.GradationHorizon />

      <ParentsRow name={parentsName} setName={setParentsName} />
      <S.GradationHorizon />

      <ContactComponent
        isGed={isGed}
        schoolContact={schoolContact}
        parentsContact={parentsContact}
        userContact={userContact}
        setSchoolContact={setSchoolContact}
        setParentsContact={setParentsContact}
        setUserContact={setUserContact}
      />

      <AddressComponent
        zipCode={zipCode}
        address={address}
        detailedAddress={detailedAddress}
        setDetailedAddress={setDetailedAddress}
        setIsAddress={setIsAddress}
        setIsOpenPopUp={setIsOpenPopUp}
      />
    </S.CategoryList>
  );
};

export default SelectCategory;
