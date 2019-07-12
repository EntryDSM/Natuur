export const formatOperateDay = (operatorDay: number) =>
  operatorDay / 1000 / 60 / 60 / 24;

export const setDateComtrolStatements = (
  PERIOD_LIST: Array<{
    endDate: Date;
    startDate: Date;
    title: string;
  }>
): { first: boolean; second: boolean; third: boolean } => {
  const firstStopPoint = PERIOD_LIST[1];
  const secondStopPoint = PERIOD_LIST[3];
  const lastStopPoint = PERIOD_LIST[4];

  if (
    +new Date() > +firstStopPoint.startDate &&
    +new Date() < +new Date("10/28/2019")
  ) {
    return { first: true, second: false, third: false };
  }

  if (
    +new Date() > +secondStopPoint.startDate &&
    +new Date() < +new Date("11/03/2019")
  ) {
    return { first: false, second: true, third: false };
  }

  if (
    +new Date() > +lastStopPoint.startDate &&
    +new Date() < +new Date("11/07/2019")
  ) {
    return { first: false, second: false, third: true };
  }

  return { first: false, second: false, third: false };
};

export const isDateControlStatements = (
  PERIOD_LIST: Array<{
    endDate: Date;
    startDate: Date;
    title: string;
  }>,
  isPresentEndPoint: { first: boolean; second: boolean; third: boolean }
): boolean => {
  const firstItem = PERIOD_LIST[0];
  const secondItem = PERIOD_LIST[1];
  const lastItem = PERIOD_LIST[4];

  if (
    (+new Date() > +firstItem.endDate && +new Date() < +secondItem.startDate) ||
    +new Date() > +lastItem.endDate ||
    isPresentEndPoint.first ||
    isPresentEndPoint.second ||
    isPresentEndPoint.third
  ) {
    return false;
  }

  return true;
};

export function getTimeStempDate(
  periodList: Array<{ endDate: Date; startDate: Date; title: string }>
): string[] {
  const application = periodList[0].title;
  const successfulCandidate = periodList[4].title;

  function getKoreanDayData(dayDate: number): string {
    const koreanDate = ["일", "월", "화", "수", "목", "금", "토"];

    return koreanDate[dayDate];
  }

  const result = periodList.map((value, index) => {
    const { startDate, endDate, title } = value;

    const yearDate = startDate.getFullYear();
    const startMonthDate = startDate.getMonth() + 1;
    const startDateDate = startDate.getDate();
    const startDayDate = startDate.getDay();
    const startHourDate = startDate.getHours();
    const endMonthDate = endDate.getMonth() + 1;
    const endDateDate = endDate.getDate();
    const endDayDate = endDate.getDay();
    const endHourDate = endDate.getHours();

    if (title === application || title === successfulCandidate) {
      return `${yearDate}.${startMonthDate}.${startDateDate} (${getKoreanDayData(
        startDayDate
      )}) 0${startHourDate}:00 ~ ${yearDate}.${endMonthDate}.${endDateDate} (${getKoreanDayData(
        endDayDate
      )}) ${endHourDate}:00`;
    }

    return `${yearDate}.${startMonthDate}.${startDateDate} (${getKoreanDayData(
      startDayDate
    )})`;
  });

  return result;
}
