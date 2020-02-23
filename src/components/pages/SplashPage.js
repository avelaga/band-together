import React, { Component, Fragment } from "react";
import Logo from "../../../dist/images/Logo.png";
import '../../App.css';

export class SplashPage extends Component {
  render() {
    return (
      <Fragment>
        <img className="splash-logo" src={Logo} />
        <div clasName="splash-logo-text-container">
          <p className="right-side-text">Find the music that you love</p>
        </div>
      </Fragment>
    );
  }
}

export default SplashPage;
