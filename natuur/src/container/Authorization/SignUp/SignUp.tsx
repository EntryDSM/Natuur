import React, { FC, useRef, useEffect, useState } from "react";

import {
  Authorization,
  AuthorizationWrapper
} from "../../../styles/Authorization";
import { HeadLine } from "../../../components/default/Common";
import AcceptTerms from "../../../components/Authorization/AcceptTerms";

interface Props {
  updateAppClass(text): void;
}

const SignUp: FC<Props> = ({ updateAppClass }) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      updateAppClass("Authorization");
    }
  });

  // check 박스 class이름을 저장.
  const [checked, setChecked] = useState("");

  // 체크 박스 클릭 동작
  const isAccept = (state: string): void => {
    setChecked(state);
  };

  return (
    <Authorization>
      <AuthorizationWrapper>
        <HeadLine title="2019 지원자 본인인증" />
        <AcceptTerms isAccept={isAccept} checkedState={checked} />
        {/* <info-input /> */}
      </AuthorizationWrapper>
    </Authorization>
  );
};

export default SignUp;
