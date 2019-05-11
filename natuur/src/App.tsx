import React, { FC, useState } from "react";
import { hot } from "react-hot-loader/root";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import {
  SignUp,
  Login,
  Classification,
  Grade,
  Info,
  Introduce,
  Main,
  MyPage,
  PersonalInformation,
  Preview,
  Header,
  Footer
} from "./container";

const App: FC = () => {
  const [appClass, setAppClass] = useState("");

  const updateAppClass = (text: string): void => {
    setAppClass(text);
  };

  return (
    <BrowserRouter>
      <div className={appClass}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route
            path="/"
            component={() => <Main updateAppClass={updateAppClass} />}
            exact
          />
          <Route
            path="/auth"
            component={() => <SignUp updateAppClass={updateAppClass} />}
            exact
          />
          <Route path="/confirm/:code" component={() => <Login />} exact />
          <Route
            path="/info-summary"
            component={() => <Info updateAppClass={updateAppClass} />}
            exact
          />
          <Route path="/classify" component={() => <Classification />} exact />
          <Route
            path="/personal"
            component={() => <PersonalInformation />}
            exact
          />
          <Route path="/intro" component={() => <Introduce />} exact />
          <Route path="/preview" component={() => <Preview />} exact />
          <Route path="/grade" component={() => <Grade />} exact />
          <Route path="/mypage" component={() => <MyPage />} exact />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default hot(App);
