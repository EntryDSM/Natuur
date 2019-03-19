import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

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
  Preview
} from "./container";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={<Main />} exact />
          <Route path="/auth" component={<SignUp />} exact />
          <Route path="/confirm/:code" component={<Login />} exact />
          <Route path="/info-summary" component={<Info />} exact />
          <Route path="/classify" component={<Classification />} exact />
          <Route path="/personal" component={<PersonalInformation />} exact />
          <Route path="/intro" component={<Introduce />} exact />
          <Route path="/preview" component={<Preview />} exact />
          <Route path="/grade" component={<Grade />} exact />
          <Route path="/mypage" component={<MyPage />} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
