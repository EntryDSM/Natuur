import React, { FC, useState } from "react";

import * as S from "../../../../styles/personallinformation";
import { OfficeOfEducationPopUpInputWrapper } from "../../../../styles/personallinformation/popup";
import SelectBox from "../../SelectBox";
import { OFFICE_OF_EDUCATION_LIST } from "../../constant";

const OfficeOfEducationPopUpInput: FC = () => {
  const [officeOfEducation, setOfficeOfEducation] = useState("");
  return (
    <OfficeOfEducationPopUpInputWrapper>
      <SelectBox
        value={officeOfEducation}
        setValue={setOfficeOfEducation}
        valueList={OFFICE_OF_EDUCATION_LIST}
        isPopUp
      />
      <S.Input type="text" placeholder="중학교 명" inputCase="popup" />
    </OfficeOfEducationPopUpInputWrapper>
  );
};

export default OfficeOfEducationPopUpInput;
