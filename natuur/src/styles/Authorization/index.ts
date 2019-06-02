import styled, { StyledProps } from "styled-components";

// Authorization
export const Authorization = styled.div``;

export const AuthorizationWrapper = styled.div`
  width: 1140px;
  height: 1065px;
  margin: 0 auto;
`;

// AcceptTerms
export const AcceptTermsComponent = styled.div``;

export const AcceptTermsBox = styled.div`
  position: relative;
  height: 300px;
  background: #eff7f8;
  background: -webkit-linear-gradient(
    left,
    transparent 0%,
    #eff7f8 50%,
    transparent 100%
  );

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    background: -webkit-linear-gradient(
      left,
      transparent 0%,
      #5f8a90 50%,
      transparent 100%
    );
  }
  &::after {
    bottom: 0;
  }
`;

export const AcceptTermsBoxWapper = styled.div`
  position: relative;
  top: 20px;
  padding: 21px 18px 19px 22px;
  background-color: #fff;
`;

export const AcceptTermsWapperContents = styled.div`
  width: 1100px;
  height: 220px;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: 0.1px;
  overflow-y: scroll;
`;

export const AcceptTermsContentsTitle = styled.span`
  font-size: 19px;
  color: #328086;
`;

// PrivacyCheckBox
export const PrivacyCheckBoxComponent = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-right: 44px;
`;

export const PrivacyCheckBoxInput = styled.input`
  display: none;
`;

export const PrivacyCheckBoxLabel = styled.label<{ checkedState?: boolean }>`
  width: 22px;
  height: 22px;
  background-color: ${props => (props.checkedState ? "#799da1" : "#b9b9b9")};
  border-radius: 50px;
  position: relative;
  margin-right: 5px;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  line-height: 22px;
  text-align: center;
`;

export const PrivacyCheckBoxText = styled.label`
  cursor: pointer;
`;

// InformationInputBox
export const InfomationInputBoxCoverWapper = styled.div`
  position: relative;
  height: 75px;
  display: flex;
  align-items: center;
`;
export const GradationHorizon = styled.div`
  display: block;
  width: 1140px;
  height: 1px;
`;

export const InfomationInputBoxWapperTitle = styled.div`
  position: relative;
  display: inline-block;
  width: 148px;
  height: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 75px;
  float: left;
`;

export const InfomationInputBoxWapperInputSpace = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  height: 40px;
`;

export const InformationInputSpaceArea = styled.input`
  height: 40px;
  font-size: 18px;
  padding: 0 16px;
  color: #26484c;
  display: inline-block;
  overflow: hidden;

  &::placeholder {
    font-weight: 300;
  }
`;

interface InputBoxCoverProps {
  readonly isDisable?: boolean;
  readonly width?: string;
}
export const InfomationInputBoxCover = styled.div<InputBoxCoverProps>`
  position: relative;
  width: 1140px;
  height: 226px;
  border-top: 1px solid #5f8a90;
  border-bottom: 1px solid #5f8a90;
  border-color: ${props => props.isDisable && "#a7a7a7"};

  ${GradationHorizon} {
    background: ${props =>
      props.isDisable
        ? "-webkit-linear-gradient(left, transparent 0%, #a7a7a7 50%, transparent 100%)"
        : "-webkit-linear-gradient(left, transparent 0%, #5f8a90 50%, transparent 100%)"};
  }

  ${InfomationInputBoxWapperTitle} {
    color: ${props => (props.isDisable ? "rgba(0, 0, 0, 0.3)" : "#000")};
  }

  ${InformationInputSpaceArea} {
    width: ${props => (props.width ? `${props.width}px` : "366px")};
    ${props => props.isDisable && "border: 1px solid rgba(112, 112, 112, 0.3)"};
    background-color: ${props => (props.isDisable ? "#fcfcfc" : "#fafdfe")};

    &::placeholder {
      color: ${props => (props.isDisable ? "#e2e2e2" : "#acbec1")};
    }
  }
`;

export const InformationInputSpaceCheckMark = styled.img`
  position: absolute;
  right: 10px;
`;

export const InformationInputSpaceWrong = styled.div`
  display: inline-block;
  position: relative;
  top: -2px;
  left: 10px;
  width: 148px;
  height: 25px;
  padding: 0 12px;
  background: #ffffff;
  border-radius: 3px;
  border: #799da1 solid 1px;
  font-size: 10px;
  line-height: 25px;
  color: #26484c;
  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 5px 4px 5px 0;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    left: -4px;
    top: 7px;
  }
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 5px 4px 5px 0;
    border-color: transparent #799da1;
    width: 0;
    z-index: 0;
    left: -5px;
    top: 7px;
  }
`;

export const InformationInputSpaceWarning = styled.span`
  position: absolute;
  font-size: 14px;
  top: 30.5px;
  right: 23px;
  color: #939393;
`;
