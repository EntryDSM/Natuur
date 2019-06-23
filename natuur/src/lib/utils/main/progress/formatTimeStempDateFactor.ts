export default function formatTimeStempDateFactor(
  todayYear: number,
  todayMonth: number,
  todayDate: number,
  todayHours: number,
  PERIOD_LIST: Array<{
    endDate: Date;
    startDate: Date;
    title: string;
  }>
): number {
  let periodListFactor = -1;

  const getDuringPeriod = (today, start, end) => {
    return today >= start && today <= end;
  };

  PERIOD_LIST.forEach((value, index) => {
    const isDuringPeriod = getDuringPeriod(
      +new Date(todayYear, todayMonth, todayDate, todayHours),
      value.startDate,
      value.endDate
    );

    if (isDuringPeriod) {
      periodListFactor = index;
    }
  });

  return periodListFactor;
}
