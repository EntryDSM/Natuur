import React, { FC, useRef, useEffect } from "react";

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
  setFile: (file: string) => void;
  file: string;
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
  setMiddleSchool,
  zipCode,
  address,
  email,
  accessToken,
  imagePath,
  file,
  setFile,
  personalInformation,
  getAddressData,
  isOpen,
  setIsOpen
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!isOpen.personal) {
        const {
          name,
          sex,
          birth_date,
          parent_name,
          parent_tel,
          applicant_tel,
          address,
          post_code,
          student_number,
          school_name,
          school_tel
        } = personalInformation;

        setName({ name });
        setGender({ gender: sex });
        setBirthDayYear(birth_date.split("-")[0]);
        setBirthDayMonth(birth_date.split("-")[1]);
        setBirthDayDate(birth_date.split("-")[2]);
        setClass({ class: student_number.slice(1, 3) });
        setStudentID({ studentID: student_number.slice(3, 5) });
        setMiddleSchool({ school: school_name });
        setParentsName({ name: parent_name });
        setSchoolContact({ contact: school_tel });
        setParentsContact({ contact: parent_tel });
        setUserContact({ contact: applicant_tel });
        getAddressData({ address, zipCode: post_code });
      }
    }
    return () => setIsOpen({ pageName: "personal", isOpen: true });
  },        []);

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
        setMiddleSchool={setMiddleSchool}
        email={email}
        accessToken={accessToken}
        changeApplicantPhoto={changeApplicantPhoto}
        imagePath={imagePath}
        file={file}
        setFile={setFile}
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
