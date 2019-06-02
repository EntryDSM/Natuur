import React, { FC } from "react";

import Navigation from "../../../components/default/Header/Navigation";
import { HeaderNav } from "../../../styles/Header";

const Header: FC = () => {
  return (
    <HeaderNav>
      <Navigation isActive />
    </HeaderNav>
  );
};

export default Header;
