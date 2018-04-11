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
                    <div id="partnersBox">
                    <div id="linefill"></div>
                        
                            
                        <h1 id="partnersHeading">Our Partners </h1>
                        
                        <div id="linefill"></div>
                    <button class="collapsible">Real Hope for Haiti</button>
                    <div class="content">
                        <p>Something About Real Hope for Haiti...</p>
                    </div>
                    <button class="collapsible">Haiti Design</button>
                    <div class="content">
                        <p>Something About Haiti Design</p>
                        </div>
                        <button class="collapsible">Respire</button>
                    <div class="content">
                        <p>Something About Respire</p>
                        </div>
                        <button class="collapsible">Heartline</button>
                    <div class="content">
                        <p>Something About Heartline</p>
                    </div>
                    <button class="collapsible">Second Mile</button>
                    <div class="content">
                        <p>Something About Second Mile</p>
                    </div>
                    <button class="collapsible">Creole Inc</button>
                    <div class="content">
                        <p>Something About Creole Inc</p>
                    </div>
                    <button class="collapsible">Corrigan Clay</button>
                    <div class="content">
                        <p>Something About Corrigan Clay</p>
                    </div>
                    </div>


                    {/* <div id="partnersBox">
                <ul>
                <li><a class="partnersList" href="realhope">Real Hope for Haiti</a></li>
                <li><a class="partnersList" href="haitiDesign">Haiti Design co-op</a></li>
                <li><a class="partnersList" href="respire">Respire</a></li>
                <li><a class="partnersList" href="heartline">Heartline</a></li>
                <li><a class="partnersList" href="secondline">Second Mile</a></li>
                <li><a class="partnersList" href="creoleinc">Creole Inc</a></li>
                <li><a class="partnersList" href="corriganclay">Corrigan Clay</a></li>
                </ul>
            </div> */}
                </div>

            </Fragment>
        );
    }
}