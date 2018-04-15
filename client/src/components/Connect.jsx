import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { sendEmail } from '../services/email';

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

    handleSubmit(e) {
        e.preventDefault();
        sendEmail(this.state.name, this.state.email, this.state.subject, this.state.message)
        // .then(() => { 
        //     this.props.history.push('/');
        // }).catch((err) => {
        //     console.log(err);
        // })
    }
    

    render() {
        const { name, email, subject, message } = this.state;
        console.log(this.state);
        return (
            <Fragment>
                <div id="homeArea1">
                    <div id="contactContain">
                        <h1>Contact Us</h1>
                        <form onSubmit={ (e) => this.handleSubmit(e) }>
                            <div>
                                <label htmlFor="name">Your Name</label><br />
                                <input type="name" className="inputField" id="name" value={this.state.name} onChange={(event) => { this.handleNameChange(event.target.value) }}></input>
                            </div>
                            <div>
                                <label htmlFor="emailAdress">Your Email</label><br />
                                <input type="email" className="inputField" id="emailAdress" value={this.state.email} onChange={(event) => { this.handleEmailChange(event.target.value) }}></input>
                            </div>
                            <div>
                                <label htmlFor="subject">Subject</label><br />
                                <input type="text" className="inputField" id="subject" value={this.state.subject} onChange={(event) => { this.handleSubjectChange(event.target.value) }}></input>
                            </div>
                            <div>
                                <label htmlFor="message">Message</label><br />
                                {/* <input type="text" class="inputField" id="message"></input> */}
                                <textarea rows="5" value={this.state.message} onChange={(event) => { this.handleMessageChange(event.target.value) }}></textarea>
                            </div>
                            {/* <button id="contactBtn" type="submit" value="CONTACT US" onClick={() => { sendEmail(this.state.name, this.state.email, this.state.subject, this.state.message) }}>Contact Us</button> */}
                            <input id="contactBtn" type="submit" value="CONTACT US"></input>
                        </form>
                    </div>
                </div>

            </Fragment>
        );
    }
}