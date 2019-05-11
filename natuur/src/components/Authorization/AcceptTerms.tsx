import React, { FC } from "react";

import {
  AcceptTermsComponent,
  AcceptTermsBox,
  AcceptTermsBoxWapper,
  AcceptTermsWapperContents,
  AcceptTermsContentsTitle,
  AcceptTermsCheckBox,
  AcceptTermsCheckBoxInput,
  AcceptTermsCheckBoxLabel,
  AcceptTermsCheckBoxText
} from "../../styles/Authorization";
import {
  AcceptTermsContentsPart1,
  AcceptTermsContentsPart2,
  AcceptTermsContentsPart3,
  AcceptTermsContentsPart4,
  AcceptTermsContentsPart5,
  AcceptTermsContentsPart6,
  AcceptTermsContentsPart7,
  AcceptTermsContentsPart8
} from "./Constance";

interface Props {
  isAccept(text: string): void;
  checkedState: string;
}

const AcceptTerms: FC<Props> = ({ isAccept, checkedState }) => (
  <AcceptTermsComponent>
    <AcceptTermsBox>
      <AcceptTermsBoxWapper>
        <AcceptTermsWapperContents>
          {AcceptTermsContentsPart1}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            1. (개인정보 처리의 법령상 근거)
          </AcceptTermsContentsTitle>
          <br />
          {AcceptTermsContentsPart2}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            2. (정보주체의 권리)
          </AcceptTermsContentsTitle>
          <br />
          {AcceptTermsContentsPart3}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            3. (개인정보 수집항목)
          </AcceptTermsContentsTitle>
          <br />
          {AcceptTermsContentsPart4}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            4. (개인정보의 수집‧이용 목적)
          </AcceptTermsContentsTitle>
          <br />
          {AcceptTermsContentsPart5}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            5. (개인정보 제공)
          </AcceptTermsContentsTitle>
          <br />
          {AcceptTermsContentsPart6}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            6. (개인정보의 보유기간 및 이용기간)
          </AcceptTermsContentsTitle>
          <br />
          {AcceptTermsContentsPart7}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            7. (개인정보의 수집‧이용‧제공에 대한 동의 거부)
          </AcceptTermsContentsTitle>
          <br />
          {AcceptTermsContentsPart8}
          <br />
        </AcceptTermsWapperContents>
      </AcceptTermsBoxWapper>
    </AcceptTermsBox>
    <AcceptTermsCheckBox>
      <AcceptTermsCheckBoxInput
        type="checkbox"
        id="Accept-checkbox"
        onClick={() => (checkedState ? isAccept("") : isAccept("checked"))} // checkState에 string값이 없으면 checked로 변경.
        className={checkedState}
      />
      <AcceptTermsCheckBoxLabel
        checkedState={checkedState ? 1 : 0}
        htmlFor="Accept-checkbox"
      >
        ✔
      </AcceptTermsCheckBoxLabel>
      <AcceptTermsCheckBoxText htmlFor="Accept-checkbox">
        개인정보 이용약관에 동의합니다
      </AcceptTermsCheckBoxText>
    </AcceptTermsCheckBox>
  </AcceptTermsComponent>
);

export default AcceptTerms;
