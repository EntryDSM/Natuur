import React, { FC } from "react";

import * as S from "../../../styles/preview/nonSmokingPledge";
import WaterMark from "../WaterMark";
import InformationTable from "./InformationTable";
import NonSmokingBody from "./NonSmokingBody";

const NonSmokingPledge: FC = () => {
  return (
    <S.NonSmokingPledge>
      <WaterMark isShow={true} />
      <div id="mainDiv">
        <S.SubContainer id="subDiv">
          <S.Title>금 연 동 의 서</S.Title>
          <InformationTable />
          <NonSmokingBody />
        </S.SubContainer>
      </div>
    </S.NonSmokingPledge>
  );
};

export default NonSmokingPledge;
