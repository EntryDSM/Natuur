import React, { FC } from "react";

import Navigation from "../../../components/default/Header/Navigation";
import { HeaderNav } from "../../../styles/Header";

const Header: FC = () => {
  return (
    <HeaderNav>
      <Navigation isActive={sessionStorage.getItem("token") ? true : false} />
    </HeaderNav>
  );
};

export default Header;
