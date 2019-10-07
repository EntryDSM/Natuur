import { formatOperateDay } from "..";
import { getPastTime } from ".";

function checkHandler(
  progressWidth: number,
  stopProgressPlace: number,
  checkImgList: boolean[]
): boolean[] {
  if (
    progressWidth === stopProgressPlace * 1 ||
    progressWidth === stopProgressPlace * 6 ||
    progressWidth === stopProgressPlace * 10 ||
    progressWidth === stopProgressPlace * 15 ||
    progressWidth === stopProgressPlace * 20
  ) {
    let temp = 0;

    return checkImgList.map((value, index) => {
      if (value) {
        temp = index + 1;
        return true;
      }
      if (temp === index) {
        return true;
      }

      return false;
    });
  }
  return checkImgList;
}

export default function timeChangeChecker(
  periodListFactor: number,
  setProgressWidth: (prgoressWidth: number) => void,
  setCheckImgList: (checkImgList: boolean[]) => void,
  PERIOD_LIST: Array<{
    endDate: Date;
    startDate: Date;
    title: string;
  }>
): void {
  const stopIncrementProgressStandard =
    100 / formatOperateDay(+new Date("11/08/2019") - +new Date("10/21/2019"));

  let progressWidth = 0;
  const pastTime = getPastTime(PERIOD_LIST, periodListFactor);

  const stopProgressPlace = Math.floor(stopIncrementProgressStandard);
  const increaseOfDay = stopProgressPlace * pastTime;

  let checkImgList = [false, false, false, false, false];

  if (
    +new Date() >
    +PERIOD_LIST[periodListFactor >= 0 ? periodListFactor : 0].startDate
  ) {
    const incrementProgressWidth = setInterval(() => {
      checkImgList = checkHandler(
        progressWidth,
        stopProgressPlace,
        checkImgList
      );

      setCheckImgList(checkImgList);

      if (progressWidth >= increaseOfDay || progressWidth === 100) {
        clearInterval(incrementProgressWidth);
        return;
      }

      progressWidth += 1;
      setProgressWidth(progressWidth);
    },                                         25);
  }
}
