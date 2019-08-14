import React, { FC } from "react";

import * as S from "../../styles/personallinformation";
import InputRow from "./InputRow";

interface OwnProps {
  name: string;
  setName: (payload: { name: string }) => void;
}

const ParantsRow: FC<OwnProps> = ({ name, setName }) => {
  return (
    <InputRow rowTitle="보호자명">
      <S.Input
        type="text"
        value={name}
        onChange={({ target: { value } }) => setName({ name: value })}
        inputCase="parants"
      />
    </InputRow>
  );
};

export default ParantsRow;
