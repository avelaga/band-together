import React, { Component } from "react";
import Logo from '../../../dist/images/Logo.png';
import "../../App.css";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light band-navbar">
        <div className="collapse navbar-collapse band-navbar" id="navbarTogglerDemo01">
          <a href="/"><img className="navbar-logo" src={Logo} /></a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <a className="navbar-link" href="/about">About</a>
            <a className="navbar-link" href="/concerts">Concerts</a>
            <a className="navbar-link" href="/artists">Artists</a>
            <a className="navbar-link" href="/locations">Locations</a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;