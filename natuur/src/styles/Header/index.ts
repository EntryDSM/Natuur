import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNav = styled.div`
  box-shadow: 0 2px 10px 0 rgba(99, 141, 147, 0.05);
`;

export const NavWrapper = styled.nav`
  height: 60px;
  margin: 0 auto;
`;

export const WrapperContants = styled.div`
  position: relative;
  width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

export const ContentsLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    height: 30px;

    & > img {
      height: 30px;
    }
  }
`;

export const ContentsUser = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: auto;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-size: 14px;
  color: #000000;
  margin-right: 3px;
`;

export const SlideBar = styled.img`
  width: 10px;
  height: 6px;
  object-fit: contain;
`;

export const HeaerDropDownBox = styled.div`
  width: 120px;
  height: 120px;
  box-shadow: 0 2px 10px 0 rgba(99, 141, 147, 0.16);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 60px;
  cursor: context-menu;

  & > div {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Button = styled(Link)`
  all: unset;
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
`;

export const Horizon = styled.div`
  width: 43px;
  height: 1px;
  background: #79c2ca;
`;
