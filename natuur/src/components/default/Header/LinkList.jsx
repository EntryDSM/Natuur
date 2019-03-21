import React from "react";
import { Link } from "react-router-dom";

import { ContentListLink } from "../../../styles/Header";

const LinkList = ({
  path,
  target,
  content,
  external = false,
  isLogin = false
}) => (
  /* contentListLink의 isLogin은 Styled-component에 해당. */
  <ContentListLink isLogin={isLogin}>
    {isLogin /* 로그인이 되어있다면 span태그 */ ? (
      <span>{content}</span>
    ) : external /* 로그인이 아니라면 a태그 */ ? (
      <a href={path} target={target}>
        {content}
      </a>
    ) : (
      <Link to={path}>{content}</Link>
    )}
  </ContentListLink>
);

export default LinkList;
