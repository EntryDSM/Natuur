import React, { FC } from "react";
import { checkIcon } from "../../../assets/common";

import {
  InfomationInputBoxWapperInputSpace,
  InformationInputSpaceArea,
  InformationInputSpaceCheckMark
} from "../../../styles/Authorization";

interface Props {
  width?: number;
  placeHolder: string;
  name: string;
  type?: string;
  isCheckMark?: boolean;
  isReadOnly: boolean;
  isCertification: boolean;
  handleChanger(event: React.ChangeEvent<HTMLInputElement>): void;
}

const TextInput: FC<Props> = ({
  width,
  placeHolder,
  name,
  handleChanger,
  isCheckMark,
  type,
  isReadOnly,
  isCertification
}) => {
  return (
    <InfomationInputBoxWapperInputSpace>
      <InformationInputSpaceArea
        maxLength={name === "certification" ? 6 : null}
        isCertification={isCertification}
        width={width}
        type={type}
        placeholder={placeHolder}
        name={name}
        onChange={event => handleChanger(event)}
        readOnly={isReadOnly}
      />
      {isCheckMark && <InformationInputSpaceCheckMark src={checkIcon} />}
    </InfomationInputBoxWapperInputSpace>
  );
};

export default TextInput;
