import React, { FC, useEffect, useRef } from "react";
import {
  ToastrBarContents,
  ToastrBarMessage,
  ToastrBarProgress,
  ToastrBarTitle
} from "../../../styles/default";

interface Props {
  toastrState?: string;
  toastrTitle?: string;
  toastrMessage?: string;
  timer?: number;
  id: number;
  turnOffToastr(id: number): void;
  removeToastr(): void;
}

const ToastrBar: FC<Props> = ({
  turnOffToastr,
  removeToastr,
  toastrState,
  toastrTitle,
  toastrMessage,
  timer,
  id
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      // timer의 시간에 맞춰서 component를 지움
      setTimeout(() => {
        removeToastr();
      },         timer * 1000);
    }
  },        []);

  return (
    <ToastrBarContents
      toastrState={toastrState}
      onClick={() => turnOffToastr(id)}
    >
      <ToastrBarProgress timer={timer} />
      <ToastrBarTitle>{toastrTitle}</ToastrBarTitle>
      <ToastrBarMessage>{toastrMessage}</ToastrBarMessage>
    </ToastrBarContents>
  );
};

export default ToastrBar;
