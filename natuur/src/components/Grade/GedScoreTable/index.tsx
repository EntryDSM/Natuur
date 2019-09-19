import React, { FC, useRef, useEffect } from "react";

import * as S from "../../../styles/Grade";
import Wrapper from "../Wrapper";

interface OwnProps {
  getGedGrade: (payload: { accessToken: string }) => void;
  setGedAverageScore: (payload: { gedAverageScore: number }) => void;
  accessToken: string;
}

const GedScoreTable: FC<OwnProps> = ({
  getGedGrade,
  accessToken,
  setGedAverageScore
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getGedGrade({ accessToken });
    }
  },        []);

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
                    onChange={({ target: { value } }) =>
                      setGedAverageScore({ gedAverageScore: Number(value) })
                    }
                    type="text"
                    maxLength={5}
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
