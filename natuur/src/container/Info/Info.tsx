import React, { FC, useEffect, useRef } from "react";

import HeadLine from "../../components/default/Common/HeadLine";
import SelectCategory from "../../components/Information/SelectCategory";
import Pagination from "../../components/default/pagination/Pagination";
import * as S from "../../styles/Information";
import { mapStateToProps, mapDispatchToProps } from "./ConnectSelectCategory";
import {
  convertApplyTypeToKorean,
  convertAdditionalTypeToKorean
} from "./presenter";

interface OwnProps {
  updateAppClass(text: string): void;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;

const Info: FC<Props> = ({
  updateAppClass,
  isGed,
  applyType,
  selectRegion,
  graduationClassification,
  graduationYear,
  remarks,
  isSuccess,
  setIsGed,
  setApplyType,
  setSelectRegion,
  setGraduationClassification,
  setGraduationYear,
  setRemark,
  classification,
  setIsOpen,
  isOpen
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      const {
        apply_type,
        additional_type,
        is_daejeon,
        graduated_year
      } = classification;

      if (!isOpen.info) {
        updateAppClass("info-summary");
        setApplyType(convertApplyTypeToKorean(apply_type));
        setSelectRegion(is_daejeon ? "대전" : "전국");
        setRemark(convertAdditionalTypeToKorean(additional_type));
        setGraduationYear(graduated_year);
      }
    }
    return () => setIsOpen({ pageName: "info", isOpen: true });
  },        []);

  return (
    <div>
      <S.InfoWrapper>
        <HeadLine
          isClassification
          subText="2020 입학원서 작성"
          title="전형 구분 선택"
        />
        <SelectCategory
          isGed={isGed}
          applyType={applyType}
          selectRegion={selectRegion}
          graduationClassification={graduationClassification}
          graduationYear={graduationYear}
          remarks={remarks}
          isSuccess={isSuccess}
          setIsGed={setIsGed}
          setApplyType={setApplyType}
          setSelectRegion={setSelectRegion}
          setGraduationClassification={setGraduationClassification}
          setGraduationYear={setGraduationYear}
          setRemark={setRemark}
        />
        <Pagination
          prevRouterPath="/"
          nextRouterPath="/personal"
          AcceptPagination="info"
        />
      </S.InfoWrapper>
    </div>
  );
};

export default Info;
