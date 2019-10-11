import React, { FC } from "react";

import * as S from "../../../styles/personallinformation";
import InputRow from "../InputRow";
import { checkLanguage } from "../../../lib/regularExpressions";

interface OwnProps {
  name: string;
  setName: (payload: { name: string }) => void;
}

const NameRow: FC<OwnProps> = ({ name, setName }) => {
  return (
    <InputRow rowTitle="이름" isSmall>
      <S.Input
        type="text"
        value={name || ""}
        onChange={({ target: { value } }) => setName({ name: value })}
        inputCase="name"
      />
      {!checkLanguage(name) && (
        <S.TextBox>한글 or 영어를 이용하여 입력해주세요.</S.TextBox>
      )}
    </InputRow>
  );
};

export default NameRow;
