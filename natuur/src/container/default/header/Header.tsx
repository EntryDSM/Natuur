import React, { FC } from "react";

import Navigation from "../../../components/default/Header/Navigation";
import * as S from "../../../styles/Header";

interface OwnProps {
  accessToken: string;
  refreshToken: string;
  userName: string;
  logOut: (payload: { refreshToken: string }) => void;
  isLogOut: boolean;
}

const Header: FC<OwnProps> = ({
  accessToken,
  refreshToken,
  userName,
  logOut,
  isLogOut
}) => {
  return (
    <S.HeaderNav>
      <Navigation
        isActive={accessToken !== "" ? true : false}
        userName={userName}
        logOut={logOut}
        isLogOut={isLogOut}
        refreshToken={refreshToken}
      />
    </S.HeaderNav>
  );
};

export default Header;
