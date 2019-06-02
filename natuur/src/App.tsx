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
import ToastrBar from "./components/default/Common/ToastrBarCover";

const App: FC = () => {
  const [appClass, setAppClass] = useState("");

  return (
    <BrowserRouter>
      <div className={appClass}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route
            path="/"
            render={() => <Main updateAppClass={setAppClass} />}
            exact
          />
          <Route
            path="/auth"
            render={() => <SignUp updateAppClass={setAppClass} />}
            exact
          />
          <Route path="/confirm/:code" render={() => <Login />} exact />
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

export default hot(App);
