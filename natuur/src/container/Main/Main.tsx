import React, { FC, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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
  },        []);
  return <Link to="/auth">ff</Link>;
};

export default Main;
