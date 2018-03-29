import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import wilson from  '../images/wilson.jpg';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>

      <img id="frontPic" src={wilson} alt="Wilson" />
      <div id="homeArea1"></div>

      </Fragment>
    );
  }
}