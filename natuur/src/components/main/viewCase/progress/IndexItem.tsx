import React, { FC, useCallback } from "react";

import { IndexCover, IndexTitle, IndexIcon } from "../../../../styles/Main";

interface Props {
  title: string;
  image: string;
  timeStempNumber: number;
  timeStempChecker: number;
  setTimeStempChecker(timeStempNumber: number): void;
}

const IndexItem: FC<Props> = ({
  title,
  image,
  timeStempNumber,
  timeStempChecker,
  setTimeStempChecker
}) => {
  const boundSetTimeStempChecker = useCallback(
    () => setTimeStempChecker(timeStempNumber),
    []
  );

  return (
    <IndexCover
      onClick={timeStempChecker >= 0 ? boundSetTimeStempChecker : null}
    >
      <IndexTitle>{title}</IndexTitle>
      <IndexIcon src={image} alt={image} />
    </IndexCover>
  );
};

export default IndexItem;
