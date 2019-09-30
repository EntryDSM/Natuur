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
  getApplicantInfo,
  GetApplicantInfoType,
  patchApplicantInfo,
  PatchApplicantInfoType,
  changeApplicantPhoto,
  ChangeApplicantPhotoType,
  getApplicantPhoto
} from "../../core/redux/actions/personal";
import Pagination from "../../components/default/pagination/Pagination";

const mapStateToProps = (state: AppState) => ({
  addressDocuments: state.PersonalReducer.addressData,
  isSuccess: state.PersonalReducer.isSuccess,
  email: state.mainReducer.email,
  accessToken: state.userReducer.accessToken,
  name: state.PersonalReducer.name,
  gender: state.PersonalReducer.gender,
  birthYear: state.PersonalReducer.birthYear,
  birthMonth: state.PersonalReducer.birthMonth,
  birthDate: state.PersonalReducer.birthDate,
  userClass: state.PersonalReducer.userClass,
  studentID: state.PersonalReducer.studentID,
  middleSchool: state.PersonalReducer.middleSchool,
  parentsName: state.PersonalReducer.parentsName,
  schoolContact: state.PersonalReducer.schoolContact,
  parentsContact: state.PersonalReducer.parentsContact,
  userContact: state.PersonalReducer.userContact,
  zipCode: state.PersonalReducer.zipCode,
  address: state.PersonalReducer.address,
  detailedAddress: state.PersonalReducer.detailedAddress
});

const mapDispatchToProps = dispatch => ({
  searchAddress: ({ query }: { query: string }) =>
    dispatch(searchAddress({ query })),
  getApplicantInfo: (payload: GetApplicantInfoType) =>
    dispatch(getApplicantInfo(payload)),
  patchApplicantInfo: (payload: PatchApplicantInfoType) =>
    dispatch(patchApplicantInfo(payload)),
  changeApplicantPhoto: (payload: ChangeApplicantPhotoType) =>
    dispatch(changeApplicantPhoto(payload)),
  getAddressData: (payload: { zipCode: string; address: string }) =>
    dispatch(
      getAddressData({ zipCode: payload.zipCode, address: payload.address })
    ),
  setMiddleSchool: (payload: { school: string }) =>
    dispatch(setMiddleSchool(payload)),
  getApplicantPhoto: (payload: { accessToken: string }) =>
    dispatch(getApplicantPhoto({ accessToken: payload.accessToken }))
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const PersonalInformation: FC<Props> = ({
  addressDocuments,
  searchAddress,
  getApplicantInfo,
  patchApplicantInfo,
  changeApplicantPhoto,
  getApplicantPhoto,
  getAddressData,
  email,
  accessToken,
  isSuccess,
  setMiddleSchool,
  name,
  gender,
  birthYear,
  birthMonth,
  birthDate,
  userClass,
  studentID,
  middleSchool,
  parentsName,
  schoolContact,
  parentsContact,
  userContact,
  zipCode,
  address,
  detailedAddress
}) => {
  const didMountRef = useRef(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [isAddress, setIsAddress] = useState(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getApplicantInfo({ email, accessToken });
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
          connectServer={() =>
            patchApplicantInfo({
              email: { email },
              accessToken: { accessToken },
              payload: {
                applicant_name: name,
                sex: gender,
                birth_date: !!(birthYear && birthMonth && birthDate)
                  ? `${birthYear}-${birthMonth}-${birthDate}`
                  : undefined,
                parent_name: parentsName,
                parent_tel: parentsContact,
                applicant_tel: userContact,
                address: address && `${address}/${detailedAddress}`,
                post_code: zipCode !== "undefined" ? zipCode : undefined
              }
            })
          }
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
