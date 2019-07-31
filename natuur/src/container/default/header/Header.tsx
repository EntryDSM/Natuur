import React, { FC } from "react";

import Navigation from "../../../components/default/Header/Navigation";
import * as S from "../../../styles/Header";

interface OwnProps {
  accessToken: string;
  userName: string;
}

const Header: FC<OwnProps> = ({ accessToken, userName }) => {
  return (
    <S.HeaderNav>
      <Navigation
        isActive={accessToken !== "" ? true : false}
        userName={userName}
      />
    </S.HeaderNav>
  );
};

export default Header;
