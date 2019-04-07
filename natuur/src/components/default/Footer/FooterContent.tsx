import React, { FC } from "react";

import {
  FooterCover,
  FooterLogo,
  FooterCopyright,
  FooterExplain,
  FooterCoverNav,
  FooterCoverIcons
} from "../../../styles/Footer";
import {
  FOOTER_ADDRESS,
  FOOTER_ADMINISTRATIVE,
  FOOTER_COPYLIGHT,
  FOOTER_OFFICE,
  FOOTER_REGISTRATION,
  FOOTER_TITLE,
  FACEBOOK_LINK,
  GITHUB_LINK
} from "../../constance";
import FooterLink from "./FooterLink";
import { logo, faceBook, github } from "../../../assets/Footer";

const FooterContent: FC = () => {
  return (
    <FooterCover>
      <FooterLogo src={logo} alt="푸터 로고" />

      <FooterCopyright>{FOOTER_COPYLIGHT}</FooterCopyright>

      <FooterExplain>
        {FOOTER_TITLE}
        <br />
        {FOOTER_ADDRESS}
        <br />
        {FOOTER_OFFICE /* 교무실 */}
        <span>{FOOTER_ADMINISTRATIVE /* 행정실 */}</span>
        <br />
        {FOOTER_REGISTRATION}
      </FooterExplain>

      <FooterCoverNav>
        <FooterCoverIcons>
          <FooterLink
            path={FACEBOOK_LINK}
            imgPath={faceBook}
            imgAlt="페이스북 이동 링크"
            position="45px"
          />
          <FooterLink
            path={GITHUB_LINK}
            imgPath={github}
            imgAlt="깃허브 이동 링크"
            position="1px"
          />
        </FooterCoverIcons>
      </FooterCoverNav>
    </FooterCover>
  );
};

export default FooterContent;
