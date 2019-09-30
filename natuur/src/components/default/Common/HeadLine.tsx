import React, { FC } from "react";

import {
  HeadLineCover,
  HeadLineCoverSubText,
  HeadLineCoverTitle
} from "../../../styles/default";

interface Props {
  subText?: string;
  title: string;
  isClassification?: boolean;
}

const HeadLine: FC<Props> = ({
  subText = "대덕소프트웨어마이스터고등학교",
  title,
  isClassification
}) => (
  <HeadLineCover>
    <HeadLineCoverSubText>{subText}</HeadLineCoverSubText>
    <HeadLineCoverTitle isClassification={isClassification}>
      {title}
    </HeadLineCoverTitle>
  </HeadLineCover>
);

export default HeadLine;
