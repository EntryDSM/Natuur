import React, { FC, useEffect, useRef, useCallback } from "react";
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
  removeToastr(id: number): void;
}

const ToastrBar: FC<Props> = ({
  removeToastr,
  toastrState,
  toastrTitle,
  toastrMessage,
  timer,
  id
}) => {
  const didMountRef = useRef(false);
  let timeChecker;

  const StopToTimeChecker = useCallback(() => {
    clearTimeout(timeChecker);
    removeToastr(id);
  },                                    []);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      // timer의 시간에 맞춰서 component를 지움
      timeChecker = setTimeout(() => removeToastr(id), timer * 1000);
    }
  },        []);

  return (
    <ToastrBarContents toastrState={toastrState} onClick={StopToTimeChecker}>
      <ToastrBarProgress timer={timer} />
      <ToastrBarTitle>{toastrTitle}</ToastrBarTitle>
      <ToastrBarMessage>{toastrMessage}</ToastrBarMessage>
    </ToastrBarContents>
  );
};

export default ToastrBar;
