import React, { FC, useEffect, useRef } from "react";

import HeadLine from "../../components/default/Common/HeadLine";
import ConnectSelectCategory from "./ConnectSelectCategory";
import * as S from "../../styles/Information";

interface Props {
  updateAppClass(text: string): void;
}

const Info: FC<Props> = ({ updateAppClass }) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      // input did mount logic.
      updateAppClass("info-summary");
    }
  });

  return (
    <div>
      <S.InfoWrapper>
        <HeadLine subText="2020 입학원서 작성" title="전형 구분 선택" />
        <ConnectSelectCategory />
      </S.InfoWrapper>
    </div>
  );
};

export default Info;
