export const PERIOD_LIST = [
  { title: "원서작성", date: +new Date("10/24/2019 17:0:0") },
  { title: "1차 발표", date: +new Date("11/01/2019") },
  { title: "면접", date: +new Date("11/03/2019") },
  { title: "2차 발표", date: +new Date("11/07/2019") },
  { title: "합격자 등록", date: +new Date("11/13/2019 17:0:0") }
];

export const TIME_STEMP_DATE = [
  "2019.10.21 (월) 09:00 ~ 2019.10.24 (목) 17:00",
  "2019.10.28 (월) ~ 2019.11.01 (금)",
  "2019.11.01 (금) ~ 2019.11.03 (일)",
  "2019.11.03 (일) ~ 2019.11.07 (목)",
  "2019.11.07 (목) ~ 11.13 (수) 17:00"
];

export const TIME_STEMP_VIEW_OPEN = [
  {
    endDate: new Date("10/24/2019 17:0:0"),
    startDate: new Date("10/21/2019 9:0:0")
  },
  {
    endDate: new Date("11/01/2019"),
    startDate: new Date("10/28/2019")
  },
  {
    endDate: new Date("11/03/2019"),
    startDate: new Date("11/01/2019 0:0:1")
  },
  {
    endDate: new Date("11/07/2019"),
    startDate: new Date("11/03/2019 0:0:1")
  },
  {
    endDate: new Date("11/13/2019 17:0:0"),
    startDate: new Date("11/07/2019")
  }
];

export const TIME_STEMP_VIEW_CLOSE_FISISH = [
  new Date("10/28/2019 9:0:0"),
  new Date("11/03/2019"),
  new Date("11/07/2019")
];
