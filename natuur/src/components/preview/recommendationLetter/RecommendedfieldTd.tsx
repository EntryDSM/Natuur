import React, { FC } from "react";

import * as S from "../../../styles/preview/recommendationLetter";

interface OwnProps {
  title: string;
  isMeister: "true" | "false" | "none" | undefined;
}

const RecommendedfieldTd: FC<OwnProps> = ({ title, isMeister }) => (
  <tr>
    <td>
      <S.BoldText>{title}</S.BoldText>
    </td>
    <S.TdCenter>
      <div>{isMeister === "none" || (isMeister === "true" && <div />)}</div>
    </S.TdCenter>
    <S.TdCenter>
      <div>
        {isMeister === "none" ||
          (isMeister === "false" && isMeister !== undefined && <div />)}
      </div>
    </S.TdCenter>
  </tr>
);

export default RecommendedfieldTd;
