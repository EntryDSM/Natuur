import React, { FC } from "react";

import { ProgressBarCover, ProgressBarAcctive } from "../../../../styles/Main";

interface Props {
  progressWidth: number;
}

const ProgressBar: FC<Props> = ({ progressWidth }) => (
  <ProgressBarCover>
    <ProgressBarAcctive activeWidth={`${progressWidth}%`} />
  </ProgressBarCover>
);

export default ProgressBar;
