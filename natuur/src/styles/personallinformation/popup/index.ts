import styled from "styled-components";

export const PopUpBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const PopUpWrapper = styled.div<{ isAddress: boolean }>`
  width: 500px;
  height: 600px;
  background-color: #ffffff;
  padding: ${props => (props.isAddress ? "36px 32px 65px" : "50px 38px 20px")};
  box-sizing: border-box;
`;

export const OfficeOfEducationPopUpInputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`;

export const AddressInputWrapper = styled.div`
  width: 100%;
  height: 79px;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.4px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SearchButton = styled.div`
  width: 85px;
  height: 40px;
  margin-left: 16px;
  border-radius: 5px;
  background-color: #bccdd0;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.4px;
  color: #2a4649;
  cursor: pointer;
`;

export const AddressItemList = styled.div`
  width: 100%;
  max-height: 370px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  margin-top: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AddressItem = styled.div`
  width: 100%;
  padding: 16px 0;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  border-bottom: 1px solid rgba(95, 138, 144, 0.1);
`;

export const AddressItemContent = styled.div`
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.25px;
`;

export const ItemTitle = styled.span`
  margin-right: 8px;
  color: #000000;
`;

export const ItemText = styled.p`
  width: 280px;
`;
