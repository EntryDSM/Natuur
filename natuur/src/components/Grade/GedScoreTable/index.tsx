import React, { FC } from "react";

import * as S from "../../../styles/Grade";
import Wrapper from "../Wrapper";
import { checkOnlyNumber } from "../../../lib/regularExpressions";

interface OwnProps {
  gedAverageScore: string;
  setGedAverageScore: (payload: { gedAverageScore: string }) => void;
}

const GedScoreTable: FC<OwnProps> = ({
  setGedAverageScore,
  gedAverageScore
}) => {
  return (
    <Wrapper title="성적입력">
      <table>
        <tbody>
          <S.Tr>
            <S.TdTitle>총점</S.TdTitle>
            <S.Td>
              <S.Div marginLeft={28}>
                <S.InputCover>
                  <S.Input
                    value={gedAverageScore}
                    onChange={({ target: { value } }) =>
                      (/^[0-9.]+$/.test(value) || value === "") &&
                      setGedAverageScore({
                        gedAverageScore: value
                      })
                    }
                    type="text"
                    placeholder="0.0"
                  />
                  점
                </S.InputCover>
              </S.Div>
            </S.Td>
          </S.Tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default GedScoreTable;
