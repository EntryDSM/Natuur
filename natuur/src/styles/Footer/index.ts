import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  position: relative;
  height: 200px;
  background-color: #78c2ca;
`;

export const FooterCover = styled.div`
  width: 1140px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 20px 0;
  margin: 0 auto;
  position: relative;
`;

export const FooterLogo = styled.img`
  width: 100px;
  display: block;
  margin-top: 13px;
`;

export const FooterCopyright = styled.span`
  font-size: 10px;
  color: #fff;
  display: block;
  margin-top: 5px;
`;

export const FooterExplain = styled.p`
  font-size: 10px;
  line-height: 1.9;
  color: #fff;
  margin-top: 18px;

  /* 행정실 */
  & span {
    padding-left: 16px;
  }
`;

export const FooterCoverNav = styled.div`
  position: absolute;
  width: 330px;
  height: 138px;
  top: 20px;
  right: 0;
`;

export const FooterFooterNavigationCover = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
`;

export const FooterNavigation = styled.a<{
  margintop?: string;
  isactive?: number;
  istitle?: boolean;
}>`
  font-size: 14px;
  color: #ffffff;
  margin-top: ${props => props.margintop};
  opacity: ${props => (props.isactive ? "1" : "0.6")};
  ${props => props.istitle && "cursor: default"};

  &:link {
    color: #ffffff;
  }

  &:visited {
    color: #ffffff;
  }
`;

export const FooterCoverIcons = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const LinkIcon = styled.img<{ position?: string }>`
  position: absolute;
  width: 30px;
  margin-top: -25px;
  opacity: 0.75;
  transition: 0.5s;
  right: ${props => props.position};

  &:hover {
    opacity: 1;
  }
`;
