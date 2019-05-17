import React, { FC } from "react";
import { connect } from "react-redux";

import { ToastrBarContainer } from "../../../styles/default";
import { ToastrBar } from "../../../components/default/Common";
import {
  PayloadType,
  turnOffToastr,
  removeToastr
} from "../../../core/redux/actions/default";

interface Props {
  toastrInformations: PayloadType[];
  turnOffToastr(id: number): void;
  removeToastr(): void;
}

const ToastrBarCover: FC<Props> = ({
  toastrInformations,
  turnOffToastr,
  removeToastr
}) => {
  return (
    <ToastrBarContainer>
      {toastrInformations.map((value, id) => {
        const { toastrState, toastrTitle, toastrMessage, timer } = value;
        return (
          <ToastrBar
            removeToastr={removeToastr}
            turnOffToastr={turnOffToastr}
            toastrState={toastrState}
            toastrTitle={toastrTitle}
            toastrMessage={toastrMessage}
            timer={timer}
            id={id}
            key={id}
          />
        );
      })}
    </ToastrBarContainer>
  );
};

const mapStateToProps = State => ({
  toastrInformations: State.defaultReducer.toastrInformations
});

const mapDispatchToProps = dispatch => ({
  turnOffToastr: id => dispatch(turnOffToastr(id)),
  removeToastr: () => dispatch(removeToastr())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastrBarCover);
