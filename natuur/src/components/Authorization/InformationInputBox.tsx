import React, { FC } from "react";

import {
  InfomationInputBoxCover,
  InfomationInputBoxCoverWapper,
  InfomationInputBoxWapperTitle,
  InfomationInputBoxWapperInputSpace,
  InformationInputSpaceArea,
  InformationInputSpaceCheckMark,
  InformationInputSpaceWrong,
  InformationInputSpaceWarning
} from "../../styles/Authorization";
import AcceptButton from "./AcceptButton";

interface Props {
  userEmail: string;
  userPassword: string;
  userPasswordCheck: string;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const InformationInputBox: FC<Props> = ({
  userEmail,
  userPassword,
  userPasswordCheck,
  handleChange
}) => {
  const emailReg = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

  return (
    <InfomationInputBoxCover>
      <div>
        {/* 이메일 입력란 */}
        <InfomationInputBoxCoverWapper>
          <InfomationInputBoxWapperTitle>이메일</InfomationInputBoxWapperTitle>
          <InfomationInputBoxWapperInputSpace>
            <InformationInputSpaceArea
              type="text"
              placeholder="example@dsmhs.kr"
              name="updateUserEmail"
              onChange={event => handleChange(event)}
            />
          </InfomationInputBoxWapperInputSpace>
          {emailReg.test(userEmail) && (
            <InformationInputSpaceCheckMark>✓</InformationInputSpaceCheckMark>
          )}
        </InfomationInputBoxCoverWapper>

        {/* 비밀번호 입력란 */}
        <InfomationInputBoxCoverWapper>
          <InfomationInputBoxWapperTitle>
            비밀번호
          </InfomationInputBoxWapperTitle>
          <InfomationInputBoxWapperInputSpace>
            <InformationInputSpaceArea
              type="password"
              placeholder="••••••••"
              name="updateUserPassword"
              onChange={event => handleChange(event)}
            />
          </InfomationInputBoxWapperInputSpace>
          {passwordReg.test(userPassword) && (
            <InformationInputSpaceCheckMark>✓</InformationInputSpaceCheckMark>
          )}
          <InformationInputSpaceWarning>
            * 영문, 숫자 포함 8자리 이상 16자리 이하
          </InformationInputSpaceWarning>
        </InfomationInputBoxCoverWapper>

        {/* 비밀번호 (확인) 입력란 */}
        <InfomationInputBoxCoverWapper>
          <InfomationInputBoxWapperTitle>
            비밀번호 확인
          </InfomationInputBoxWapperTitle>
          <InfomationInputBoxWapperInputSpace>
            <InformationInputSpaceArea
              type="password"
              placeholder="••••••••"
              name="updateUserPasswordCheck"
              onChange={event => handleChange(event)}
            />
            {userPassword === userPasswordCheck && userPasswordCheck && (
              <InformationInputSpaceCheckMark>✓</InformationInputSpaceCheckMark>
            )}
            {userPassword && !userPasswordCheck && (
              <InformationInputSpaceWrong>
                비밀번호를 정확히 입력해주세요
              </InformationInputSpaceWrong>
            )}
          </InfomationInputBoxWapperInputSpace>
        </InfomationInputBoxCoverWapper>
      </div>
      <AcceptButton />
    </InfomationInputBoxCover>
  );
};

export default InformationInputBox;
