import React, { FC, useRef, useEffect } from "react";

interface Props {
  updateAppClass(text: string): void;
}

const Main: FC<Props> = ({ updateAppClass }) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      updateAppClass("main-page");
      return;
    }
  }, []);
  return <div>a</div>;
};

export default Main;
