import React, { FC } from "react";

import { IndexCover, IndexTitle, IndexIcon } from "../../../../styles/Main";

interface Props {
  title: string;
  image: string;
  timeStempNumber: number;
  setTimeStempChecker(timeStempNumber: number): void;
}

const IndexItem: FC<Props> = ({
  title,
  image,
  timeStempNumber,
  setTimeStempChecker
}) => (
  <IndexCover onClick={() => setTimeStempChecker(timeStempNumber)}>
    <IndexTitle>{title}</IndexTitle>
    <IndexIcon src={image} alt={image} />
  </IndexCover>
);

export default IndexItem;
