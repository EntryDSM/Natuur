import React, { FC, useState } from "react";

import * as S from "../../../../styles/personallinformation";
import {
  AddressInputWrapper,
  SearchButton
} from "../../../../styles/personallinformation/popup";

interface OwnProps {
  searchAddress: ({ query }: { query: string }) => void;
}

const handleKeyPress = (
  { key }: React.KeyboardEvent<HTMLInputElement>,
  handleEvent: () => void
) => {
  if (key === "Enter") {
    handleEvent();
  }
};

const AddressInput: FC<OwnProps> = ({ searchAddress }) => {
  const [query, setQuery] = useState("");
  return (
    <AddressInputWrapper>
      <div>
        우편번호 찾기
        <span>도로명 주소를 입력해주세요.</span>
      </div>
      <S.InlineDiv>
        <S.Input
          type="text"
          placeholder="주소를 입력해주세요"
          onChange={({ target: { value } }) => setQuery(value)}
          onKeyPress={e => handleKeyPress(e, () => searchAddress({ query }))}
          value={query}
          inputCase="addressPopUp"
        />
        <SearchButton onClick={() => searchAddress({ query })}>
          검색
        </SearchButton>
      </S.InlineDiv>
    </AddressInputWrapper>
  );
};

export default AddressInput;
