import React, { FC, useState, useEffect } from "react";

import * as S from "../../../styles/default/popup";
import lodingGif from "../../../assets/loding.gif";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../../container/default/popup/writeApplicantNumber";

interface OwnProps {
  userEmail: string;
  userVerify: string;
  changeSetNextPasswordModal: () => void;
  changeSetPrevPasswordModal: () => void;
  setUserVerify: (value: string) => void;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;

const WriteVerificationNumber: FC<Props> = ({
  userEmail,
  changeSetPrevPasswordModal,
  changeSetNextPasswordModal,
  userVerify,
  setUserVerify,
  isAppliSuccess,
  isAppliWaiting,
  isVerifySuccess,
  isVerifyError,
  sendApplicantPassword,
  reSendVerificationNumber,
  resetState
}) => {
  const [isQuestionBox, setIsQuestionBox] = useState(false);

  useEffect(() => {
    if (isAppliSuccess) {
      changeSetNextPasswordModal();
      resetState();
    }
  });

  return (
    <>
      <S.ElementCover>
        {isAppliWaiting ? (
          <S.LodingGifCover src={lodingGif} alt="로딩" />
        ) : (
          <S.Text titleText>
            {isVerifyError
              ? "실패하였습니다."
              : isVerifySuccess
              ? "재전송에 성공하였습니다"
              : "메일함에 전송된 인증번호를 입력해주세요"}
          </S.Text>
        )}
      </S.ElementCover>

      <S.InputCover>
        <S.InputBox
          onChange={({ target: { value } }) => setUserVerify(value)}
          value={userVerify}
          center
          type="text"
          maxLength={6}
          placeholder="* * * * * *"
        />
      </S.InputCover>

      <S.ButtonCover>
        <S.Button isSmall onClick={changeSetPrevPasswordModal}>
          다시 입력
        </S.Button>
        <S.Button isSmall onClick={() => reSendVerificationNumber(userEmail)}>
          재전송
        </S.Button>
        <S.Button isSmall onClick={() => sendApplicantPassword(userVerify)}>
          확인
        </S.Button>
      </S.ButtonCover>

      <S.PeculiarCover question>
        <S.PeculiarText onClick={() => setIsQuestionBox(!isQuestionBox)}>
          이메일이 오지않습니다.
        </S.PeculiarText>
      </S.PeculiarCover>

      {isQuestionBox && (
        <S.QuestionBox>
          <S.Text question>메일이 {userEmail}인지 확인하시고,</S.Text>
          <S.Text question>스팸 메일함도 확인해주세요</S.Text>
        </S.QuestionBox>
      )}
    </>
  );
};

export default WriteVerificationNumber;
