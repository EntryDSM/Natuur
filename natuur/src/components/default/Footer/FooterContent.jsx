import React from "react";

import {
  FooterCover,
  FooterLogo,
  FooterCopyright,
  FooterExplain,
  FooterCoverNav,
  FooterCoverIcons
} from "../../../styles/Footer";
import FooterLink from "./FooterLink";
import { Logo, FaceBook, Github } from "../../../assets/Footer";

const FooterContent = () => {
  return (
    <FooterCover class="footer-cover">
      <FooterLogo src={Logo} alt="푸터 로고" class="footer-cover__logo" />

      <FooterCopyright class="footer-cover__copyright">
        ⓒ 2018 Entry
      </FooterCopyright>

      <FooterExplain class="footer-cover__explain">
        개인정보 처리방침 | 이용약관
        <br />
        (34111)대전광역시 유성구 가정북로 76(장동 23-9)
        <br />
        교무실 : 042-866-8822 / Fax : 042-867-9900
        <span class="footer-cover__explain--admin">
          행정실 : 042-866-8885 / Fax : 042-863-4308
        </span>
        <br />
        사업자 등록 번호 314-83-01600
      </FooterExplain>

      <FooterCoverNav class="footer-cover__navigation">
        <FooterCoverIcons class="footer-cover__icon">
          <FooterLink
            path="https://www.facebook.com/entrydsm"
            imgPath={FaceBook}
            imgAlt="페이스북 이동 링크"
            position="45px"
          />
          <FooterLink
            path="https://github.com/Jaws-bar/Entry3.0-EntrySystem"
            imgPath={Github}
            imgAlt="깃허브 이동 링크"
            position="1px"
          />
        </FooterCoverIcons>
      </FooterCoverNav>
    </FooterCover>
  );
};

export default FooterContent;
