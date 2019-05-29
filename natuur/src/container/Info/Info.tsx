import React, { FC, useEffect, useRef } from "react";

interface Props {
  updateAppClass(text: string): void;
}

const Info: FC<Props> = ({ updateAppClass }) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      // input did mount logic.
      updateAppClass("info-summary");
    }
  });

  return <div>a</div>;
};

export default Info;
