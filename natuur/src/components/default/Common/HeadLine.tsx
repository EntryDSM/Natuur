import React, { FC } from "react";

import {
  HeadLineCover,
  HeadLineCoverSubText,
  HeadLineCoverTitle
} from "../../../styles/default";

interface Props {
  subText?: string;
  title: string;
}

const HeadLine: FC<Props> = ({
  subText = "대덕소프트웨어마이스터고등학교",
  title
}) => (
  <HeadLineCover>
    <HeadLineCoverSubText>{subText}</HeadLineCoverSubText>
    <HeadLineCoverTitle>{title}</HeadLineCoverTitle>
  </HeadLineCover>
);

export default HeadLine;
