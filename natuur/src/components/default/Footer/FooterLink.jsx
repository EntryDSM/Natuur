import React from "react";

import { LinkIcons } from "../../../styles/Footer";

const FooterLink = ({ path, imgPath, imgAlt, position }) => (
  <a href={path} target="_blank">
    <LinkIcons src={imgPath} alt={imgAlt} position={position} />
  </a>
);

export default FooterLink;
