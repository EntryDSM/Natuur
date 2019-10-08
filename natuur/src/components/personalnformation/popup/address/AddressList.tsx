import React, { FC } from "react";

import * as S from "../../../../styles/personallinformation/popup";
import { InlineDiv } from "../../../../styles/personallinformation";

interface OwnProps {
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
  getAddressData: ({
    zipCode,
    address
  }: {
    zipCode: string;
    address: string;
  }) => void;
  closePopUp: () => void;
}

const setAddressData = (getAddressData: () => void, closePopUp: () => void) => {
  getAddressData();
  closePopUp();
};

const checkNullAndUndefinedType = (
  data: string | Object | undefined | null
): boolean => {
  if (data === undefined || data === null) {
    return false;
  }

  return true;
};

const AddressList: FC<OwnProps> = ({
  addressDocuments,
  isSuccess,
  getAddressData,
  closePopUp
}) => {
  return (
    <S.AddressItemList>
      {addressDocuments.map((value, index) => {
        const { road_address, address } = value;
        if (
          checkNullAndUndefinedType(road_address) &&
          checkNullAndUndefinedType(address)
        ) {
          return (
            <S.AddressItem
              onClick={() =>
                setAddressData(
                  () =>
                    getAddressData({
                      zipCode: road_address.zone_no,
                      address: road_address.address_name
                    }),
                  closePopUp
                )
              }
              key={index}
            >
              <S.AddressItemContent>
                <InlineDiv isRoadName>
                  <S.ItemTitle>도로명</S.ItemTitle>
                  <S.ItemText>
                    {road_address.address_name
                      ? road_address.address_name
                      : "지역 정보가 없습니다."}
                  </S.ItemText>
                </InlineDiv>
                <InlineDiv>
                  <S.ItemTitle>지번</S.ItemTitle>
                  <S.ItemText>
                    {address.address_name
                      ? address.address_name
                      : "지역 정보가 없습니다."}
                  </S.ItemText>
                </InlineDiv>
              </S.AddressItemContent>
              {checkNullAndUndefinedType(road_address) && road_address.zone_no}
            </S.AddressItem>
          );
        }
      })}
    </S.AddressItemList>
  );
};

export default AddressList;
