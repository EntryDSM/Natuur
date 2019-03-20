import React, { useEffect } from "react";
import { connect } from "react-redux";

import { updateAppContainer } from "../../core/redux/actions/default";

const Info = ({ configContainer }) => {
  // componentDidmount
  useEffect(() => {
    configContainer("info-summary");
  }, []);

  return <div>a</div>;
};

const mapDispatchToProps = dispatch => ({
  configContainer: container => dispatch(updateAppContainer(container))
});

export default connect(
  null,
  mapDispatchToProps
)(Info);
