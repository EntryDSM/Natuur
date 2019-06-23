import React, { FC } from "react";

import {
  mainCheckIconDisable,
  mainCheckIconActive
} from "../../../../assets/MainPage";
import IndexItem from "./IndexItem";

interface Props {
  periodList: Array<{ title: string; startDate: Date; endDate: Date }>;
  checkImgList: boolean[];
  timeStempChecker: number;
  setTimeStempChecker(timeStempNumber: number): void;
}

const IndexItemList: FC<Props> = ({
  periodList,
  checkImgList,
  timeStempChecker,
  setTimeStempChecker
}) => (
  <>
    {periodList.map((value, index) => (
      <IndexItem
        title={value.title}
        image={checkImgList[index] ? mainCheckIconActive : mainCheckIconDisable}
        timeStempNumber={index}
        setTimeStempChecker={setTimeStempChecker}
        key={value.title}
        timeStempChecker={timeStempChecker}
      />
    ))}
  </>
);

export default IndexItemList;
