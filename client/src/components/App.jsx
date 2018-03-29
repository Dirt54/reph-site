import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Vision from "./Vision";
import Mission from "./Mission";
import Partners from "./Partners";
import Connect from "./Connect";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Link to="/"></Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/vision" component={Vision} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/connect" component={Connect} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}