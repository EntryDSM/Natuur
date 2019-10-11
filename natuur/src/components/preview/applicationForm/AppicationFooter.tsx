import React, { FC } from "react";

import * as S from "../../../styles/preview/applicationForm";

interface OwnProps {
  name: string;
  parentsName: string;
}

const AppicationFooter: FC<OwnProps> = ({ name, parentsName }) => (
  <S.Footer>
    <S.LeftAlignText isBold>
      본 입학원서의 개인정보 수집·이용·제공에 동의합니다.
    </S.LeftAlignText>
    <S.RightAlignText>
      지원자 {name} (서명)
      <br />
      보호자 {parentsName} (서명)
    </S.RightAlignText>
    <S.FooterTitle isBold>대덕소프트웨어마이스터고등학교장 귀하</S.FooterTitle>
  </S.Footer>
);

export default AppicationFooter;
