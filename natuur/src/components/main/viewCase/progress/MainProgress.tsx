import React, { FC } from "react";

import IndexItemsBox from "./IndexItemsBox";
import ProgressBar from "./ProgressBar";
import { ProgressCover, ProgressIndex } from "../../../../styles/Main";

interface Props {
  periodList: Array<{ title: string; date: number }>;
  checkImgList: boolean[];
  progressWidth: number;
  setTimeStempChecker(timeStempNumber: number): void;
}

const MainProgress: FC<Props> = ({
  periodList,
  checkImgList,
  setTimeStempChecker,
  progressWidth
}) => {
  return (
    <ProgressCover>
      <ProgressIndex>
        <IndexItemsBox
          periodList={periodList}
          checkImgList={checkImgList}
          setTimeStempChecker={setTimeStempChecker}
        />
      </ProgressIndex>
      <ProgressBar progressWidth={progressWidth} />
    </ProgressCover>
  );
};

export default MainProgress;
