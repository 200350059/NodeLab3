import React from "react";

const contactStyle = {
  padding: '1em',
  fontStyle: 'bold',
  color: 'Crimson',
};

const contactHeading = {
  padding: '1em',
  fontStyle: 'bold',
  color: 'black',
  textShadow: '2px 2px black',
  fontSize: '40px',
};

function Contact() {
    return (
        <header>
        <h1 style={contactHeading}>
          Contact
            <br/>
          <small style={contactStyle}>Karankumar Patel :  </small>
            <br/>
          <small style={contactStyle}>Email:- 200350059@student.georgianc.on.ca</small>
          <br/>
          <small style={contactStyle}>Phone No:- +17058960219</small>
        </h1>
      </header>
        );
}

export default Contact;