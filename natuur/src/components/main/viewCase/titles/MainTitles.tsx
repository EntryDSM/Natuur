import React, { FC } from "react";

import MainContentsTitle from "./MainContentsTitle";

interface Props {
  periodList: Array<{ title: string; date: string }>;
}

const MainTitles: FC<Props> = ({ periodList }) => {
  const setDate = (): { month: number; day: number } => {
    const newDate = new Date();

    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();

    return { month, day };
  };

  const formatDate = ({
    month,
    day
  }: {
    month: number;
    day: number;
  }): { toDayYear: string; toDayMonth: string; toDayDate: string } => {
    const toDayYear = `${new Date().getFullYear()}`.slice(2);
    const toDayMonth = month < 10 ? `0${month}` : `${month}`;
    const toDayDate = day < 10 ? `0${day}` : `${day}`;

    return { toDayYear, toDayMonth, toDayDate };
  };

  const { toDayYear, toDayMonth, toDayDate } = formatDate(setDate());

  const toDay = `${toDayYear}년 ${toDayMonth}월 ${toDayDate}일`;

  const title1 = ["지금은", periodList[0].title, "기간입니다."];
  const title2 = ["오늘은 ", toDay, "이며 마감일까지 ", "00일", " 남았습니다."];

  return (
    <>
      <MainContentsTitle
        fontSize="22px"
        textMargin="17px"
        imfactSize="30px"
        imfactColor="#005c4f"
        imfactMargin="6px"
        noticeText1={title1[0]}
        noticeText2={title1[1]}
        noticeTextLast={title1[2]}
      />
      <MainContentsTitle
        isSubTitle
        fontSize="24px"
        imfactSize="22px"
        imfactColor="#41beb8"
        noticeText1={title2[0]}
        noticeText2={title2[1]}
        noticeText3={title2[2]}
        noticeText4={title2[3]}
        noticeTextLast={title2[4]}
      />
    </>
  );
};

export default MainTitles;
