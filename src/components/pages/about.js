import React from "react";

const aboutStyle = {
  padding: '1em',
  fontStyle: 'bold',
  color: 'SteelBlue',
};

const aboutHeading = {
  padding: '1em',
  fontStyle: 'bold',
  color: 'black',
  textShadow: '2px 2px black',
  fontSize: '40px',
};

function About() {
    return (
    <header>
    <h1 style={aboutHeading}>
      About Us
        <br/>
      <small style={aboutStyle}>Karankumar Patel - 200350059</small>
        <br />
      <small style={aboutStyle}>I am a mechanical engineer. I am an enthusiastic computer programmer as well.</small>
    </h1>
  </header>
    );
}

export default About;