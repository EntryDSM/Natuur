import React, { FC } from "react";

import * as S from "../../styles/preview";
import Logo from "../../assets/entry_logo.png";

interface OwnProps {
  isShow: boolean;
}

const WaterMark: FC<OwnProps> = ({ isShow }) => (
  <>
    {isShow && (
      <S.WaterMark>
        <S.WrongExplanation>
          * 본 원서(테스트 원서)를 출력하여 실제 접수시 사용시 정상적으로 지원이
          완료되지 않을 수 있습니다.
        </S.WrongExplanation>
        <S.Contents>
          <S.ContentsImg src={Logo} alt="엔트리 로고" />
          본 원서는 Entry4.0에서 제공하는
          <br />
          미리보기 테스트 원서입니다.
        </S.Contents>
        <S.WrongExplanation isLast>
          * 본 원서(테스트 원서)를 출력하여 실제 접수시 사용시 정상적으로 지원이
          완료되지 않을 수 있습니다.
        </S.WrongExplanation>
      </S.WaterMark>
    )}
  </>
);

export default WaterMark;
