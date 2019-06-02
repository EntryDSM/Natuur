import React, { FC } from "react";
import { Link } from "react-router-dom";
import buttonDropdown from "../../../assets/Header/buttonDropdown.png";

import EntryLogo from "../../../assets/entry_logo.png";
import {
  NavWrapper,
  WrapperContants,
  ContentsLogo,
  ContentsUser,
  UserName,
  SlideBar
} from "../../../styles/Header";

interface Props {
  userName?: string;
  isActive: boolean;
}

const Navigation: FC<Props> = ({ userName, isActive }) => {
  return (
    <NavWrapper>
      <WrapperContants>
        <ContentsLogo>
          <Link to="/">
            <img
              className="nav__wrapper__contants__logo--img"
              src={EntryLogo}
              alt="EntryDSM 로고"
            />
          </Link>
        </ContentsLogo>
        {isActive && (
          <ContentsUser>
            <UserName>{`${userName} 님`}</UserName>
            <SlideBar src={buttonDropdown} alt="슬라이더" />
          </ContentsUser>
        )}
      </WrapperContants>
    </NavWrapper>
  );
};

export default Navigation;
