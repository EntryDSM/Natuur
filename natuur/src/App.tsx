import React, { FC, useState } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import {
  Classification,
  Footer,
  Grade,
  Header,
  Info,
  Introduce,
  Main,
  MyPage,
  PersonalInformation,
  Preview,
  SignUp
} from "./container";
import GlobalStyle from "./styles/GlobalStyle";
import ToastrBar from "./components/default/Common/ToastrBarCover";
import { AppState } from "./core/redux/store/store";

const mapStaetToProps = (state: AppState) => ({
  accessToken: state.userReducer.accessToken,
  refreshToken: state.userReducer.refreshToken,
  userName: state.mainReducer.email
});

type Props = ReturnType<typeof mapStaetToProps>;

const App: FC<Props> = ({ accessToken, refreshToken, userName }) => {
  const [appClass, setAppClass] = useState("");

  return (
    <BrowserRouter>
      <div className={appClass}>
        <GlobalStyle />
        <Header
          userName={`${userName}`.split("@")[0]}
          accessToken={accessToken}
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
            path="/info-summary"
            render={() => <Info updateAppClass={setAppClass} />}
            exact
          />
          <Route path="/classify" render={() => <Classification />} exact />
          <Route
            path="/personal"
            render={() => <PersonalInformation />}
            exact
          />
          <Route path="/intro" render={() => <Introduce />} exact />
          <Route path="/preview" render={() => <Preview />} exact />
          <Route path="/grade" render={() => <Grade />} exact />
          <Route path="/mypage" render={() => <MyPage />} exact />
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
    null
  )(App)
);
