import React, { FC } from "react";

import * as S from "../../../styles/default/popup";
import CompleateCheckIcon from "../../../assets/popup/CompleteCheckIcon.png";

interface OwnProps {
  updatePopUpCase(popUpCase: "default" | "login" | "set" | "check"): void;
}

const CheckPopUp: FC<OwnProps> = ({ updatePopUpCase }) => (
  <>
    <S.LogoCover isCompleate>
      <S.PopUpStateLogo src={CompleateCheckIcon} alt="성공 아이콘" />
    </S.LogoCover>

    <S.LogoCover isPopUpTitle>
      <S.Title>비밀번호 재설정</S.Title>
    </S.LogoCover>

    <S.TitleHorizon />

    <S.ElementCover isCheck>
      <S.Text isTitleText>비밀번호 설정이 완료되었습니다.</S.Text>
    </S.ElementCover>

    <S.ButtonCover>
      <S.Button onClick={() => updatePopUpCase("login")}>로그인 하기</S.Button>
    </S.ButtonCover>
  </>
);

export default CheckPopUp;
