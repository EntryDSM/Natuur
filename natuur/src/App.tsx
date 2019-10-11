import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import {
  Footer,
  Header,
  Introduce,
  Main,
  MyPage,
  Preview,
  SignUp,
  PersonalInformation,
  Print
} from "./container";
import ConnectSelectCategory from "./container/Info/ConnectSelectCategory";
import ConnectGrade from "./container/Grade/ConnectGrade";
import ErrorPage from "./components/default/ErrorPage";
import ToastrBar from "./components/default/Common/ToastrBarCover";
import CheckToken from "./components/default/CheckToken";
import GlobalStyle from "./styles/GlobalStyle";
import { AppState } from "./core/redux/store/store";
import { logOut } from "./core/redux/actions/user";
import { getApplicationDocument } from "./core/redux/actions/applicantDocument";
import { updateToastr } from "./core/redux/actions/default";

const mapStaetToProps = (state: AppState) => ({
  accessToken: state.userReducer.accessToken,
  refreshToken: state.userReducer.refreshToken,
  email: state.userReducer.userEmail,
  errorRefreshStatus: state.userReducer.errorRefreshStatus,
  isLogOut: state.userReducer.isLogOut
});

const mapDispatchToProps = dispatch => ({
  logOut: (payload: { refreshToken: string }) => dispatch(logOut(payload)),
  getApplicationDocument: (payload: { accessToken: string }) =>
    dispatch(getApplicationDocument(payload)),
  updateToastr: (payload: {
    toastrState?: "info" | "errorState" | "success" | "warning";
    toastrTitle?: string;
    toastrMessage?: string;
    timer?: number;
    id?: number;
  }) => dispatch(updateToastr(payload))
});

type Props = ReturnType<typeof mapStaetToProps> &
  ReturnType<typeof mapDispatchToProps>;

const App: FC<Props> = ({
  accessToken,
  refreshToken,
  email,
  logOut,
  isLogOut,
  getApplicationDocument,
  errorRefreshStatus,
  updateToastr
}) => {
  const didMountRef = useRef(false);
  const [appClass, setAppClass] = useState("");

  const createToastr = useCallback(() => {
    updateToastr({
      timer: 5,
      toastrMessage: "세션이 만료되어 로그아웃 됩니다.",
      toastrState: "info"
    });
  },                               []);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (accessToken) {
        getApplicationDocument({ accessToken });
      }
    }
  },        []);

  useEffect(() => {
    if (errorRefreshStatus === 401) {
      createToastr();
      logOut({ refreshToken });
    }
  },        [errorRefreshStatus]);

  return (
    <BrowserRouter>
      <div id={appClass}>
        <GlobalStyle />
        <Header
          userName={email.split("@")[0]}
          accessToken={accessToken}
          refreshToken={refreshToken}
          logOut={logOut}
          isLogOut={isLogOut}
        />
        <Switch>
          <Route
            path="/"
            render={() => (
              <Main accessToken={accessToken} updateAppClass={setAppClass} />
            )}
            exact
          />
          <Route
            path="/auth"
            render={() => <SignUp updateAppClass={setAppClass} />}
            exact
          />
          <Route
            path="/mypage"
            render={() => <MyPage updateAppClass={setAppClass} />}
            exact
          />
          <Route
            path="/print"
            render={() => <Print updateAppClass={setAppClass} />}
            exact
          />
          <CheckToken accessToken={accessToken}>
            <>
              <Route
                path="/info-summary"
                render={() => (
                  <ConnectSelectCategory updateAppClass={setAppClass} />
                )}
                exact
              />
              <Route
                path="/personal"
                render={() => <PersonalInformation />}
                exact
              />
              <Route path="/intro" render={() => <Introduce />} exact />
              <Route
                path="/preview"
                render={() => <Preview updateAppClass={setAppClass} />}
                exact
              />
              <Route path="/grade" render={() => <ConnectGrade />} exact />
            </>
          </CheckToken>
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
        <ToastrBar />
      </div>
    </BrowserRouter>
  );
};

export default hot(
  connect(
    mapStaetToProps,
    mapDispatchToProps
  )(App)
);
