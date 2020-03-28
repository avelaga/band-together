import React, { Component } from "react";
import "./pages.css";

export class SplashPage extends Component {
  render() {
    return (
      <div style={splashPage} className="splash-back">
        <div style={splashText}>
          <h1>Band Together</h1>
          <p>Find the music you love</p>
        </div>
      </div>
    );
  }
}

const splashPage = {
  backgroundSize: '100%',
  height: '94vh',
  textAlign: 'center'
}

 const splashText = {
  paddingTop: '40vh',
  paddingLeft: '85vh',
  color: 'white'
}

export default SplashPage;
