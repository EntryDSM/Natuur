import React, { FC } from "react";

import * as S from "../../../styles/preview/applicationForm";
import {
  NOTIFICATION,
  RULE_1,
  RULE_2,
  RULE_3,
  RULE_4,
  RULE_5,
  RULE_6,
  RULE_7
} from "./constance";

const Agreement: FC = () => (
  <>
    <S.SubTitle>개인정보 활용 동의서</S.SubTitle>
    <S.ApplicationConsent>
      <S.SmallFontSizeText>
        {NOTIFICATION}
        <br />
        {RULE_1}
        <br />
        {RULE_2}
        <br />
        {RULE_3}
        <br />
        {RULE_4}
        <br />
        {RULE_5}
        <br />
        {RULE_6}
        <br />
        {RULE_7}
        <br />
      </S.SmallFontSizeText>
    </S.ApplicationConsent>
  </>
);

export default Agreement;
