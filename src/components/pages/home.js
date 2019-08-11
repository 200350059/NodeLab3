import React from "react";

const homeStyle = {
    padding: '1em',
    fontStyle: 'bold',
    color: 'olive',
};

const homeHeading = {
  padding: '1em',
  fontStyle: 'bold',
  color: 'black',
  textShadow: '2px 2px black',
  fontSize: '40px',
};

function Home() {
  return (
    <header>
  <h1 style={homeHeading}>
      Lab 3
        <br />
      <small style={homeStyle}>/about - About each group member</small>
        <br />
      <small style={homeStyle}>/contact - Contact card of each group member</small>
    </h1>
  </header>
  );
}

export default Home;