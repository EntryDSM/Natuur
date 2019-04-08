import React, { FC, useEffect } from "react";
import { connect } from "react-redux";

import { updateAppContainer } from "../../core/redux/actions/default";

interface Props {
  configContainer: typeof updateAppContainer;
}

const Info: FC<Props> = ({ configContainer }) => {
  const didMountRef = React.useRef(false);

  // componentDidmount
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      // input did mount logic.
      configContainer({ container: "info-summary" });
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
