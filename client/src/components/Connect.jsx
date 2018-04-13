import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import * as emailService from '../services/email';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };
    }

    handleNameChange(name) {
        this.setState({ name });
    }

    handleEmailChange(email) {
        this.setState({ email });
    }

    handleSubjectChange(subject) {
        this.setState({ subject });
    }

    handleMessageChange(message) {
        this.setState({ message });
    }


    render() {
        const { name, email, subject, message } = this.state;
        return (
            <Fragment>
                <div id="homeArea1">
                    <div id="contactContain">
                        <h1>Contact Us</h1>
                        <form>
                            <div>
                                <label htmlFor="name">Your Name</label><br />
                                <input type="name" className="inputField" id="name" value={post.name} onChange={(event) => { this.handleNameChange(event.target.value) }}></input>
                            </div>
                            <div>
                                <label htmlFor="emailAdress">Your Email</label><br />
                                <input type="email" className="inputField" id="emailAdress" value={post.email} onChange={(event) => { this.handleEmailChange(event.target.value) }}></input>
                            </div>
                            <div>
                                <label htmlFor="subject">Subject</label><br />
                                <input type="text" className="inputField" id="subject" value={post.subject} onChange={(event) => { this.handleSubjectChange(event.target.value) }}></input>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label><br />
                                {/* <input type="text" class="inputField" id="message"></input> */}
                                <textarea rows="5" value={post.message} onChange={(event) => { this.handleMessageChange(event.target.value) }}></textarea>
                            </div>
                            <button id="contactBtn" type="submit" value="CONTACT US" onClick={() => { emailService.sendEmail(this.state) }}></button>
                        </form>
                    </div>
                </div>

            </Fragment>
        );
    }
}