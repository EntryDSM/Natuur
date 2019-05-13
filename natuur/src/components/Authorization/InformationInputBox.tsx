import React from "react";

import AcceptButton from "./AcceptButton";
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

const InformationInputBox = () => (
  <InfomationInputBoxCover>
    <div>
      {/* 이메일 입력란 */}
      <InfomationInputBoxCoverWapper>
        <InfomationInputBoxWapperTitle>이메일</InfomationInputBoxWapperTitle>
        <InfomationInputBoxWapperInputSpace>
          <InformationInputSpaceArea
            type="text"
            placeholder="example@dsmhs.kr"
            // v-model="email"
          />
        </InfomationInputBoxWapperInputSpace>
        <InformationInputSpaceCheckMark
        // v-if="verify[0]"
        >
          ✓
        </InformationInputSpaceCheckMark>
      </InfomationInputBoxCoverWapper>

      {/* 비밀번호 입력란 */}
      <InfomationInputBoxCoverWapper>
        <InfomationInputBoxWapperTitle>비밀번호</InfomationInputBoxWapperTitle>
        <InfomationInputBoxWapperInputSpace>
          <InformationInputSpaceArea
            type="password"
            placeholder="••••••••"
            // v-model="pw"
          />
        </InfomationInputBoxWapperInputSpace>
        <InformationInputSpaceCheckMark
        // v-if="verify[1]"
        >
          ✓
        </InformationInputSpaceCheckMark>
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
            // v-model="pwcheck"
          />
          <InformationInputSpaceCheckMark
          // v-if="verify[2]"
          >
            ✓
          </InformationInputSpaceCheckMark>
          <InformationInputSpaceWrong
          // v-if="(pw !== pwcheck)"
          >
            비밀번호를 정확히 입력해주세요
          </InformationInputSpaceWrong>
        </InfomationInputBoxWapperInputSpace>
      </InfomationInputBoxCoverWapper>
    </div>
    <AcceptButton />
  </InfomationInputBoxCover>
);

export default InformationInputBox;
