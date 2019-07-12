import React, { FC } from "react";

import Navigation from "../../../components/default/Header/Navigation";
import { HeaderNav } from "../../../styles/Header";
import { getCookie } from "../../../lib";

const Header: FC = () => {
  return (
    <HeaderNav>
      <Navigation
        isActive={getCookie !== "" && getCookie !== null ? true : false}
      />
    </HeaderNav>
  );
};

export default Header;
