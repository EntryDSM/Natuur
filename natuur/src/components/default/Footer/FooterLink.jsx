import React from "react";

import { LinkIcon } from "../../../styles/Footer";

const FooterLink = ({ path, imgPath, imgAlt, position }) => (
  <a href={path} target="_blank">
    <LinkIcon src={imgPath} alt={imgAlt} position={position} />
  </a>
);

export default FooterLink;