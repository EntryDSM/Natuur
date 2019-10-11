import React, { FC } from "react";

import * as S from "../../../styles/Grade";
import { checkOnlyNumber } from "../../../lib/regularExpressions";

interface OwnProps {
  volunteerTime: string;
  setVolunteerTime: (payload: { volunteer: string }) => void;
}

const VolunteerRow: FC<OwnProps> = ({ volunteerTime, setVolunteerTime }) => (
  <S.BorderBottomTr>
    <S.TdTitle>
      <p>봉사시간</p>
    </S.TdTitle>
    <S.Td>
      <S.Div marginLeft={28}>
        <S.InputCover>
          <S.Input
            type="text"
            onChange={({ target: { value } }) =>
              checkOnlyNumber(value) && setVolunteerTime({ volunteer: value })
            }
            value={volunteerTime}
          />
          시간
        </S.InputCover>
      </S.Div>
    </S.Td>
    <S.Td />
  </S.BorderBottomTr>
);

export default VolunteerRow;
