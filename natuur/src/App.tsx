import React, { FC, useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import {
  Classification,
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
import ScrollToTop from "./components/default/ScrollToTop";
import GlobalStyle from "./styles/GlobalStyle";
import { AppState } from "./core/redux/store/store";
import { logOut } from "./core/redux/actions/user";
import { getApplicationDocument } from "./core/redux/actions/applicantDocument";

const mapStaetToProps = (state: AppState) => ({
  accessToken: state.userReducer.accessToken,
  refreshToken: state.userReducer.refreshToken,
  email: state.userReducer.userEmail
});

const mapDispatchToProps = dispatch => ({
  logOut: (payload: { refreshToken: string }) => dispatch(logOut(payload)),
  getApplicationDocument: (payload: { accessToken: string }) =>
    dispatch(getApplicationDocument(payload))
});

type Props = ReturnType<typeof mapStaetToProps> &
  ReturnType<typeof mapDispatchToProps>;

const App: FC<Props> = ({
  accessToken,
  refreshToken,
  email,
  logOut,
  getApplicationDocument
}) => {
  const didMountRef = useRef(false);
  const [appClass, setAppClass] = useState("");

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      getApplicationDocument({ accessToken });
    }
  },        []);

  return (
    <BrowserRouter>
      <div id={appClass}>
        <GlobalStyle />
        <Header
          userName={email.split("@")[0]}
          accessToken={accessToken}
          refreshToken={refreshToken}
          logOut={logOut}
        />
        <ScrollToTop>
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
              path="/info-summary"
              render={() => (
                <ConnectSelectCategory updateAppClass={setAppClass} />
              )}
              exact
            />
            <Route path="/classify" render={() => <Classification />} exact />
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
            <Route component={ErrorPage} />
          </Switch>
        </ScrollToTop>
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
