import React, { FC } from "react";

import Navigation from "../../../components/default/Header/Navigation";
import { HeaderNav } from "../../../styles/Header";

interface OwnProps {
  accessToken: string;
  userName: string;
}

const Header: FC<OwnProps> = ({ accessToken, userName }) => {
  return (
    <HeaderNav>
      <Navigation
        isActive={accessToken !== "" ? true : false}
        userName={userName}
      />
    </HeaderNav>
  );
};

export default Header;
