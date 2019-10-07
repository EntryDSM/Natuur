import React, { FC } from "react";

import MainContentsTitle from "./MainContentsTitle";
import { setDate, formatDate } from "../../../../lib/utils/main/titles";

interface Props {
  periodList: Array<{ title: string; startDate: Date; endDate: Date }>;
  periodListFactor: number;
  remainingPeriod: string;
}

const MainTitles: FC<Props> = ({
  periodList,
  periodListFactor,
  remainingPeriod
}) => {
  const { todayYear, todayMonth, todayDate } = formatDate(setDate());
  const isCheckRemainingDate =
    +new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
      new Date().getHours()
    ) < +periodList[0].startDate;

  const today = `${todayYear}년 ${todayMonth}월 ${todayDate}일`;
  const title = [
    "지금은",
    isCheckRemainingDate ? "대기" : periodList[periodListFactor].title,
    "기간입니다."
  ];
  const subTitle = [
    "오늘은 ",
    today,
    `이며 ${isCheckRemainingDate ? "작성일" : "마감일"}까지 `,
    remainingPeriod,
    " 남았습니다."
  ];

  return (
    <>
      <MainContentsTitle
        fontSize="22px"
        textMargin="17px"
        imfactSize="30px"
        imfactColor="#005c4f"
        imfactMargin="6px"
        noticeText1={title[0]}
        noticeText2={title[1]}
        noticeTextLast={title[2]}
      />
      <MainContentsTitle
        isSubTitle
        fontSize="24px"
        imfactSize="22px"
        imfactColor="#41beb8"
        noticeText1={subTitle[0]}
        noticeText2={subTitle[1]}
        noticeText3={subTitle[2]}
        noticeText4={subTitle[3]}
        noticeTextLast={subTitle[4]}
      />
    </>
  );
};

export default MainTitles;
