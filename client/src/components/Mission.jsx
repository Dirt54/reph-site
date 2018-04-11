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
             <p>
             Rephidim’s mission is to implement a relationship-focused and grantee-centric philanthropic approach in developing and third-world countries, through partnership with experienced organizations and knowledgable individuals. The focus of every grant and partnership is to counteract injustices, through advancing the quality of life, improving health, and enabling community development in a sustainable and transformational manner. 
                 </p>
         </div>

      </Fragment>
    );
  }
}