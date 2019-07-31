import React, { FC, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import { HeadLine } from "../../../components/default/Common";
import {
  AcceptTerms,
  InformationDisableInputBox,
  InformationInputBox,
  PrivacyCheckBox
} from "../../../components/Authorization";
import {
  Authorization,
  AuthorizationWrapper
} from "../../../styles/Authorization";
import { updateToastr } from "../../../core/redux/actions/default";

const mapDispatchToProps = dispatch => ({
  updateToastr: toastrData => dispatch(updateToastr(toastrData))
});

interface OwnProps {
  updateAppClass(className: string): void;
}

type Props = ReturnType<typeof mapDispatchToProps> & OwnProps;

const SignUp: FC<Props> = ({ updateAppClass, updateToastr }) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      updateAppClass("Authorization");
    }
  });

  // check 박스 class이름을 저장.
  const [checked, setChecked] = useState("");
  const [userEmail, updateUserEmail] = useState("");
  const [userPassword, updateUserPassword] = useState("");
  const [userPasswordCheck, updateUserPasswordCheck] = useState("");

  return (
    <Authorization>
      <AuthorizationWrapper>
        <HeadLine title="2020 지원자 계정 생성하기" />
        <AcceptTerms />
        <PrivacyCheckBox
          isAccept={setChecked}
          checkedState={checked}
          userEmail={userEmail}
          userPassword={userPassword}
          userPasswordCheck={userPasswordCheck}
        />
        {checked ? (
          <InformationInputBox
            userEmail={userEmail}
            userPassword={userPassword}
            userPasswordCheck={userPasswordCheck}
            updateUserEmail={updateUserEmail}
            updateUserPassword={updateUserPassword}
            updateUserPasswordCheck={updateUserPasswordCheck}
          />
        ) : (
          <InformationDisableInputBox updateToastr={updateToastr} />
        )}
      </AuthorizationWrapper>
    </Authorization>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
