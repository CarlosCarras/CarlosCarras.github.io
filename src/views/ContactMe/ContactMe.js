import React from 'react';
import ContactForm from "./ContactForm";
import './ContactMe.css'

const name       = "Carlos Carrasquillo",
      university = "University of Florida",
      dept       = ["Dept. of Mechanical and Aerospace Engineering",
                    "Dept. of Computer and Electrical Engineering"],
      phone      = "(787) 668-8096",
      email      = "ccarrasquillo3@gatech.edu",
      ProfilePic = require('./../../assets/profile-picture1.JPG');


class ContactMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    componentDidMount() {
        this.setState({isLoading: false})
    }


    getName() {
        return <span>{name}<br/></span>
    }
    getPhone() {
        return <span>{phone}<br/></span>
    }
    getEmail() {
        return <span>{email}<br/></span>
    }
    getUniversity() {
        return <span>{university}<br/></span>
    }
    getDept(n) {
        return <span>{dept[n]}<br/></span>
    }

    render(){
        return (
            <div className="contact-me-container">
                <div className="row" style={{paddingBottom: "15vh"}}>
                    <div className="two-col-format-column contact-me-col-left">
                        <div className="summary-wrapper">
                            <header>Contact Me</header>
                            <div className="summary">
                                <img src={ProfilePic} alt="profile pic"/>
                                <div className="signature">Carlos Carrasquillo</div>
                                <ul className="contact-list">
                                    <li>Phone: {this.getPhone()}</li>
                                    <li>Email: {this.getEmail()}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="two-col-format-column">
                        <div className="contact-me-col-right">
                          <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe;
