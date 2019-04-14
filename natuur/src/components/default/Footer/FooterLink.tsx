import React, { FC } from "react";

import { LinkIcon } from "../../../styles/Footer";

interface Props {
  path: string;
  imgPath: string;
  imgAlt: string;
  position: string;
}

const FooterLink: FC<Props> = ({ path, imgPath, imgAlt, position }) => (
  <a href={path} target="_blank">
    <LinkIcon src={imgPath} alt={imgAlt} position={position} />
  </a>
);

export default FooterLink;
