import React, { FC } from "react";

import * as S from "../../../styles/Main";

interface Props {
  title: string;
}

const ViewCloseContent: FC<Props> = ({ title, children }) => (
  <>
    <S.ViewCloseText isTitle isWaitingPeriod>
      {title}
    </S.ViewCloseText>
    {children}
  </>
);

export default ViewCloseContent;
