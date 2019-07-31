import { formatOperateDay } from "..";

function getPeriodDateOfProgress(
  PERIOD_LIST: Array<{
    endDate: Date;
    startDate: Date;
    title: string;
  }>,
  periodListFactor: number,
  isPastTimeMode?: boolean
): number {
  const periodListOfStartDate =
    PERIOD_LIST[periodListFactor >= 0 ? periodListFactor : 0].startDate;

  const startDateByPeriod = +new Date(
    periodListOfStartDate.getFullYear(),
    periodListOfStartDate.getMonth(),
    periodListOfStartDate.getDate()
  );

  return formatOperateDay(
    +new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ) - (isPastTimeMode ? startDateByPeriod : +new Date("10/21/2019"))
  );
}

function getPeriodPartOfToday(
  periodDateOfStartProgress: number,
  startChecker: number,
  endChecker: number
): boolean {
  return (
    periodDateOfStartProgress >= startChecker &&
    periodDateOfStartProgress <= endChecker
  );
}

function getDefaultProgressWidth(
  PERIOD_LIST: Array<{
    endDate: Date;
    startDate: Date;
    title: string;
  }>,
  periodListFactor: number
): number {
  const periodDateOfStartProgress = getPeriodDateOfProgress(
    PERIOD_LIST,
    periodListFactor,
    false
  );

  try {
    if (getPeriodPartOfToday(periodDateOfStartProgress, 0, 6)) {
      return 0;
    }
    if (getPeriodPartOfToday(periodDateOfStartProgress, 7, 10)) {
      return periodDateOfStartProgress >= 10 ? 6 : 7;
    }
    if (getPeriodPartOfToday(periodDateOfStartProgress, 11, 16)) {
      return periodDateOfStartProgress >= 15 ? 9 : 11;
    }
    if (getPeriodPartOfToday(periodDateOfStartProgress, 17, 18)) {
      return 17;
    }
    if (getPeriodPartOfToday(periodDateOfStartProgress, 18, 20)) {
      return 20;
    }
  } catch (error) {
    return;
  }
}

export default function getPastTime(
  PERIOD_LIST: Array<{
    endDate: Date;
    startDate: Date;
    title: string;
  }>,
  periodListFactor: number
): number {
  return (
    getDefaultProgressWidth(PERIOD_LIST, periodListFactor) +
    getPeriodDateOfProgress(PERIOD_LIST, periodListFactor, true)
  );
}
