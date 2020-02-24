import React, { Component, Fragment } from "react";
import Slider from '../layout/Slider';
import Logo from "../../../dist/images/Logo400.png";
import './pages.css';

export class SplashPage extends Component {
  render() {
    return (
      <div className="splash-page" >
        <div className="splash-logo-container">
          <img className="splash-logo" src={Logo} />
        </div>
        <div className="splash-logo-side-text-container">
          <p className="splash-logo-side-text">Find the music you love</p>
        </div>
        {/* <Slider /> */}
      </div>
    );
  }
}

export default SplashPage;
