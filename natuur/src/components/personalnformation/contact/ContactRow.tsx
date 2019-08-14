import React, { FC } from "react";

import * as S from "../../../styles/personallinformation";
import InputRow from "../InputRow";

interface OwnProps {
  rowTitle: string;
  contact: string;
  isDisable?: boolean;
  setContact: (payload: { contact: string }) => void;
}

const ContactRow: FC<OwnProps> = ({
  contact,
  rowTitle,
  setContact,
  isDisable
}) => {
  return (
    <InputRow
      rowTitle={rowTitle}
      explanationText="* ‘-’문자를 제외한 숫자만 입력해주세요."
    >
      <S.Input
        type="text"
        value={contact}
        onChange={({ target: { value } }) => setContact({ contact: value })}
        inputCase="contact"
        isDisable={isDisable}
      />
      {!/^[0-9]+$/g.test(contact) && contact && (
        <S.TextBox>형식에 맞추어 입력해주세요.</S.TextBox>
      )}
    </InputRow>
  );
};

export default ContactRow;
