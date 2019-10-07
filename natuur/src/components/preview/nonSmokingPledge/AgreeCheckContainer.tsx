import React, { FC } from "react";

import * as S from "../../../styles/preview/nonSmokingPledge";
import { AGREE_TITLE } from "./constance";

const AgreeCheckContainer: FC = () => (
  <>
    <S.AgreeCheckBoxTitle>
      ※ <p>{AGREE_TITLE}</p>
    </S.AgreeCheckBoxTitle>
    <S.AgreeCheckBox>
      <div>개인정보 수집·이용 동의</div>
      <div>
        <p>
          <S.CheckBox />예
          <S.CheckBox ml={30} /> 아니오
        </p>
      </div>
    </S.AgreeCheckBox>
  </>
);

export default AgreeCheckContainer;
