import React, { FC } from "react";

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
  isDisable?: boolean;
  isReadOnly: boolean;
  handleChanger(event: React.ChangeEvent<HTMLInputElement>): void;
}

const TextInput: FC<Props> = ({
  width,
  placeHolder,
  name,
  handleChanger,
  isCheckMark,
  isDisable,
  type,
  isReadOnly
}) => {
  return (
    <InfomationInputBoxWapperInputSpace isDisable={isDisable}>
      <InformationInputSpaceArea
        isDisable={isDisable}
        width={width}
        type={type}
        placeholder={placeHolder}
        name={name}
        onChange={event => handleChanger(event)}
        readOnly={isReadOnly}
      />
      {isCheckMark && (
        <InformationInputSpaceCheckMark>✓</InformationInputSpaceCheckMark>
      )}
    </InfomationInputBoxWapperInputSpace>
  );
};

export default TextInput;
