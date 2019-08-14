import React, { FC } from "react";

import ContactRow from "./ContactRow";
import * as S from "../../../styles/personallinformation";

interface OwnProps {
  isGed: boolean;
  schoolContact: string;
  parantsContact: string;
  userContact: string;
  setSchoolContact: (payload: { contact: string }) => void;
  setParantsContact: (payload: { contact: string }) => void;
  setUserContact: (payload: { contact: string }) => void;
}

const ContactComponent: FC<OwnProps> = ({
  isGed,
  schoolContact,
  parantsContact,
  userContact,
  setSchoolContact,
  setParantsContact,
  setUserContact
}) => {
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
        contact={parantsContact}
        setContact={setParantsContact}
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
