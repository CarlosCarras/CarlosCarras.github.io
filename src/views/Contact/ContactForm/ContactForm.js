import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";


const public_key = process.env.EMAILJS_PUBLIC_KEY || "sLlCRFTj6pZ71DG1N";
const emailjs_service_id = process.env.EMAILJS_SERVICE_ID || "service_6jbyhw6";
const emailjs_template_id = process.env.EMAILJS_TEMPLATE_ID || "template_qzsvigm";


function ContactForm() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [emailValidity, setEmailValidity] = useState(false);
    const [nameValidity, setNameValidity] = useState(false);
    const [messageValidity, setMessageValidity] = useState(false);

    const [emailTouched, setEmailTouched] = useState(false);
    const [nameTouched, setNameTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setEmailValidity(validateEmail(email));
        setEmailTouched(true);
        setEmail(email);
    };

    const validateString = (string) => {
        const stringRegex = /\S/;
        return stringRegex.test(string);
    };

    const handleNameChange = (event) => {
        const name = event.target.value;
        setNameValidity(validateString(name));
        setNameTouched(true);
        setName(name);
    };

    const handlePhoneChange = (event) => {
        const phone = event.target.value;
        setPhone(phone);
    };

    const handleMessageChange = (event) => {
        const message = event.target.value;
        setMessageValidity(validateString(message));
        setMessageTouched(true);
        setMessage(message)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
                    
        setNameTouched(true);
        setEmailTouched(true);
        setMessageTouched(true);

        if (emailValidity && nameValidity && messageValidity) {    
            setFormSubmitted(true);
            
            try {
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    phone: phone,
                    message: message
                };
                 
                emailjs.send(emailjs_service_id, emailjs_template_id, templateParams, public_key)
                    .then(function(response) {
                        setFormError(false);
                        console.log("Form submitted!", response.status);
                    },  function(error) {
                        setFormError(true);
                        console.log('Form failed to submit.', error);
                });

            } catch (error) {
                setFormError(true);
                console.error(error);
            }
        } else {
            console.log("Form submission failed. Please check the form for errors.");
        }
    };

    function GetButtonText() {
        if (formError) return "Error: Please Try Again."
        else if (formSubmitted) return "Submitted!";
        
        return "Submit";
    }

    return (
        <div className="contactform-container">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="name">Name<span className="required">*</span></label>
                    <input type="text" 
                        id="name" 
                        name="name" 
                        onChange={handleNameChange}
                    />
                    <span className="error-message">
                        {(nameValidity || !nameTouched) ? "": "Please enter a valid name"}
                    </span>
                </div>
                <div className="form-row center">
                    <div className="column">
                        <label htmlFor="city">Email<span className="required">*</span></label>
                        <input type="text" 
                            id="city" 
                            name="city" 
                            onChange={handleEmailChange}/>
                            <span className="error-message">
                                {emailValidity || !emailTouched ? "": "Please enter a valid email address"}
                            </span>
                    </div>
                    <div className="column">
                        <label htmlFor="state">Phone</label>
                        <input type="text" 
                            id="state" 
                            name="state" 
                            onChange={handlePhoneChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="message">Message<span className="required">*</span></label>
                    <textarea id="message" 
                            name="message"
                            onChange={handleMessageChange}>
                    </textarea>
                    <span className="error-message">
                        {messageValidity || !messageTouched ? "": "Please enter a valid message."}
                    </span>
                </div>
                <div className="form-row">
                    <button type="submit" disabled={formSubmitted || formError}>
                        {GetButtonText()}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
