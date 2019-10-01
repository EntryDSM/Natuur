import React, { FC, useEffect, useRef } from "react";

import HeadLine from "../../components/default/Common/HeadLine";
import SelectCategory from "../../components/Information/SelectCategory";
import Pagination from "../../components/default/pagination/Pagination";
import * as S from "../../styles/Information";
import { mapStateToProps, mapDispatchToProps } from "./ConnectSelectCategory";

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
  accessToken,
  isSuccess,
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

      // input did mount logic.
      updateAppClass("info-summary");
    }
  });

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
          accessToken={accessToken}
          isSuccess={isSuccess}
          getClassificationInfo={() => console.log("바꿔")}
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
