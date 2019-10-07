import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

import EntryLogo from "../../../assets/entry_logo.png";
import * as S from "../../../styles/Header";
import buttonDropdown from "../../../assets/Header/buttonDropdown.png";
import DropDown from "./DropDown";

interface Props {
  userName: string;
  isActive: boolean;
  refreshToken: string;
  logOut: (payload: { refreshToken: string }) => void;
}

const Navigation: FC<Props> = ({
  userName,
  isActive,
  refreshToken,
  logOut
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.NavWrapper>
      <S.WrapperContants>
        <S.ContentsLogo>
          <Link to="/">
            <img
              className="nav__wrapper__contants__logo--img"
              src={EntryLogo}
              alt="EntryDSM 로고"
            />
          </Link>
        </S.ContentsLogo>
        {isActive && (
          <S.ContentsUser onClick={() => setIsOpen(!isOpen)}>
            <S.UserName>{`${userName} 님`}</S.UserName>
            <S.SlideBar src={buttonDropdown} alt="슬라이더" />
            {isOpen && <DropDown logOut={logOut} refreshToken={refreshToken} />}
          </S.ContentsUser>
        )}
      </S.WrapperContants>
    </S.NavWrapper>
  );
};

export default Navigation;
