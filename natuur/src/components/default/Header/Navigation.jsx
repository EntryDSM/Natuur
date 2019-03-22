import React from "react";
import { Link } from "react-router-dom";

import EntryLogo from "../../../assets/entry_logo.png";
import {
  NavWrapper,
  WrapperContants,
  ContentsLogo,
  ContentList
} from "../../../styles/Header";
import { QUESTION_ANSWER_PAGE_LINK, NOTICE_PAGE_LINK } from "../../constance";
import LinkList from "./LinkList";

const Navigation = () => {
  return (
    <NavWrapper>
      <WrapperContants>
        <ContentsLogo>
          <Link to="/">
            <img
              className="nav__wrapper__contants__logo--img"
              src={EntryLogo}
              alt="EntryDSM 로고"
            />
          </Link>
        </ContentsLogo>
        <ContentList>
          <LinkList
            path={NOTICE_PAGE_LINK}
            target="_blank"
            content="공지사항"
            external={true}
          />
          <LinkList
            path={QUESTION_ANSWER_PAGE_LINK}
            target="_blank"
            content="Q&A"
            external={true}
          />
          <LinkList path="/info-summary" content="전형요강" />
          <LinkList path="/" content="모집일정" />
          <LinkList isLogin={true} content={"코드봐야함ㅎ"} />
        </ContentList>
      </WrapperContants>
    </NavWrapper>
  );
};

export default Navigation;
