import React, { FC } from "react";

import { TimeStempContent } from "../../../../styles/Main";

interface Props {
  content?: string;
}

const MainTimeStemp: FC<Props> = ({ content }) => (
  <div>
    <TimeStempContent>{content}</TimeStempContent>
  </div>
);

export default MainTimeStemp;
