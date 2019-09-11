const dateObj = new Date();
const nowYear = dateObj.getFullYear();
const nowMonth = dateObj.getMonth() + 1;
const nowDate = dateObj.getDate();

function formatDate(
  nowMonth: number,
  nowDate: number
): { stringMonth: string; stringDate: string } {
  let stringMonth = "";
  let stringDate = "";

  if (nowMonth < 10) {
    stringMonth = `0${nowMonth}`;
  } else {
    stringMonth = String(nowMonth);
  }

  if (nowDate < 10) {
    stringDate = `0${nowDate}`;
  } else {
    stringDate = String(nowDate);
  }

  return {
    stringMonth,
    stringDate
  };
}

export function returnNowToInlineString(): string {
  const { stringMonth, stringDate } = formatDate(nowMonth, nowDate);
  return `${nowYear}${stringMonth}${stringDate}`;
}

export function returnMonthAndDate(): {
  stringMonth: string;
  stringDate: string;
} {
  const { stringMonth, stringDate } = formatDate(nowMonth, nowDate);

  return { stringMonth, stringDate };
}
