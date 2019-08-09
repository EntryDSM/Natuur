import React, { FC } from "react";

import * as S from "../../../../styles/personallinformation/popup";
import { InlineDiv } from "../../../../styles/personallinformation";

interface OwnProps {
  addressDocuments: Array<{
    address_name: string;
    address: {
      address_name: string;
    };
    road_address: {
      address_name: string;
      zone_no: string;
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

const AddressList: FC<OwnProps> = ({
  addressDocuments,
  isSuccess,
  getAddressData,
  closePopUp
}) => {
  return (
    <S.AddressItemList>
      {isSuccess &&
        addressDocuments.length === 0 &&
        "주소를 정확히 입력해주세요"}
      {addressDocuments.map(
        value =>
          value.address_name &&
          value.road_address && (
            <S.AddressItem
              onClick={() =>
                setAddressData(
                  () =>
                    getAddressData({
                      zipCode: value.road_address.zone_no,
                      address: value.road_address.address_name
                    }),
                  closePopUp
                )
              }
              key={value.address_name}
            >
              <S.AddressItemContent>
                <InlineDiv isRoadName>
                  <S.ItemTitle>도로명</S.ItemTitle>
                  <S.ItemText>{value.road_address.address_name}</S.ItemText>
                </InlineDiv>
                <InlineDiv>
                  <S.ItemTitle>지번</S.ItemTitle>
                  <S.ItemText>{value.address.address_name}</S.ItemText>
                </InlineDiv>
              </S.AddressItemContent>
              {value.road_address.zone_no}
            </S.AddressItem>
          )
      )}
    </S.AddressItemList>
  );
};

export default AddressList;
