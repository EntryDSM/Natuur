import React, { FC } from "react";

import * as S from "../../../styles/personallinformation";
import InputRow from "../InputRow";

interface OwnProps {
  name: string;
  setName: (payload: { name: string }) => void;
}

const NameRow: FC<OwnProps> = ({ name, setName }) => {
  return (
    <InputRow rowTitle="이름" isSmall>
      <S.Input
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName({ name: value })}
        inputCase="name"
      />
    </InputRow>
  );
};

export default NameRow;
