import React, { FC, useState, useEffect } from "react";

import * as S from "../../../../styles/Information";
import checkIcon from "../../../../assets/Information/checked.png";

const newSocialIntegrationList = (
  socialIntegrationList: Array<{ CASE_NAME: string; isChecked: boolean }>,
  Listindex
): Array<{ CASE_NAME: string; isChecked: boolean }> => {
  return socialIntegrationList.map((result, newIndex) => {
    if (newIndex === Listindex) {
      return { CASE_NAME: result.CASE_NAME, isChecked: true };
    }
    return { CASE_NAME: result.CASE_NAME, isChecked: false };
  });
};

interface OwnProps {
  setSocialIntegration: (socialIntegration: string) => void;
  setIsOpenSelectBox: (isOpenSelectBox: boolean) => void;
  setRadioType: (radioType: string) => void;
}

const SelectBox: FC<OwnProps> = ({
  setSocialIntegration,
  setIsOpenSelectBox,
  setRadioType
}) => {
  const [socialIntegrationList, setSocialIntegrationList] = useState([
    { CASE_NAME: "기초생활수급권자", isChecked: false },
    { CASE_NAME: "한부모가족", isChecked: false },
    { CASE_NAME: "차상위계층", isChecked: false },
    { CASE_NAME: "소년소녀가장", isChecked: false },
    { CASE_NAME: "북한이탈주민", isChecked: false },
    { CASE_NAME: "다문화가정", isChecked: false }
  ]);

  useEffect(() => {
    socialIntegrationList.some(result => {
      if (result.isChecked) {
        setSocialIntegration(`/${result.CASE_NAME}`);
        setIsOpenSelectBox(false);
        setRadioType(`사회통합전형/${result.CASE_NAME}`);

        return true;
      }
    });
  },        [socialIntegrationList]);

  return (
    <S.TypeSelectBox>
      {socialIntegrationList.map((result, index) => (
        <S.TypeSelectOption
          key={result.CASE_NAME}
          onClick={() =>
            setSocialIntegrationList(
              newSocialIntegrationList(socialIntegrationList, index)
            )
          }
        >
          {result.CASE_NAME}
          {result.isChecked && <S.CheckIcon src={checkIcon} alt="체크아이콘" />}
        </S.TypeSelectOption>
      ))}
    </S.TypeSelectBox>
  );
};

export default SelectBox;
