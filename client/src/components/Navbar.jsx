import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav role='navigation'>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            {/* <li>
              <a href="/vision">Vision</a>
            </li>
            <li>
              <a href="/mission">Mission</a>
            </li> */}
            <li>
              <a href="/partners">Partners</a>
            </li>
            <li id="connectTab">
              <a href="/connect">Connect</a>
            </li>
          </ul>
      </nav>
    );
  }
}