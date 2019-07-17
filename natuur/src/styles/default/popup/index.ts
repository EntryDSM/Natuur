import styled from "styled-components";
import { Link } from "react-router-dom";

export const PopUpBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 111300;
`;

export const PopUp = styled.div`
  width: 400px;
  height: 450px;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContentCover = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EntryLogo = styled.img`
  width: 210px;
  height: 65px;
`;

export const PopUpStateLogo = styled.img`
  width: 80px;
  height: 80px;
`;

export const LodingGifCover = styled.img`
  width: 48px;
  height: 48px;
`;

export const InputBox = styled.input<{ isCenter?: boolean }>`
  width: 250px;
  height: 40px;
  color: #acc6c9;
  background-color: #f9fbfc;
  box-sizing: border-box;
  padding: 12px 20px;
  font-size: 14px;
  text-align: ${props => (props.isCenter ? "center" : "left")};
  margin-bottom: 10px;
  border: none;
  border-radius: 0px;

  &::placeholder {
    color: #acc6c9;
  }
`;

interface ButtonProps {
  isMiddle?: boolean;
  isSmall?: boolean;
}
export const Button = styled.button<ButtonProps>`
  all: unset;
  display: block;
  height: 40px;
  background: #f3f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #acc6c9;
  cursor: pointer;
  width: ${props =>
    props.isMiddle ? "115px" : props.isSmall ? "75px" : "250px"};
`;

export const Title = styled.p`
  font-size: 24px;
  color: #000000;
`;

interface TextProps {
  isQuestion?: boolean;
  isTitleText?: boolean;
  isLogoText?: boolean;
}
export const Text = styled.p<TextProps>`
  font-size: ${props =>
    props.isQuestion ? "8px" : props.isTitleText ? "12px" : "14px"};
  color: ${props => (props.isQuestion ? "#acc6c9" : "#000000")};
  margin: ${props => props.isTitleText && "18px 0"};
  margin: ${props => props.isLogoText && "20px 0"};
`;

export const PeculiarText = styled.p`
  font-size: 12px;
  color: #acc6c9;
  cursor: pointer;
`;

export const PeculiarLink = styled(Link)`
  font-size: 12px;
  color: #acc6c9;
  cursor: pointer;
`;

export const QuestionBox = styled.div<{ isSmallBox?: boolean }>`
  position: absolute;
  bottom: 58px;
  width: 250px;
  height: ${props => (props.isSmallBox ? "29px" : "40px")};
  border: solid 1px #b8ced1;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleHorizon = styled.div`
  width: 100px;
  height: 0;
  border: solid 1px #91c2ca;
`;

export const ElementCover = styled.div<{ isCheck?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => (props.isCheck ? "40px" : "0px")};
`;

interface LogoCoverProps {
  isPopUpTitle?: boolean;
  isCompleate?: boolean;
}
export const InputCover = styled(ElementCover)`
  flex-direction: column;
`;
export const LogoCover = styled(ElementCover)<LogoCoverProps>`
  margin-bottom: ${props =>
    props.isPopUpTitle ? "8px" : props.isCompleate ? "24px" : "20px"};
`;
export const PeculiarCover = styled(ElementCover)<{ isQuestion?: boolean }>`
  height: 38px;
  flex-direction: column;
  justify-content: space-between;
  position: ${props => props.isQuestion && "absolute"};
  bottom: ${props => props.isQuestion && "90px"};
`;
export const TitleCover = styled(ElementCover)`
  height: 65px;
`;
export const ButtonCover = styled(ElementCover)<{ isLoginButton?: boolean }>`
  margin-bottom: ${props => (props.isLoginButton ? "25px" : "0px")};
  justify-content: space-between;
`;
