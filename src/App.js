import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import LandingPageContainer from "./containers/LandingPageContainer/LandingPageContainer";
import ErrorMessageContainer from "./containers/ErrorMesageContainer/ErrorMessageContainer";
import CoursesContainer from "./containers/CoursesContainer/CoursesContainer";
import CartContainer from "./containers/CartContainer/CartContainer";

const App = props => {
  const routes = (
    <Switch>
      <Route path="/landing" exact component={LandingPageContainer} />
      <Route path="/error" exact component={ErrorMessageContainer} />
      <Route path="/courses" exact component={CoursesContainer} />
      <Route path="/cart" exact component={CartContainer} />
      <Redirect to="/landing" />
    </Switch>
  );
  return <div className="App">{routes}</div>;
};

export default withRouter(connect(null, null)(App));
