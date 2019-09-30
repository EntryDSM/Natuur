import React, { FC, useCallback, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { History } from "history";

import {
  AcceptButtonComponent,
  ButtonCover,
  ButtonArrow,
  ButtonText
} from "../../../styles/default";

interface OwnProps {
  isSuccess: boolean;
  isSignUpSuccess: boolean;
  isSignUpError: boolean;
  userEmail: string;
  userPassword: string;
  isPasswordClose: boolean;
  updateToastr(toastrInformation: object): void;
  signUp({ email, password }: { email: string; password: string }): void;
}

type Props = RouteComponentProps & OwnProps;

const pushMainAndUpdateToastr = (
  updateToastr: () => void,
  history: History,
  isSignUpSuccess: boolean
) => {
  if (isSignUpSuccess) {
    updateToastr();
    history.push("/");
  }
};

const AcceptButton: FC<Props> = ({
  updateToastr,
  isSuccess,
  isSignUpError,
  isSignUpSuccess,
  isPasswordClose,
  signUp,
  history,
  userEmail,
  userPassword
}) => {
  const createSuccessToastr = useCallback(() => {
    updateToastr({
      timer: 5,
      toastrMessage: "회원가입에 성공하셨습니다.",
      toastrState: "success"
    });
  },                                      []);

  const createFailursToastr = useCallback(() => {
    updateToastr({
      timer: 5,
      toastrMessage: "개인정보를 입력해주세요.",
      toastrState: "warning"
    });
  },                                      []);

  useEffect(() => {
    if (isSignUpSuccess) {
      pushMainAndUpdateToastr(createSuccessToastr, history, isSignUpSuccess);
    }
  },        [isSignUpSuccess]);

  return (
    <AcceptButtonComponent>
      <ButtonCover
        isDisable={!isSuccess}
        onClick={
          isSuccess
            ? () => signUp({ email: userEmail, password: userPassword })
            : createFailursToastr
        }
        next="true"
        as="button"
      >
        <ButtonArrow>〉</ButtonArrow>
        <ButtonText>{isPasswordClose ? "계정인증" : "생성하기"}</ButtonText>
      </ButtonCover>
    </AcceptButtonComponent>
  );
};

export default withRouter(AcceptButton);
