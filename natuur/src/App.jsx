import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyle } from "./styles/default";
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

const App = ({ containerName }) => {
  return (
    <BrowserRouter>
      <div className={containerName}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" component={() => <Main />} exact />
          <Route path="/auth" component={() => <SignUp />} exact />
          <Route path="/confirm/:code" component={() => <Login />} exact />
          <Route path="/info-summary" component={() => <Info />} exact />
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

const mapStateToProps = state => ({
  containerName: state.defaultReducer.container
});

export default connect(
  mapStateToProps,
  null
)(App);
