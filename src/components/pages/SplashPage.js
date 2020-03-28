import React, { Component } from "react";
import "./pages.css";

export class SplashPage extends Component {
  render() {
    return (
      <div style={splashPage} className="splash-back">
        <div style={row}>
          <div style={splashText}></div>
          <div style={splashText}></div>
          <div style={splashText}>
            <h1>Band Together</h1>
            <p>Find the music you love</p>
          </div>
          <div style={splashText}></div>
        </div>
      </div>
    );
  }
}

const splashPage = {
  backgroundColor: 'black',
  backgroundSize: '100%',
  height: '94vh',
  textAlign: 'center'
}

const splashText = {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '100%',
  flex: '4',
  textAlign: 'right'
}

const row = {
  paddingTop: '40vh',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '100%'
}

export default SplashPage;
