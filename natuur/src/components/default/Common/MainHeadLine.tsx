import React, { FC, memo } from "react";

import {
  MainHeadLineCover,
  MainHeadLineCoverSubText,
  MainHeadLineCoverTitle
} from "../../../styles/Main";

interface Props {
  marginBottom?: string;
  subText?: string;
  title: string;
}

const MainHeadLine: FC<Props> = memo(
  ({
    subText = "대덕소프트웨어마이스터고등학교",
    title,
    marginBottom = "50px"
  }) => (
    <MainHeadLineCover marginBottom={marginBottom}>
      <MainHeadLineCoverSubText>{subText}</MainHeadLineCoverSubText>
      <MainHeadLineCoverTitle>{title}</MainHeadLineCoverTitle>
    </MainHeadLineCover>
  )
);

export default MainHeadLine;
