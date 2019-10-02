const dateObj = new Date();
const nowYear = dateObj.getFullYear();
const nowMonth = dateObj.getMonth() + 1;
const nowDate = dateObj.getDate();

export function precededByZeroBeforeOneDigitForString(
  pNumber?: number
): string {
  let numberToString = "";

  if (pNumber < 10) {
    numberToString = `0${pNumber}`;
  } else {
    numberToString = String(pNumber);
  }

  return numberToString;
}

export function returnNowToInlineString(): string {
  const stringMonth = precededByZeroBeforeOneDigitForString(nowMonth);
  const stringDate = precededByZeroBeforeOneDigitForString(nowDate);
  return `${nowYear}${stringMonth}${stringDate}`;
}

export function returnMonthAndDate(): {
  stringMonth: string;
  stringDate: string;
} {
  const stringMonth = precededByZeroBeforeOneDigitForString(nowMonth);
  const stringDate = precededByZeroBeforeOneDigitForString(nowDate);

  return { stringMonth, stringDate };
}
