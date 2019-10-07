import React, { FC, Dispatch } from "react";
import { connect } from "react-redux";

import { ToastrBarContainer } from "../../../styles/default";
import { ToastrBar } from ".";
import { removeToastr } from "../../../core/redux/actions/default";
import { AppState } from "../../../core/redux/store/store";

const mapStateToProps = (State: AppState) => ({
  toastrInformations: State.defaultReducer.toastrInformations
});

const mapDispatchToProps = dispatch => ({
  removeToastr: id => dispatch(removeToastr(id))
});

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastrBarCover);
