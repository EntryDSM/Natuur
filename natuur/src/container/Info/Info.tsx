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
  getClassificationInfo,
  patchClassificationInfo,
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
        <HeadLine subText="2020 입학원서 작성" title="전형 구분 선택" />
        <SelectCategory
          isGed={isGed}
          applyType={applyType}
          selectRegion={selectRegion}
          graduationClassification={graduationClassification}
          graduationYear={graduationYear}
          remarks={remarks}
          accessToken={accessToken}
          isSuccess={isSuccess}
          getClassificationInfo={getClassificationInfo}
          setIsGed={setIsGed}
          setApplyType={setApplyType}
          setSelectRegion={setSelectRegion}
          setGraduationClassification={setGraduationClassification}
          setGraduationYear={setGraduationYear}
          setRemark={setRemark}
        />
        <Pagination
          connectServer={() =>
            patchClassificationInfo({
              accessToken,
              is_ged: isGed,
              apply_type: applyType.split("/")[0],
              social_detail_type: applyType.split("/")[1],
              is_daejeon: selectRegion === "대전",
              is_graduated: graduationClassification === "졸업자",
              additional_type: !remarks ? undefined : remarks
            })
          }
          prevRouterPath="/"
          nextRouterPath=""
          AcceptPagination="info"
        />
      </S.InfoWrapper>
    </div>
  );
};

export default Info;
