import React, { FC } from "react";

import { FooterContainer } from "../../../styles/Footer";
import FooterContent from "../../../components/default/Footer/FooterContent";

const Footer: FC = () => (
  <FooterContainer>
    <FooterContent footerNavigationIsActive={[1, 0, 0]} />
  </FooterContainer>
);

export default Footer;
