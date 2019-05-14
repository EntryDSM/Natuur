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
  ACCEPT_TERMS_CONTENTS_PART_1,
  ACCEPT_TERMS_CONTENTS_PART_2,
  ACCEPT_TERMS_CONTENTS_PART_3,
  ACCEPT_TERMS_CONTENTS_PART_4,
  ACCEPT_TERMS_CONTENTS_PART_5,
  ACCEPT_TERMS_CONTENTS_PART_6,
  ACCEPT_TERMS_CONTENTS_PART_7,
  ACCEPT_TERMS_CONTENTS_PART_8
} from "./Constance";

interface Props {
  checkedState: string;
  userEmail: string;
  userPassword: string;
  userPasswordCheck: string;
  isAccept(text: string): void;
}

const AcceptTerms: FC<Props> = ({
  isAccept,
  checkedState,
  userEmail,
  userPassword,
  userPasswordCheck
}) => (
  <AcceptTermsComponent>
    <AcceptTermsBox>
      <AcceptTermsBoxWapper>
        <AcceptTermsWapperContents>
          {ACCEPT_TERMS_CONTENTS_PART_1}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            1. (개인정보 처리의 법령상 근거)
          </AcceptTermsContentsTitle>
          <br />
          {ACCEPT_TERMS_CONTENTS_PART_2}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            2. (정보주체의 권리)
          </AcceptTermsContentsTitle>
          <br />
          {ACCEPT_TERMS_CONTENTS_PART_3}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            3. (개인정보 수집항목)
          </AcceptTermsContentsTitle>
          <br />
          {ACCEPT_TERMS_CONTENTS_PART_4}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            4. (개인정보의 수집‧이용 목적)
          </AcceptTermsContentsTitle>
          <br />
          {ACCEPT_TERMS_CONTENTS_PART_5}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            5. (개인정보 제공)
          </AcceptTermsContentsTitle>
          <br />
          {ACCEPT_TERMS_CONTENTS_PART_6}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            6. (개인정보의 보유기간 및 이용기간)
          </AcceptTermsContentsTitle>
          <br />
          {ACCEPT_TERMS_CONTENTS_PART_7}
          <br />
          <br />
          <AcceptTermsContentsTitle>
            7. (개인정보의 수집‧이용‧제공에 대한 동의 거부)
          </AcceptTermsContentsTitle>
          <br />
          {ACCEPT_TERMS_CONTENTS_PART_8}
          <br />
        </AcceptTermsWapperContents>
      </AcceptTermsBoxWapper>
    </AcceptTermsBox>
    <AcceptTermsCheckBox>
      <AcceptTermsCheckBoxInput
        type="checkbox"
        id="Accept-checkbox"
        // checkState에 string값이 없으면 checked로 변경.
        onClick={() =>
          !userEmail &&
          !userPassword &&
          !userPasswordCheck &&
          (checkedState ? isAccept("") : isAccept("checked"))
        }
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
