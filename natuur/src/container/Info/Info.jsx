import React, { useEffect } from "react";
import { connect } from "react-redux";

import { updateAppContainer } from "../../core/redux/actions/default";

const Info = ({ configContainer }) => {
  const didMountRef = React.useRef(false);

  // componentDidmount
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      // input did mount logic.
      configContainer("info-summary");
    }
  });

  return <div>a</div>;
};

const mapDispatchToProps = dispatch => ({
  configContainer: container => dispatch(updateAppContainer(container))
});

export default connect(
  null,
  mapDispatchToProps
)(Info);