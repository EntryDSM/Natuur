import React, { FC, useEffect } from "react";

import ContactRow from "./ContactRow";
import * as S from "../../../styles/personallinformation";

interface OwnProps {
  isGed: boolean;
  schoolContact: string;
  parentsContact: string;
  userContact: string;
  setSchoolContact: (payload: { contact: string }) => void;
  setParentsContact: (payload: { contact: string }) => void;
  setUserContact: (payload: { contact: string }) => void;
}

const ContactComponent: FC<OwnProps> = ({
  isGed,
  schoolContact,
  parentsContact,
  userContact,
  setSchoolContact,
  setParentsContact,
  setUserContact
}) => {
  useEffect(() => {
    if (isGed) {
      setSchoolContact({ contact: undefined });
    }
  },        [isGed]);

  return (
    <>
      <ContactRow
        rowTitle="학교 연락처"
        contact={schoolContact}
        setContact={setSchoolContact}
        isDisable={isGed}
      />
      <S.GradationHorizon />

      <ContactRow
        rowTitle="보호자 연락처"
        contact={parentsContact}
        setContact={setParentsContact}
      />
      <S.GradationHorizon />

      <ContactRow
        rowTitle="본인 연락처"
        contact={userContact}
        setContact={setUserContact}
      />
      <S.GradationHorizon />
    </>
  );
};

export default ContactComponent;
