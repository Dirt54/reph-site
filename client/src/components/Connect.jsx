import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
          <div id="homeArea1">
              <div id="contactContain">
              <h1>Contact Us</h1>
            <form>
                 <div>
                <label for="name">Your Name</label><br/>
                    <input type="name" class="inputField" id="name"></input>
                </div>
                <div>
                    <label for="emailAdress">Your Email</label><br/>
                    <input type="email" class="inputField" id="emailAdress"></input>
                </div>
                <div>
                    <label for="subject">Subject</label><br/>
                    <input type="text" class="inputField" id="subject"></input>
                </div>
                <div>
                    <label for="message">Message</label><br/>
                    {/* <input type="text" class="inputField" id="message"></input> */}
                    <textarea rows="5"></textarea>
                </div>
                <input id="contactBtn" type="submit" value="CONTACT US"></input>
            </form>
            </div>
          </div>

      </Fragment>
    );
  }
}