import styled from "styled-components";

export const personalWrapper = styled.div`
  width: 1140px;
  height: 1280px;
  margin: 0 auto;
`;

export const CategoryList = styled.div`
  width: 100%;
  border-top: solid 1px #5f8a90;
  border-bottom: solid 1px #5f8a90;
`;

export const GradationHorizon = styled.div`
  width: 1140px;
  display: block;
  height: 1px;
  opacity: 0.4;
  background: #5f8a90;
`;

export const TitleBox = styled.div`
  font-size: 20px;
  width: 144px;
  text-align: center;
  box-sizing: border-box;
`;

export const CheckBoxWrapper = styled.div`
  margin-left: 40px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const CheckBoxItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 100px;
`;

export const CheckBox = styled.input`
  display: none;
`;

export const SquareLabel = styled.label`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: solid 1px #bccdd0;
  margin-right: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CheckIcon = styled.img`
  width: 12px;
  height: 9px;
  user-select: none;
  object-fit: contain;
  float: right;
`;

export const CircleLabel = styled.label`
  width: 20px;
  height: 20px;
  border: solid 1px #bccdd0;
  border-radius: 10px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AcceptCircle = styled.div`
  width: 12px;
  height: 12px;
  background-color: #7ab8bf;
  border-radius: 6px;
`;

export const InputTextLabel = styled.label`
  font-size: 18px;
  letter-spacing: 0.45px;
  cursor: pointer;
`;

export const ExplanationRow = styled.div`
  font-size: 14px;
  line-height: 86px;
  letter-spacing: 0.7px;
  position: absolute;
  right: 20px;
  color: #5f8a90;
`;

export const SelectAccept = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const SelectHorizon = styled.div`
  height: 1px;
  margin: 0 auto;
  opacity: 0.6;
  background: #bccdd0;
`;

export const SelecOptionList = styled.div`
  width: 100%;
  height: 150px;
  background: #ffffff;
  font-size: 16px;
  color: #000000;
  overflow-y: scroll;
  -ms-overflow-style: none;
  position: relative;
  margin-top: 6px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SelecOption = styled.div`
  width: 100%;
  height: 27px;
  letter-spacing: 0.4px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #d0e5ea;
  }
`;

export const SelectBoxWrapper = styled.div<{ isBig?: boolean }>`
  position: relative;
  height: 40px;
  margin-right: 32px;
  letter-spacing: 0.45px;
  font-size: 18px;
  color: #000000;
  width: ${props => (props.isBig ? "155px" : "103px")};

  & > span {
    position: absolute;
    line-height: 40px;
    right: 0;
  }
`;
interface SelectBoxProp {
  isOpen?: boolean;
  isPopUp?: boolean;
  isBig?: boolean;
}
export const SelectBox = styled.div<SelectBoxProp>`
  width: ${props => (props.isPopUp ? "200px" : props.isBig ? "127px" : "75px")};
  height: ${props => (props.isOpen ? "200px" : "40px")};
  border-radius: 3px;
  border: solid 1px #bccdd0;
  background-color: #ffffff;
  overflow: hidden;
  margin-right: 12px;
  position: ${props => (props.isPopUp ? "default" : "absolute")};
  top: ${props => (props.isPopUp ? "none" : "50%")};
  margin-top: ${props => (props.isPopUp ? "0" : "-20px")};
  z-index: 5;

  ${SelectAccept} {
    padding: ${props => (props.isBig ? "0 20px" : "0 16px")};
    label {
      font-size: ${props => (props.isPopUp ? "13px" : "18px")};
    }
  }

  ${SelectHorizon} {
    width: ${props =>
      props.isBig ? "107px" : props.isPopUp ? "180px" : "6px"};
  }

  ${SelecOption} {
    font-size: ${props => props.isPopUp && "12px"};
    padding: ${props =>
      props.isPopUp ? "0 15px" : props.isBig ? "0 19px" : "0 16px"};
  }
`;

export const DropDown = styled.label`
  width: 0;
  height: 0;
  border-top: solid 10px #8aaaad;
  border-bottom: solid 0 none;
  border-left: solid 8px transparent;
  border-right: solid 8px transparent;
  cursor: pointer;
`;

interface RowWrapperProps {
  isSmall?: boolean;
  isAddress?: boolean;
}
export const RowWrapper = styled.div<RowWrapperProps>`
  width: ${props => (props.isSmall ? "865px" : "100%")};
  height: ${props => (props.isAddress ? "140px" : "76px")};
  display: flex;
  align-items: center;
  position: relative;
`;

export const idPhotoWrapper = styled.div`
  width: 100%;
  display: flex;

  ${GradationHorizon} {
    width: 865px;
  }
`;

interface InputProps {
  isDisable?: boolean;
  inputCase:
    | "name"
    | "studentID"
    | "middle"
    | "parants"
    | "contact"
    | "zipcode"
    | "address"
    | "detailedAddress"
    | "popup"
    | "addressPopUp";
}
export const Input = styled.input<InputProps>`
  width: ${props => {
    switch (props.inputCase) {
      case "name":
        return "150px";
      case "studentID":
        return "56px";
      case "middle":
        return "251px";
      case "parants":
        return "152px";
      case "contact":
        return "251px";
      case "zipcode":
        return "152px";
      case "address":
        return "417px";
      case "detailedAddress":
        return "581px";
      case "popup":
        return "258px";
      case "addressPopUp":
        return "335px";
      default:
        return "0px";
    }
  }};
  margin-right: ${props => props.inputCase === "zipcode" && "12px"};
  border: solid 1px ${props => (props.isDisable ? "#cccccc" : "#bccdd0")};
  background-color: ${props => (props.isDisable ? "#f5f5f5" : "#ffffff")};
  color: ${props => (props.isDisable ? "#cccccc" : "#000000")};
  text-align: ${props => props.inputCase === "studentID" && "center"};
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 16px;
  line-height: 40px;
  box-sizing: border-box;
`;

export const InputCover = styled.div<{ isDisable?: boolean }>`
  font-size: 18px;
  letter-spacing: 0.45px;
  margin-right: 32px;

  ${Input} {
    border: solid 1px ${props => (props.isDisable ? "#cccccc" : "#bccdd0")};
    background-color: ${props => (props.isDisable ? "#f5f5f5" : "#ffffff")};
    color: ${props => (props.isDisable ? "#cccccc" : "#000000")};
  }

  & > span {
    margin-left: 8px;
    color: ${props => (props.isDisable ? "#cccccc" : "#000000")};
  }
`;

export const InlineDiv = styled.div<{ isRoadName?: boolean }>`
  display: flex;
  margin-bottom: ${props => props.isRoadName && "11px"};
`;

interface SearchButtonProp {
  isSmall?: boolean;
  isDisable?: boolean;
}
export const SearchButton = styled.button<SearchButtonProp>`
  all: unset;
  width: ${props => (props.isSmall ? "78px" : "128px")};
  height: 40px;
  margin-left: 16px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: ${props => (props.isDisable ? "#cccccc" : "#79c2ca;")};
  border-radius: 5px;
  border: solid 2px
    ${props =>
      props.isDisable
        ? "rgba(204, 204, 204, 0.5)"
        : "rgba(121, 194, 202, 0.5)"};
  background-color: ${props =>
    props.isDisable ? "rgba(245, 245, 245, 0.3)" : "rgba(248, 252, 253, 0.3)"};
  cursor: pointer;
`;

export const IdPhotoBox = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-left: 1px solid rgba(95, 138, 144, 0.4);
`;

export const IdPhotoInput = styled.input`
  display: none;
`;

export const IdPhotoPictureLabel = styled.label`
  width: 255px;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: solid 2px rgba(121, 194, 202, 0.5);
  background-color: rgba(248, 252, 253, 0.3);
  cursor: pointer;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
  }

  & > div {
    width: 200px;
    height: 126px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
      width: 50px;
      height: 40px;
    }

    div {
      width: 100%;
      height: 50px;
      font-size: 13px;
      letter-spacing: 0.4px;
      color: #000000;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const TextBox = styled.div`
  width: 138px;
  height: 24px;
  border: solid 1px #bccdd0;
  position: relative;
  font-size: 10px;
  line-height: 24px;
  text-align: center;
  margin-left: 12px;
  border-radius: 6px;

  &::before {
    content: "";
    width: 5px;
    height: 5px;
    left: -4px;
    position: absolute;
    top: 50%;
    margin-top: -3px;
    border: solid 1px #bccdd0;
    border-right: 0px;
    border-top: 0px;
    background: #ffffff;
    transform: rotate(45deg);
  }
`;
