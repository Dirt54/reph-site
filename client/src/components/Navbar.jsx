import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav role='navigation' className="topnav" id="myTopnav">
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
          <li>
          <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>&#9776;</a>
            </li>
        </ul>
        {/* <select>
          <option value="" selected="selected">Select</option>

          <option value="/">Home</option>
          <option value="/about">About</option>
          <option value="/partners">Partners</option>
          <option value="/connect">Connect</option>
        </select> */}
      </nav>
    );
  }
}