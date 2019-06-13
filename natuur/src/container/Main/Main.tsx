import React, { FC, useRef, useEffect } from "react";

import {
  Mainhider,
  MainPageCover,
  MainContents,
  ContentsSorter
} from "../../styles/Main";
import { MainHeadLine } from "../../components/default/Common";
import MainTitles from "../../components/main/MainTitles";
import { PERIOD_LIST } from "../../components/main/constance";

interface Props {
  updateAppClass(text: string): void;
}

const Main: FC<Props> = ({ updateAppClass }) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      updateAppClass("main-page");
    }
  },        []);
  return (
    <Mainhider>
      <MainPageCover>
        <MainHeadLine title="2020 신입생 모집" />
        <MainContents>
          <ContentsSorter>
            <MainTitles periodList={PERIOD_LIST} />
          </ContentsSorter>
        </MainContents>
      </MainPageCover>
    </Mainhider>
  );
};

export default Main;
