import React, { FC } from "react";
import { useSelector } from "react-redux";

import * as S from "../../styles/mypage";
import RowItem from "./RowItem";
import { AppState } from "../../core/redux/store/store";
import { RowProps } from "./pageInterface";

const RowList: FC = () => {
  const {
    name,
    gender,
    isFinalSubmit,
    isPaid,
    isPrintedApplicationArrived
  } = useSelector<AppState, RowProps>(state => ({
    gender: state.PersonalReducer.gender,
    isFinalSubmit: state.mainReducer.isFinalSubmit,
    isPaid: state.mainReducer.isPaid,
    isPrintedApplicationArrived: state.mainReducer.isPrintedApplicationArrived,
    name: state.PersonalReducer.name
  }));

  return (
    <S.RowListWrapper>
      <RowItem title="이름" content={name ? name : "미 입력"} />
      <S.Horizon />

      <RowItem
        title="성별"
        content={gender ? (gender === "MALE" ? "남" : "여") : "미 입력"}
      />
      <S.Horizon />

      <RowItem
        title="최종제출"
        content={isFinalSubmit ? "제출완료" : "미 완료"}
      />
      <S.Horizon />

      <RowItem title="전형료 납부" content={isPaid ? "납부완료" : "납부 전"} />
      <S.Horizon />

      <RowItem
        title="우편물 수령"
        content={isPrintedApplicationArrived ? "수령완료" : "수령 전"}
      />
    </S.RowListWrapper>
  );
};

export default RowList;
