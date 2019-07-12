import { formatOperateDay } from "..";

export default function getRemainingPerio(
  todayYear: number,
  todayMonth: number,
  todayDate: number,
  todayHours: number,
  periodListFactor: number,
  PERIOD_LIST: Array<{
    endDate: Date;
    startDate: Date;
    title: string;
  }>
): number {
  const isCheckRemainingDate =
    +new Date(todayYear, todayMonth, todayDate, todayHours) <
    +PERIOD_LIST[0].startDate;

  const checkRemainingPeriod = getRemainingPeriodByMode({ hasHours: false });
  const remainingPeriod = getRemainingPeriodByMode({ hasHours: true });

  function getRemainingPeriodByMode({
    hasHours = false
  }: {
    hasHours?: boolean;
  }) {
    let isHourChecker = 0;

    if (hasHours) {
      isHourChecker = checkRemainingPeriod < 1 ? todayHours : 0;
    }

    const result = formatOperateDay(
      (isCheckRemainingDate
        ? +PERIOD_LIST[periodListFactor >= 0 ? periodListFactor : 0].startDate
        : +PERIOD_LIST[periodListFactor >= 0 ? periodListFactor : 0].endDate) -
        +new Date(todayYear, todayMonth, todayDate, hasHours && isHourChecker)
    );

    return result;
  }

  return remainingPeriod;
}
