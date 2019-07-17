import React, { FC } from "react";

import Navigation from "../../../components/default/Header/Navigation";
import { HeaderNav } from "../../../styles/Header";

interface OwnProps {
  accessToken: string;
}

const Header: FC<OwnProps> = ({ accessToken }) => {
  return (
    <HeaderNav>
      <Navigation
        isActive={
          accessToken !== "" ? true : false
        }
      />
    </HeaderNav>
  );
};

export default Header;
