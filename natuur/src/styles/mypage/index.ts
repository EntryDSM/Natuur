import styled from "styled-components";
import { Link } from "react-router-dom";

import textBox from "../../assets/authorization/Textbox.png";

export const MyPageWrapper = styled.div`
  width: 1140px;
  height: 1020px;
  margin: 0 auto;
`;

export const RowListWrapper = styled.div`
  width: 100%;
  border-top: solid 1px #5f8a90;
  border-bottom: solid 1px #5f8a90;
`;

export const RowWrapper = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #000000;
`;

export const RowTitle = styled.div`
  width: 144px;
  text-align: center;
`;

export const RowContent = styled.p`
  margin-left: 36px;
`;

export const Horizon = styled.div`
  width: 100%;
  height: 2px;
  opacity: 0.4;
  background: #5f8a90;
`;

export const PageListWrapper = styled.div`
  margin-top: 76px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageItemWrapper = styled.div<{ isActive: boolean }>`
  width: 126px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: #588589;

  & > p {
    margin-bottom: 10px;
  }

  & > hr {
    all: unset;
    width: 100%;
    height: 2px;
    background: #65bbb7;
    margin-bottom: 32px;
  }

  & > div {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: ${props => (props.isActive ? "#65bbb7" : "#ffb988")};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PagenationHorizon = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;

  div {
    width: 10px;
    height: 10px;
    opacity: 0.4;
    background-color: #65bbb7;
    border-radius: 5px;
  }
`;

export const PreviewButton = styled(Link)<{ issuccess?: "true" | "false" }>`
  all: unset;
  width: 125px;
  height: 40px;
  border-radius: 5px;
  border: solid 0.5px
    ${props =>
      props.issuccess === "true" ? "#5f8a90" : "rgba(112,112,112,0.3)"};
  background-color: ${props =>
    props.issuccess === "true" ? "#f7fbfc" : "#fcfcfc"};
  color: ${props =>
    props.issuccess === "true" ? "#79c2ca" : "rgba(0,0,0,0.3)"};
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  margin: 0 20px 0 auto;
  cursor: ${props => (props.issuccess === "true" ? "pointer" : "default")};
  position: relative;

  &:hover {
    ${props => props.issuccess === "true" && "background: #e4f6fb"};
    ${props =>
      props.issuccess === "false" &&
      `&::after {
        content: "원서 제출 후 출력이 가능합니다.";
        background-image: url(${textBox});
        width: 210px;
        background-repeat: round;
        height: 36px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        font-size: 13px;
        position: absolute;
        top: -40px;
        left: -40px;
        line-height: 26px;
        color: #000;
    }`};
  }
`;
