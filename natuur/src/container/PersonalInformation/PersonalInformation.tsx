import React, { FC, useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import HeadLine from "../../components/default/Common/HeadLine";
import ConnectSelectCategory from "./ConnectSelectCategory";
import PopUp from "../../components/personalnformation/popup/PopUp";
import * as S from "../../styles/personallinformation";
import { AppState } from "../../core/redux/store/store";
import {
  searchAddress,
  getAddressData,
  setMiddleSchool,
  setSchoolCode,
  changeApplicantPhoto,
  ChangeApplicantPhotoType,
  getApplicantPhoto,
  searchSchool
} from "../../core/redux/actions/personal";
import Pagination from "../../components/default/pagination/Pagination";

const mapStateToProps = (state: AppState) => ({
  addressDocuments: state.PersonalReducer.addressData,
  isSuccess: state.PersonalReducer.isSuccess,
  email: state.userReducer.userEmail,
  accessToken: state.userReducer.accessToken,
  name: state.PersonalReducer.name,
  gender: state.PersonalReducer.gender,
  birthYear: state.PersonalReducer.birthYear,
  birthMonth: state.PersonalReducer.birthMonth,
  birthDate: state.PersonalReducer.birthDate,
  userClass: state.PersonalReducer.userClass,
  studentID: state.PersonalReducer.studentID,
  middleSchool: state.PersonalReducer.middleSchool,
  middleSchoolData: state.PersonalReducer.middleSchoolData,
  parentsName: state.PersonalReducer.parentsName,
  schoolContact: state.PersonalReducer.schoolContact,
  parentsContact: state.PersonalReducer.parentsContact,
  userContact: state.PersonalReducer.userContact,
  zipCode: state.PersonalReducer.zipCode,
  address: state.PersonalReducer.address,
  detailedAddress: state.PersonalReducer.detailedAddress,
  schoolSearchStatusCode: state.PersonalReducer.schoolSearchStatusCode
});

const mapDispatchToProps = dispatch => ({
  searchAddress: ({ query }: { query: string }) =>
    dispatch(searchAddress({ query })),
  changeApplicantPhoto: (payload: ChangeApplicantPhotoType) =>
    dispatch(changeApplicantPhoto(payload)),
  getAddressData: (payload: { zipCode: string; address: string }) =>
    dispatch(
      getAddressData({ zipCode: payload.zipCode, address: payload.address })
    ),
  setMiddleSchool: (payload: { school: string }) =>
    dispatch(setMiddleSchool(payload)),
  setSchoolCode: (payload: { code: string }) =>
    dispatch(setSchoolCode(payload)),
  getApplicantPhoto: (payload: { accessToken: string }) =>
    dispatch(getApplicantPhoto({ accessToken: payload.accessToken })),
  searchSchool: (payload: { accessToken: string; school: string }) =>
    dispatch(searchSchool(payload))
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const PersonalInformation: FC<Props> = ({
  addressDocuments,
  searchAddress,
  changeApplicantPhoto,
  getApplicantPhoto,
  getAddressData,
  email,
  accessToken,
  isSuccess,
  setMiddleSchool,
  setSchoolCode,
  searchSchool,
  name,
  gender,
  birthYear,
  birthMonth,
  birthDate,
  userClass,
  studentID,
  middleSchool,
  middleSchoolData,
  parentsName,
  schoolContact,
  parentsContact,
  userContact,
  zipCode,
  address,
  detailedAddress,
  schoolSearchStatusCode
}) => {
  const didMountRef = useRef(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [isAddress, setIsAddress] = useState(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getApplicantPhoto({ accessToken });
    }
  },        []);

  return (
    <>
      {isOpenPopUp && (
        <PopUp
          setIsOpenPopUp={setIsOpenPopUp}
          isAddress={isAddress}
          setIsAddress={setIsAddress}
          addressDocuments={addressDocuments}
          searchAddress={searchAddress}
          getAddressData={getAddressData}
          isSuccess={isSuccess}
          searchSchool={searchSchool}
          accessToken={accessToken}
          setMiddleSchool={setMiddleSchool}
          middleSchoolData={middleSchoolData}
          setSchoolCode={setSchoolCode}
          schoolSearchStatusCode={schoolSearchStatusCode}
        />
      )}
      <S.personalWrapper>
        <HeadLine subText="2020 입학원서 작성" title="인적 사항" />
        <ConnectSelectCategory
          setIsOpenPopUp={setIsOpenPopUp}
          setIsAddress={setIsAddress}
          name={name}
          gender={gender}
          birthYear={birthYear}
          birthMonth={birthMonth}
          birthDate={birthDate}
          userClass={userClass}
          studentID={studentID}
          middleSchool={middleSchool}
          parentsName={parentsName}
          schoolContact={schoolContact}
          parentsContact={parentsContact}
          userContact={userContact}
          zipCode={zipCode}
          address={address}
          detailedAddress={detailedAddress}
          email={email}
          accessToken={accessToken}
          changeApplicantPhoto={changeApplicantPhoto}
        />
        <Pagination
          prevRouterPath="/info-summary"
          nextRouterPath="/grade"
          AcceptPagination="personal"
        />
      </S.personalWrapper>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInformation);
