import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
//     var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });

    render() {
        return (
            <Fragment>
                <div id="homeArea1">
                    <div id="partnersBox">
                    <div id="linefill"></div>
                        
                            
                        <h1 id="partnersHeading">Our Partners </h1>
                        
                        <div id="linefill"></div>
                    <button className="collapsible" id="topBox">Real Hope for Haiti</button>
                    <div className="content">
                        <p>Something About Real Hope for Haiti...</p>
                    </div>
                    <button className="collapsible">Haiti Design</button>
                    <div className="content">
                        <p>Something About Haiti Design</p>
                        </div>
                        <button className="collapsible">Respire</button>
                    <div className="content">
                        <p>Something About Respire</p>
                        </div>
                        <button className="collapsible">Heartline</button>
                    <div className="content">
                        <p>Something About Heartline</p>
                    </div>
                    <button className="collapsible">Second Mile</button>
                    <div className="content">
                        <p>Something About Second Mile</p>
                    </div>
                    <button className="collapsible">Creole Inc</button>
                    <div className="content">
                        <p>Something About Creole Inc</p>
                    </div>
                    <button className="collapsible">Corrigan Clay</button>
                    <div className="content">
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