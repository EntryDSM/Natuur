import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 1140px;
  height: 1020px;
  margin: 0 auto;
`;

export const CategoryList = styled.div`
  width: 100%;
  border-top: solid 1px #5f8a90;
  border-bottom: solid 1px #5f8a90;
`;

export const GradationHorizon = styled.div`
  display: block;
  width: 1140px;
  height: 2px;
  opacity: 0.4;
  background: #5f8a90;
`;

export const TitleBox = styled.div`
  font-size: 20px;
  width: 170px;
  text-align: center;
  box-sizing: border-box;
`;

export const CheckBoxWrapper = styled.div`
  margin-left: 40px;
  height: 100%;
  display: flex;
  align-items: center;
`;

type CheckBoxType =
  | "GED"
  | "SelectType"
  | "SelectRegion"
  | "GraduationClassification"
  | "GraduationYear"
  | "Remarks";
export const CheckBoxItem = styled.div<{ checkBoxCase: CheckBoxType }>`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: ${props => {
    switch (props.checkBoxCase) {
      case "GED":
        return "0px";
      case "SelectType":
        return "90px";
      case "SelectRegion":
        return "123px";
      case "GraduationClassification":
        return "69px";
      case "GraduationYear":
        return "0px";
      case "Remarks":
        return "72px";
      default:
        return "0px";
    }
  }};
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
`;
export const GraduationSelectBox = styled.div<{ isOpen?: boolean }>`
  width: 169px;
  height: ${props => (props.isOpen ? "240px" : "46px")};
  border-radius: 3px;
  border: solid 1px #bccdd0;
  background-color: #ffffff;
  overflow: hidden;
  margin-right: 12px;
  position: absolute;
  top: 50%;
  margin-top: -23px;
  z-index: 5;
`;

export const GraduationSelectAccept = styled.div`
  width: 100%;
  height: 46px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const GraduationSelectHorizon = styled.div`
  width: 133px;
  height: 2px;
  margin: 0 auto;
  background: #bccdd0;
`;

export const GraduationSelecOptionList = styled.div`
  width: 130px;
  height: 170px;
  background: #ffffff;
  font-size: 16px;
  margin-top: 13px;
  color: #000000;
  overflow-y: scroll;
  position: relative;
  left: 50%;
  margin-left: -65px;

  &::-webkit-scrollbar {
    width: 6px;
    background: #8aaaad;
    overflow: hidden;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #6a8184;
  }
`;

export const GraduationSelecOption = styled.div`
  width: 100%;
  height: 19px;
  margin-bottom: 13px;
  letter-spacing: 0.4px;
  cursor: pointer;
`;

export const GraduationText = styled.p`
  color: #000000;
  position: relative;
  letter-spacing: 0.45px;
  font-size: 18px;
  left: 182px;
`;

export const DropDown = styled.label<{
  isSmall?: boolean;
  isDisable?: boolean;
}>`
  width: 0;
  height: 0;
  border-top: solid ${props => (props.isSmall ? "5px" : "10px")};
  ${props => (props.isDisable ? "#cccccc" : "#8aaaad")};
  border-bottom: solid 0 none;
  border-left: solid ${props => (props.isSmall ? "4px" : "8px")} transparent;
  border-right: solid ${props => (props.isSmall ? "4px" : "8px")} transparent;
  margin-left: ${props => props.isSmall && "12px"};
  cursor: pointer;
`;

interface RowWrapperProps {
  isDisable?: boolean;
  isNotUsed?: boolean;
}
export const RowWrapper = styled.div<RowWrapperProps>`
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;
  position: relative;

  ${ExplanationRow} {
    color: ${props => (props.isDisable ? "#cccccc" : "#5f8a90")};
  }
  ${InputTextLabel} {
    color: ${props =>
      props.isNotUsed ? "#000000" : props.isDisable ? "#cccccc" : "#000000"};
  }
  ${CircleLabel} {
    background: ${props => (props.isDisable ? "#f5f5f5" : "none")};
    border: ${props =>
      props.isDisable ? "solid 1px #cccccc" : "solid 1px #bccdd0"};
  }

  ${GraduationSelectBox} {
    border: solid 1px ${props => (props.isDisable ? "#cccccc" : "#bccdd0")};
    background: ${props => props.isNotUsed && "#f5f5f5"};
    color: #cccccc;
  }

  ${GraduationText} {
    color: ${props =>
      props.isNotUsed ? "#000000" : props.isDisable ? "#cccccc" : "#000000"};
  }
`;

export const TypeSelectBox = styled.div`
  width: 248px;
  height: 222px;
  border-radius: 3px;
  border: solid 1px #bccdd0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: absolute;
  top: 30px;
  left: 34px;
  z-index: 5;
`;

export const TypeSelectOption = styled.div`
  width: 100%;
  padding: 9px 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 300;
  color: #000000;
  border-bottom: solid 0.5px #f7f7f7;
  cursor: pointer;
`;
