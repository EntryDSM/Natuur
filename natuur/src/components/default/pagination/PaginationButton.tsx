import React, { FC } from "react";

import * as S from "../../../styles/default/pagination";

interface OwnProps {
  connectServer: () => void;
  routerPath: string;
}

const PaginationButton: FC<OwnProps> = ({
  connectServer,
  routerPath,
  children
}) => (
  <S.Button to={routerPath} onClick={connectServer}>
    {children}
  </S.Button>
);

export default PaginationButton;
