import React, { FC, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as S from "../../../styles/default/pagination";
import { resetStatus } from "../../../core/redux/actions/applicantDocument";

interface OwnProps {
  connectServer: () => void;
  routerPath: string;
  isPutAction: boolean;
}

const PaginationButton: FC<OwnProps> = ({
  connectServer,
  routerPath,
  isPutAction,
  children
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPutAction) {
      dispatch(resetStatus());
    }
  },        [isPutAction]);

  return (
    <S.Button to={routerPath} onClick={connectServer}>
      {children}
    </S.Button>
  );
};

export default PaginationButton;
