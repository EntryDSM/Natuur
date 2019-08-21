import React, { FC } from "react";

import * as S from "../../styles/intro";

interface OwnProps {
  title: string;
  value: string;
  setValue: (payload: { text: string }) => void;
}

const PlanInput: FC<OwnProps> = ({ title, value, setValue }) => {
  return (
    <S.AreaCover>
      <S.TextArea
        value={value}
        placeholder={title}
        onChange={({ target: { value } }) => setValue({ text: value })}
      />
    </S.AreaCover>
  );
};

export default PlanInput;
