import React, { FC, useEffect } from "react";
import { connect } from "react-redux";

import { updateAppContainer } from "../../core/redux/actions/default";

interface Props {
  configContainer: typeof updateAppContainer;
}

const Main: FC<Props> = ({ configContainer }) => {
  const didMountRef = React.useRef(false);

  // componentDidmount()
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      // input did mount logic.
      configContainer({ container: "main-page" });

      return;
    }
  });

  return <div>a</div>;
};

const mapDispatchToProps = dispatch => ({
  configContainer: payload => dispatch(updateAppContainer(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(Main);
