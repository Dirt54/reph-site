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

                <div id="aboutArea1">

                    <div id="aboutVision">
                        <div id="visionInfo">
                            <h1>Vision</h1>
                            <p>Rephidim’s vision is to balance the world’s inequities and uphold basic human rights through empowering, aiding, and supporting those who serve disadvantaged individuals and communities.</p>
                        </div>
                        <div id="visionPic" class="aboutPics"></div>
                    </div>

                    <div id="linefill"></div>

                    <div id="aboutMission">
                        <div id="missionPic" class="aboutPics"></div>
                        <div id="missionInfo">
                            <h1>Mission</h1>
                            <p>Rephidim’s mission is to implement a relationship-focused and grantee-centric philanthropic approach in developing and third-world countries, through partnership with experienced organizations and knowledgable individuals. The focus of every grant and partnership is to counteract injustices, through advancing the quality of life, improving health, and enabling community development in a sustainable and transformational manner. </p>
                        </div>
                        
                    </div>

                </div>


            </Fragment>
        );
    }
}