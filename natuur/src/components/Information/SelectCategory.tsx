import React, { FC, useState, useEffect, useRef } from "react";

import * as S from "../../styles/Information";
import {
  GedRow,
  SelectTypeRow,
  SelectRegionRow,
  GraduationClassificationRow,
  GraduationYearRow,
  RemarksRow
} from "./inputRow";

interface OwnProps {
  isGed: boolean;
  applyType: string;
  selectRegion: string;
  graduationClassification: string;
  graduationYear: string;
  remarks: string;
  accessToken: string;
  isSuccess: boolean;
  getClassificationInfo: (payload: { accessToken: string }) => void;
  setIsGed: (payload: boolean) => void;
  setApplyType: (payload: string) => void;
  setSelectRegion: (payload: string) => void;
  setGraduationClassification: (payload: string) => void;
  setGraduationYear: (payload: string) => void;
  setRemark: (payload: string) => void;
}

const SelectCategory: FC<OwnProps> = ({
  isGed,
  applyType,
  selectRegion,
  graduationClassification,
  remarks,
  graduationYear,
  accessToken,
  getClassificationInfo,
  setIsGed,
  setApplyType,
  setSelectRegion,
  setGraduationClassification,
  setGraduationYear,
  setRemark
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getClassificationInfo({ accessToken });
    }
  },        []);

  return (
    <S.CategoryList>
      <GedRow isChecked={isGed} setIsChecked={setIsGed} />
      <S.GradationHorizon />

      <SelectTypeRow radioType={applyType} setRadioType={setApplyType} />
      <S.GradationHorizon />

      <SelectRegionRow
        radioType={selectRegion}
        setRadioType={setSelectRegion}
      />
      <S.GradationHorizon />

      <GraduationClassificationRow
        radioType={graduationClassification}
        setRadioType={setGraduationClassification}
        isGedState={isGed}
      />
      <S.GradationHorizon />

      <GraduationYearRow
        year={graduationYear}
        setYear={setGraduationYear}
        isGedState={isGed}
        graduationClassificationState={graduationClassification}
      />
      <S.GradationHorizon />

      <RemarksRow radioType={remarks} setRadioType={setRemark} />
    </S.CategoryList>
  );
};

export default SelectCategory;
