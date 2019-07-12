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
import {
  updateUserEmail,
  updateUserPassword,
  updateUserPasswordCheck
} from "../../../core/redux/actions/Authorization";
import { updateToastr } from "../../../core/redux/actions/default";
import { AppState } from "../../../core/redux/store/store";

const mapStateToProps = (state: AppState) => ({
  userEmail: state.AuthorizationReducer.userEmail,
  userPassword: state.AuthorizationReducer.userPassword,
  userPasswordCheck: state.AuthorizationReducer.userPasswordCheck
});

const mapDispatchToProps = dispatch => ({
  updateToastr: toastrData => dispatch(updateToastr(toastrData)),
  updateUserEmail: targetValue => dispatch(updateUserEmail(targetValue)),
  updateUserPassword: targetValue => dispatch(updateUserPassword(targetValue)),
  updateUserPasswordCheck: targetValue =>
    dispatch(updateUserPasswordCheck(targetValue))
});

interface OwnProps {
  updateAppClass(className: string): void;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  OwnProps;

const SignUp: FC<Props> = ({
  userEmail,
  userPassword,
  userPasswordCheck,
  updateAppClass,
  updateUserEmail,
  updateUserPassword,
  updateUserPasswordCheck,
  updateToastr
}) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      updateAppClass("Authorization");
    }
  });

  // check 박스 class이름을 저장.
  const [checked, setChecked] = useState("");

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
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
