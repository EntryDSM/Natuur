export const YEAR_LIST = [
  "2007",
  "2006",
  "2005",
  "2004",
  "2003",
  "2002",
  "2001",
  "2000",
  "1999",
  "1998"
];

const month = [];
for (let i = 1; i <= 12; i++) {
  month.push(`${i}`);
}
export const MONTH_LIST = month;

const date = [];
for (let i = 1; i <= 31; i++) {
  date.push(`${i}`);
}
export const DATE_LIST = date;
