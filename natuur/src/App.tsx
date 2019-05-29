import React, { FC, useState } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  Classification,
  Footer,
  Grade,
  Header,
  Info,
  Introduce,
  Login,
  Main,
  MyPage,
  PersonalInformation,
  Preview,
  SignUp
} from "./container";
import GlobalStyle from "./styles/GlobalStyle";

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
            exact={true}
          />
          <Route
            path="/auth"
            component={() => <SignUp updateAppClass={updateAppClass} />}
            exact={true}
          />
          <Route
            path="/confirm/:code"
            component={() => <Login />}
            exact={true}
          />
          <Route
            path="/info-summary"
            component={() => <Info updateAppClass={updateAppClass} />}
            exact={true}
          />
          <Route
            path="/classify"
            component={() => <Classification />}
            exact={true}
          />
          <Route
            path="/personal"
            component={() => <PersonalInformation />}
            exact={true}
          />
          <Route path="/intro" component={() => <Introduce />} exact={true} />
          <Route path="/preview" component={() => <Preview />} exact={true} />
          <Route path="/grade" component={() => <Grade />} exact={true} />
          <Route path="/mypage" component={() => <MyPage />} exact={true} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default hot(App);
