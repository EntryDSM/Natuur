import React, { FC } from "react";
import { connect } from "react-redux";

import { ToastrBarContainer } from "../../../styles/default";
import { ToastrBar } from ".";
import { PayloadType, removeToastr } from "../../../core/redux/actions/default";

interface Props {
  toastrInformations: PayloadType[];
  removeToastr(): void;
}

const ToastrBarCover: FC<Props> = ({ toastrInformations, removeToastr }) => {
  return (
    <ToastrBarContainer>
      {toastrInformations.map((value, id) => {
        const { toastrState, toastrTitle, toastrMessage, timer } = value;
        return (
          <ToastrBar
            removeToastr={removeToastr}
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
  removeToastr: id => dispatch(removeToastr(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastrBarCover);
