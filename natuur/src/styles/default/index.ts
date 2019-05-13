import styled from "styled-components";
import { Link } from "react-router-dom";

// HeadLine
export const HeadLineCover = styled.div`
  width: 1140px;
  margin: 0 auto;
  height: 260px;
`;

export const HeadLineCoverSubText = styled.h4`
  padding-top: 125px;
  font-weight: 500;
  font-size: 20px;
  height: 21px;
  line-height: 21px;
  color: #000000;
`;

export const HeadLineCoverTitle = styled.h1`
  font-weight: 500;
  font-size: 36px;
  height: 64.5px;
  line-height: 37px;
  color: #000000;
  padding: 10px 0 15px;
  border-bottom: 2.5px solid #70b1ba;
  box-sizing: border-box;
  letter-spacing: -2px;
  padding-right: 50px;
  width: fit-content;
`;

// CommonButtons
export const ButtonComponent = styled.div`
  width: 1140px;
  height: 25vh;
  margin: 0 auto;
  position: relative;
`;

export const AcceptButtonComponent = styled.div`
  width: 100%;
  position: relative;
`;

export const ButtonComponentCover: any = styled(Link)`
  position: absolute;
  top: 25px;
  width: 150px;
  height: 50px;
  color: ${(props: any) => (props.false ? "#979797" : "#296169")};
  border-radius: 5px;
  background-color: ${(props: any) => (props.false ? "#f7fbfc" : " #f7fbfc")};
  border: 1px solid #5f8a90;
  border-color: ${(props: any) => props.false && "#a7a7a7"};
  outline: none;
  cursor: pointer;
  transition: 0.5s;

  &:active {
    background-color: #d8e6e9;
  }

  left: ${(props: any) => props.prev && 0};
  right: ${(props: any) => props.next && 0};
`;

export const ButtonComponentArrow: any = styled.span`
  font-size: 19px;
  color: ${(props: any) => props.false && "#979797"};
  float: ${(props: any) => (props.prev ? "left" : "right")};
  margin-left: ${(props: any) => props.prev && "13px"};
  margin-right: ${(props: any) => props.next && "13px"};
`;

export const ButtonComponentText: any = styled.span`
  font-size: 18px;
  color: ${(props: any) => props.false && "#979797"};
  float: ${(props: any) => (props.prev ? "right" : "left")};
  margin-top: 2px;
  margin-right: ${(props: any) => props.prev && "14px"};
  margin-left: ${(props: any) => props.next && "14px"};
`;
