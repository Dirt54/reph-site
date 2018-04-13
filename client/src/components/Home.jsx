import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import indoorhaiti from '../images/indoorhaiti.jpg';
import haitipainting from '../images/haitipainting.jpg';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>

        <div id="frontPic" >
          {/* <img  src={haitipainting} /> */}


        </div>
        <div id="homeArea1">
          <div id="linefill"></div>
          {/* <h3>About Us</h3> */}
          <div id="aboutusbox">
            <p>We strive to be conscious funders, by granting with humility, listening and trusting our partners, and being their biggest advocates. </p>
          </div>
          <div id="linefill"></div>

          <h3>Our Values</h3>

          <div id="valueItems">
            <div className="valueItem">
            Trust
            <div className="valuepics" id="trust"></div>
            </div>
            <div className="valueItem">
            Humility
            <div className="valuepics" id="humility"></div>
            </div>
            <div className="valueItem">
            Relationship/Partnership
            <div className="valuepics" id="relationship"></div>
            </div>
            <div className="valueItem">
            Empowerment
            <div className="valuepics" id="empowerment"></div>
            </div>
            <div className="valueItem">
            Sustainability
            <div className="valuepics" id="sustainability"></div>
            </div>
            <div className="valueItem">
            Respect/Integrity
            <div className="valuepics" id="respect"></div>
            </div>
            <div className="valueItem">
            Compassion
            <div className="valuepics" id="compassion"></div>
            </div>
            <div className="valueItem">
            Service
            <div className="valuepics" id="service"></div>
            </div>
            <div className="valueItem">
            Inclusivity/Equality
            <div className="valuepics" id="equality"></div>
            </div>
            <div className="valueItem">
            Community
              <div className="valuepics" id="community"></div>
            </div>
          </div>

          {/* <div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Trust</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Humility</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Relationship/Partnership</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Empowerment</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Sustainability</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Respect/Integrity</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Compassion</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Service</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Inclusivity/Equality</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Community</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div> */}

        </div>

      </Fragment>
    );
  }
}