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
  isGetSuccess: boolean;
  isCertification: boolean;
  userEmail: string;
  userPassword: string;
  isPasswordClose: boolean;
  updateToastr(toastrInformation: {
    toastrState?: "info" | "errorState" | "success" | "warning";
    toastrTitle?: string;
    toastrMessage?: string;
    timer?: number;
    id?: number;
  }): void;
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
  isCertification,
  isGetSuccess,
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
      toastrMessage: "입력한 정보를 확인해주세요.",
      toastrState: "warning"
    });
  },                                      []);

  useEffect(() => {
    if (isGetSuccess) {
      pushMainAndUpdateToastr(createSuccessToastr, history, isGetSuccess);
    }
  },        [isGetSuccess]);

  return (
    <AcceptButtonComponent>
      <ButtonCover
        isDisable={!isSuccess}
        onClick={
          isSuccess
            ? isCertification
              ? null
              : () => signUp({ email: userEmail, password: userPassword })
            : createFailursToastr
        }
        next="true"
        to="/auth"
        as="button"
      >
        <ButtonArrow>〉</ButtonArrow>
        <ButtonText>{isPasswordClose ? "계정인증" : "생성하기"}</ButtonText>
      </ButtonCover>
    </AcceptButtonComponent>
  );
};

export default withRouter(AcceptButton);
