import React, { FC } from "react";

import * as S from "../../../styles/preview/recommendationLetter";
import RecommendedfieldTd from "./RecommendedfieldTd";

const RecommendationTable: FC = () => (
  <table>
    <tbody>
      <tr>
        <td colSpan={3}>
          <S.BoldText isTitle>특별전형 추천분야(해당란에 O표)</S.BoldText>
        </td>
      </tr>

      <tr>
        <td>
          <S.BoldText>전형 유형</S.BoldText>
        </td>
        <td>
          <S.BoldText>마이스터 인재 전형</S.BoldText>
        </td>
        <td>
          <S.BoldText>사회통합 전형</S.BoldText>
        </td>
      </tr>

      <RecommendedfieldTd title="대전시 교육청 관내" />
      <RecommendedfieldTd title="대전시 교육청 관외" />
    </tbody>
  </table>
);

export default RecommendationTable;
