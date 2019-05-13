import React from "react";

import AcceptDisableButton from "./AcceptDisableButton";
import {
  InfomationInputBoxCover,
  InfomationInputBoxCoverWapper,
  InfomationInputBoxWapperTitle,
  InfomationInputBoxWapperInputSpace,
  InformationInputSpaceArea,
  InformationInputSpaceWarning
} from "../../styles/Authorization";

const InformationDisableInputBox = () => (
  <InfomationInputBoxCover false>
    <div>
      {/* 이메일 입력란 */}
      <InfomationInputBoxCoverWapper false>
        <InfomationInputBoxWapperTitle false>
          이메일
        </InfomationInputBoxWapperTitle>
        <InfomationInputBoxWapperInputSpace>
          <InformationInputSpaceArea
            false
            type="text"
            placeholder="example@dsmhs.kr"
            // v-model="email"
            readOnly
          />
        </InfomationInputBoxWapperInputSpace>
      </InfomationInputBoxCoverWapper>

      {/* 비밀번호 입력란 */}
      <InfomationInputBoxCoverWapper false>
        <InfomationInputBoxWapperTitle false>
          비밀번호
        </InfomationInputBoxWapperTitle>
        <InfomationInputBoxWapperInputSpace>
          <InformationInputSpaceArea
            false
            type="password"
            placeholder="••••••••"
            // v-model="pw"
            readOnly
          />
        </InfomationInputBoxWapperInputSpace>
        <InformationInputSpaceWarning>
          * 영문, 숫자 포함 8자리 이상 16자리 이하
        </InformationInputSpaceWarning>
      </InfomationInputBoxCoverWapper>

      {/* 비밀번호 (확인) 입력란 */}
      <InfomationInputBoxCoverWapper false>
        <InfomationInputBoxWapperTitle false>
          비밀번호 확인
        </InfomationInputBoxWapperTitle>
        <InfomationInputBoxWapperInputSpace>
          <InformationInputSpaceArea
            false
            type="password"
            placeholder="••••••••"
            // v-model="pwcheck"
            readOnly
          />
        </InfomationInputBoxWapperInputSpace>
      </InfomationInputBoxCoverWapper>
    </div>
    <AcceptDisableButton />
  </InfomationInputBoxCover>
);

export default InformationDisableInputBox;
