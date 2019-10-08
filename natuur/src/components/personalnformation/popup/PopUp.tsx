import React, { FC } from "react";

import * as S from "../../../styles/personallinformation/popup";
import OfficeOfEducationPopUpInput from "./officeOfEducation/OfficeOfEducationInput";
import OfficeOfEducationList from "./officeOfEducation/OfficeOfEducationList";
import AddressInput from "./address/AddressInput";
import AddressList from "./address/AddressList";

interface OwnProps {
  isAddress: boolean;
  addressDocuments: Array<{
    address_name: string;
    address: {
      address_name?: string;
    };
    road_address: {
      address_name?: string;
      zone_no?: string;
    };
  }>;
  isSuccess: boolean;
  searchAddress: ({ query }: { query: string }) => void;
  accessToken: string;
  middleSchoolData: string[];
  schoolSearchStatusCode: number;
  searchSchool: (payload: { accessToken: string; school: string }) => void;
  getAddressData: ({
    zipCode,
    address
  }: {
    zipCode: string;
    address: string;
  }) => void;
  setIsOpenPopUp: (isOpenPopUp: boolean) => void;
  setIsAddress: (isAddress: boolean) => void;
  setMiddleSchool: (payload: { school: string }) => void;
}

const cloasePopUp = (
  setIsOpenPopUp: (isOpenPopUp: boolean) => void,
  setIsAddress: (isAddress: boolean) => void
) => {
  setIsOpenPopUp(false);
  setIsAddress(false);
};

const PopUp: FC<OwnProps> = ({
  isAddress,
  addressDocuments,
  isSuccess,
  searchAddress,
  getAddressData,
  setIsOpenPopUp,
  setIsAddress,
  searchSchool,
  accessToken,
  setMiddleSchool,
  middleSchoolData,
  schoolSearchStatusCode
}) => {
  return (
    <S.PopUpBackground
      onClick={() => cloasePopUp(setIsOpenPopUp, setIsAddress)}
    >
      <S.PopUpWrapper onClick={e => e.stopPropagation()} isAddress={isAddress}>
        {isAddress ? (
          <>
            <AddressInput searchAddress={searchAddress} />
            <AddressList
              addressDocuments={addressDocuments}
              isSuccess={isSuccess}
              getAddressData={getAddressData}
              closePopUp={() => cloasePopUp(setIsOpenPopUp, setIsAddress)}
            />
          </>
        ) : (
          <>
            <OfficeOfEducationPopUpInput
              searchSchool={searchSchool}
              accessToken={accessToken}
            />
            <OfficeOfEducationList
              schoolSearchStatusCode={schoolSearchStatusCode}
              middleSchoolData={middleSchoolData}
              setMiddleSchool={setMiddleSchool}
              closePopUp={() => cloasePopUp(setIsOpenPopUp, setIsAddress)}
            />
          </>
        )}
      </S.PopUpWrapper>
    </S.PopUpBackground>
  );
};

export default PopUp;
