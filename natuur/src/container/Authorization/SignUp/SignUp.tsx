import React, { FC, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import {
  AcceptTerms,
  InformationDisableInputBox,
  InformationInputBox
} from "../../../components/Authorization";
import { HeadLine } from "../../../components/default/Common";
import {
  Authorization,
  AuthorizationWrapper
} from "../../../styles/Authorization";
import {
  updateUserEmail,
  updateUserPassword,
  updateUserPasswordCheck
} from "../../../core/redux/actions/Authorization";

interface Props {
  userEmail: string;
  userPassword: string;
  userPasswordCheck: string;
  updateAppClass(text: string): void;
  updateUserEmail(targetValue: string): any;
  updateUserPassword(targetValue: string): void;
  updateUserPasswordCheck(targetValue: string): void;
}

const SignUp: FC<Props> = ({
  userEmail,
  userPassword,
  userPasswordCheck,
  updateAppClass,
  updateUserEmail,
  updateUserPassword,
  updateUserPasswordCheck
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

  // 체크 박스 클릭 동작
  const isAccept = (state: string): void => {
    setChecked(state);
  };

  // Id, Pw, PwCheck를 store에 dispatch
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    switch (name) {
      case "updateUserEmail":
        updateUserEmail(value);
        break;
      case "updateUserPassword":
        updateUserPassword(value);
        break;
      case "updateUserPasswordCheck":
        updateUserPasswordCheck(value);
        break;
      default:
        return;
    }
  };

  return (
    <Authorization>
      <AuthorizationWrapper>
        <HeadLine title="2020 지원자 본인인증" />
        <AcceptTerms
          isAccept={isAccept}
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
            handleChange={handleChange}
          />
        ) : (
          <InformationDisableInputBox />
        )}
      </AuthorizationWrapper>
    </Authorization>
  );
};

const mapStateToProps = state => ({
  userEmail: state.AuthorizationReducer.userEmail,
  userPassword: state.AuthorizationReducer.userPassword,
  userPasswordCheck: state.AuthorizationReducer.userPasswordCheck
});

const mapDispatchToProps = dispatch => ({
  updateUserEmail: targetValue => dispatch(updateUserEmail(targetValue)),
  updateUserPassword: targetValue => dispatch(updateUserPassword(targetValue)),
  updateUserPasswordCheck: targetValue =>
    dispatch(updateUserPasswordCheck(targetValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
