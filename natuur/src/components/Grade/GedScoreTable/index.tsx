import React, { FC, useRef, useEffect } from "react";

import * as S from "../../../styles/Grade";
import Wrapper from "../Wrapper";

interface OwnProps {
  gedGrade: { ged_average_score: number };
  gedAverageScore: number;
  setGedAverageScore: (payload: { gedAverageScore: number }) => void;
  isOpen: {
    info: boolean;
    personal: boolean;
    grade: boolean;
    intro: boolean;
  };
  setIsOpen: (payload: {
    pageName: "info" | "personal" | "grade" | "intro";
    isOpen: boolean;
  }) => void;
}

const GedScoreTable: FC<OwnProps> = ({
  setGedAverageScore,
  gedAverageScore,
  gedGrade,
  isOpen,
  setIsOpen
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!isOpen.grade) {
        setGedAverageScore({
          gedAverageScore: gedGrade.ged_average_score
            ? gedGrade.ged_average_score
            : 0
        });
      }
    }
    return () => setIsOpen({ pageName: "grade", isOpen: true });
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
                    value={gedAverageScore}
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
