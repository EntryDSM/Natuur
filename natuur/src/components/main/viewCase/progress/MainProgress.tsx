import React, { FC } from "react";

import IndexItemList from "./IndexItemList";
import ProgressBar from "./ProgressBar";
import { ProgressCover, ProgressIndex } from "../../../../styles/Main";

interface Props {
  periodList: Array<{ title: string; startDate: Date; endDate: Date }>;
  checkImgList: boolean[];
  progressWidth: number;
  timeStempChecker: number;
  setTimeStempChecker(timeStempNumber: number): void;
}

const MainProgress: FC<Props> = ({
  periodList,
  checkImgList,
  timeStempChecker,
  setTimeStempChecker,
  progressWidth
}) => {
  return (
    <ProgressCover>
      <ProgressIndex>
        <IndexItemList
          periodList={periodList}
          checkImgList={checkImgList}
          timeStempChecker={timeStempChecker}
          setTimeStempChecker={setTimeStempChecker}
        />
      </ProgressIndex>
      <ProgressBar progressWidth={progressWidth} />
    </ProgressCover>
  );
};

export default MainProgress;
