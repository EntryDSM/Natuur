import React, { FC, useState, useEffect, useCallback } from "react";

import * as S from "../../../../styles/personallinformation";
import { OfficeOfEducationPopUpInputWrapper } from "../../../../styles/personallinformation/popup";
import { useDebounce } from "../../../../lib/utils/hooks";

interface OwnProps {
  searchSchool: (payload: { accessToken: string; school: string }) => void;
  accessToken: string;
}

const OfficeOfEducationPopUpInput: FC<OwnProps> = ({
  searchSchool,
  accessToken
}) => {
  const [school, setSchool] = useState("");
  const debounceSchool = useDebounce(school, 300);

  const inputHandler = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setSchool(value);
    },
    []
  );

  useEffect(() => {
    if (debounceSchool || !school) {
      searchSchool({ accessToken, school });
    }
  },        [debounceSchool]);

  return (
    <OfficeOfEducationPopUpInputWrapper>
      <S.Input
        type="text"
        value={school}
        onChange={e => inputHandler(e)}
        placeholder="중학교 명"
        inputCase="popup"
      />
    </OfficeOfEducationPopUpInputWrapper>
  );
};

export default OfficeOfEducationPopUpInput;
