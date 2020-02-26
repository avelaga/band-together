import React, { Component, Fragment } from "react";
import Slide from "../layout/Slide";
import "./pages.css";

export class SplashPage extends Component {
  render() {
    return (
      <div className="splash-page">
        {/* <div className="left-half">
          <h1>Band Together</h1>
          <p>Find the music you love.</p>
          </div> */}
        {/* <div className="cool-shit right-half"> */}
        {/* </div> */}
        <Slide />
      // </div>
    );
  }
}

export default SplashPage;
