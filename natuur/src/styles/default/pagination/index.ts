import styled from "styled-components";
import { Link } from "react-router-dom";

export const PaginationWrapper = styled.div`
  width: 100%;
  height: 54px;
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Button = styled(Link)`
  display: block;
  width: 168px;
  height: 54px;
  border-radius: 5px;
  border: solid 2px rgba(121, 194, 202, 0.5);
  background-color: rgba(248, 252, 253, 0.3);
  display: flex;
  justify-content: space-between;
  padding: 16px 22px 19px 24px;
  box-sizing: border-box;
`;

export const ButtonContent = styled.span`
  font-size: 20px;
  line-height: 1.05;
  color: rgba(121, 194, 202, 0.8);
`;

export const ButtonArrow = styled.img`
  width: 8px;
  height: 16px;
  opacity: 0.8;
`;

export const PaginationButtonWrapper = styled.div`
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PaginationButton = styled(Link)<{ actived?: "isActive" }>`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.16);
  background-color: ${props =>
    props.actived === "isActive" ? "#79c2ca" : "rgba(121, 194, 202, 0.2)"};
`;
