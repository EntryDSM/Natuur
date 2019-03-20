import React, { useEffect } from "react";
import { connect } from "react-redux";

import { updateAppContainer } from "../../core/redux/actions/default";

const Main = ({ configContainer }) => {
  // componentDidmount
  useEffect(() => {
    configContainer("main-page");
  }, []);

  return <div>a</div>;
};

const mapDispatchToProps = dispatch => ({
  configContainer: container => dispatch(updateAppContainer(container))
});

export default connect(
  null,
  mapDispatchToProps
)(Main);
