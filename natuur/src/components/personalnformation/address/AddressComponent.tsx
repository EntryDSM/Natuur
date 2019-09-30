import React, { FC } from "react";

import * as S from "../../../styles/personallinformation";
import InputRow from "../InputRow";
import { AddressContent } from "../../../styles/personallinformation/address";

interface OwnProps {
  zipCode: string;
  address: string;
  detailedAddress: string;
  setDetailedAddress: (payload: { address: string }) => void;
  setIsAddress: (isAddress: boolean) => void;
  setIsOpenPopUp: (isOpenPopUp: boolean) => void;
}

const openPopUp = (
  setIsAddress: (isAddress: boolean) => void,
  setIsOpenPopUp: (isOpenPopUp: boolean) => void
) => {
  setIsAddress(true);
  setIsOpenPopUp(true);
};

const AddressComponent: FC<OwnProps> = ({
  zipCode,
  address,
  detailedAddress,
  setDetailedAddress,
  setIsAddress,
  setIsOpenPopUp
}) => {
  return (
    <InputRow rowTitle="주소" isAddress>
      <AddressContent>
        <S.InlineDiv>
          <S.Input
            type="text"
            value={zipCode || ""}
            inputCase="zipcode"
            readOnly
          />
          <S.Input
            type="text"
            value={address || ""}
            inputCase="address"
            readOnly
          />
          <S.SearchButton
            onClick={() => openPopUp(setIsAddress, setIsOpenPopUp)}
          >
            주소 검색
          </S.SearchButton>
        </S.InlineDiv>
        <S.Input
          type="text"
          value={detailedAddress || ""}
          onChange={({ target: { value } }) =>
            setDetailedAddress({ address: value })
          }
          inputCase="detailedAddress"
        />
      </AddressContent>
    </InputRow>
  );
};

export default AddressComponent;
