import React, { FC, useEffect } from "react";

import * as S from "../../styles/intro";
import PlanInput from "./PlanInput";
import { useDebounce } from "../../lib/utils/hooks";

interface OwnProps {
  isLast?: boolean;
  title: string;
  description: string;
  value: string;
  setValue: (payload: { text: string }) => void;
  accessToken: string;
  patchDocument: (payload: {
    accessToken: string;
    self_introduction_text?: string;
    study_plan_text?: string;
  }) => void;
}

const Wrapper: FC<OwnProps> = ({
  isLast = false,
  title,
  description,
  value,
  setValue,
  accessToken,
  patchDocument
}) => {
  const [debouncedText, debounceStatus] = useDebounce(value, 3500);

  useEffect(() => {
    if (debouncedText && debounceStatus) {
      if (title === "자기소개서") {
        patchDocument({ accessToken, self_introduction_text: debouncedText });
      } else {
        patchDocument({ accessToken, study_plan_text: debouncedText });
      }
    }
  },        [debouncedText]);

  return (
    <S.WrapperCover isLast={isLast}>
      <S.WrapperTitle>{title}</S.WrapperTitle>
      <p>{description}</p>
      <div>
        <PlanInput title={title} value={value} setValue={setValue} />
        <S.ShowTextLengthPlace isAccept={!!value}>
          <S.TextLength>{value.length} / 1600</S.TextLength>
        </S.ShowTextLengthPlace>
      </div>
    </S.WrapperCover>
  );
};

export default Wrapper;
