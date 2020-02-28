import React, { Component } from "react";
import "./pages.css";

export class SplashPage extends Component {
  render() {
    return (
      <div className="splash-page">
        <div className="splash-text-container">
          <h1 className="splash-text">Band Together</h1>
          <p className="splash-text">Find the music you love</p>
        </div>
      </div>
    );
  }
}

export default SplashPage;
