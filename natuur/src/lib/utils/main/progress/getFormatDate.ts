export default function getFormatDate(remainingPeriod: number): string {
  const dateRemainingReriod = Math.floor(remainingPeriod);
  const hourRemainingPeriod = remainingPeriod * 24;
  let formatPeriod: string;
  let isHourMode = false;

  if (remainingPeriod < 1) {
    isHourMode = true;
  }

  if (isHourMode) {
    formatPeriod =
      hourRemainingPeriod < 10
        ? `0${hourRemainingPeriod}시간`
        : `${hourRemainingPeriod}시간`;
  } else {
    formatPeriod =
      dateRemainingReriod < 10
        ? `0${dateRemainingReriod}일`
        : `${dateRemainingReriod}일`;
  }

  return formatPeriod;
}
