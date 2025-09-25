import React from "react";
import './Contact.css'

import ContactForm from "./ContactForm/ContactForm"


const EMAIL = "ccarrasquillo3@gatech.edu"

const LINK_DATA = [
    {name: "GitHub", link: "https://github.com/CarlosCarras", image: require("./../../assets/logos/github.png")},
    {name: "LinkedIn", link: "https://www.linkedin.com/in/carlos-carrasquillo-037422194/", image: require("./../../assets/logos/linkedin.png")},
]


function Contact() {
    return(
        <div className="contact-container">
            <div className="contact-container-row">
                <div className="contact-container-division">
                    <div>
                        <h2>Contact Info</h2>
                        <p><b>Email</b>:&nbsp; <a href={"mailto:"+EMAIL}>{EMAIL}</a></p>
                    </div>
                    <br/>
                    <div>
                        <h2>Links</h2>

                        <div className="contact-button-container">
                            {
                                LINK_DATA.map((data, index) => (
                                    <a key={index} className="contact-button" href={data.link} target="_blank" rel="noopener noreferrer">
                                        <img src={data.image} alt={data.name}/>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="contact-container-division">
                    <h2>Contact Form</h2>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}

export default Contact;