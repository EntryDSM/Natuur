const dateObj = new Date();
const nowYear = dateObj.getFullYear();
const nowMonth = dateObj.getMonth() + 1;
const nowDate = dateObj.getDate();

export function returnNowToInlineString(): string {
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

  return `${nowYear}${stringMonth}${stringDate}`;
}
