import React, { FC } from "react";

import {
  FooterCover,
  FooterLogo,
  FooterCopyright,
  FooterExplain,
  FooterCoverNav,
  FooterCoverIcons,
  FooterFooterNavigationCover,
  FooterNavigation
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
} from "../Constance";
import FooterLink from "./FooterLink";
import { logo, faceBook, github } from "../../../assets/Footer";

interface Props {
  footerNavigationIsActive: number[];
}

const FooterContent: FC<Props> = ({ footerNavigationIsActive }) => {
  return (
    <FooterCover>
      <FooterLogo src={logo} alt="푸터 로고" />

      <FooterCopyright>{FOOTER_COPYLIGHT}</FooterCopyright>

      <FooterExplain>
        {FOOTER_TITLE}
        <br />
        {FOOTER_ADDRESS}
        <br />
        {FOOTER_OFFICE/* 교무실 */}
        <span>{FOOTER_ADMINISTRATIVE/* 행정실 */}</span>
        <br />
        {FOOTER_REGISTRATION}
      </FooterExplain>

      <FooterCoverNav>
        <FooterFooterNavigationCover>
          <FooterNavigation istitle isactive={footerNavigationIsActive[0]}>
            Entry 소개
          </FooterNavigation>
          <FooterNavigation
            href="https://www.notion.so/junukimdev/e084056b67d34dcfa71e8e78143ee4cd"
            target="_blank"
            margintop="14px"
            isactive={footerNavigationIsActive[1]}
          >
            시스템 소개
          </FooterNavigation>
          <FooterNavigation
            href="https://www.notion.so/junukimdev/Entry-05231333090d4b5196f14ae4a19f1acc"
            target="_blank"
            margintop="14px"
            isactive={footerNavigationIsActive[2]}
          >
            개발자 소개
          </FooterNavigation>
        </FooterFooterNavigationCover>
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
