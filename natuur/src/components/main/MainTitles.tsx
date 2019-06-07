import React, { FC } from "react";

import MainContentsTitle from "./MainContentsTitle";

interface Props {
  periodList: Array<{ title: string; date: string }>;
}

const MainTitles: FC<Props> = ({ periodList }) => {
  const newDate = new Date();
  const year = String(newDate.getFullYear()).slice(2);
  const monthData = newDate.getMonth() + 1;
  const month = monthData < 10 ? `0${monthData}` : monthData;
  const dateData = newDate.getDate();
  const date = dateData < 10 ? `0${dateData}` : dateData;

  const toDayDate = `${year}년 ${month}월 ${date}일`;

  const title1 = ["지금은", periodList[0].title, "기간입니다."];
  const title2 = [
    "오늘은 ",
    toDayDate,
    "이며 마감일까지 ",
    "00일 00분",
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
        text={title1}
      />
      <MainContentsTitle
        fontSize="24px"
        imfactSize="22px"
        imfactColor="#41beb8"
        isSubTitle
        text={title2}
      />
    </>
  );
};

export default MainTitles;
