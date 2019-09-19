import React, { FC } from "react";

import * as S from "../../styles/Grade";

interface OwnProps {
  isLast?: boolean;
  title: string;
}

const Wrapper: FC<OwnProps> = ({ isLast = false, title, children }) => (
  <S.WrapperCover isLast={isLast}>
    <p>{title}</p>
    <div>{children}</div>
  </S.WrapperCover>
);

export default Wrapper;
