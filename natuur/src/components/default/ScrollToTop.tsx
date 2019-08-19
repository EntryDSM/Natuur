import React, { FC, useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

const ScrollToTop: FC<RouteComponentProps> = ({
  children,
  location: { pathname }
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },        [pathname]);

  return <>{children || null}</>;
};

export default withRouter(ScrollToTop);
