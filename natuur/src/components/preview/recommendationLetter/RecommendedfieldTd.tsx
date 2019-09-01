import React, { FC } from "react";

import * as S from "../../../styles/preview/recommendationLetter";

interface OwnProps {
  title: string;
  isMeister?: boolean;
}

const RecommendedfieldTd: FC<OwnProps> = ({ title, isMeister }) => (
  <tr>
    <td>
      <S.BoldText>{title}</S.BoldText>
    </td>
    <S.TdCenter>
      <div>{isMeister && <div />}</div>
    </S.TdCenter>
    <S.TdCenter>
      <div>{!isMeister && isMeister !== undefined && <div />}</div>
    </S.TdCenter>
  </tr>
);

export default RecommendedfieldTd;
