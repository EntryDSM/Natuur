import React, { FC } from "react";

import { TimeStempContent } from "../../../../styles/Main";

interface Props {
  content?: string;
}

const MainTimeStemp: FC<Props> = ({ content }) => (
  <>
    <TimeStempContent>{content}</TimeStempContent>
  </>
);

export default MainTimeStemp;
