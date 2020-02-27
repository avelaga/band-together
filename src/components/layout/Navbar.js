import React, { Component } from "react";
import Logo from "../../../dist/images/dark-logo.png";
import "./layout.css";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light band-navbar">
        <div
          className="collapse navbar-collapse band-navbar"
          id="navbarTogglerDemo01"
        >
          <a href="/">
            <img className="navbar-logo" src={Logo} />
          </a>
            <div className="navbar-links-container">
              <a className="navbar-link" href="/about">
                About
              </a>
              <a className="navbar-link" href="/concerts">
                Concerts
              </a>
              <a className="navbar-link" href="/artists">
                Artists
              </a>
              <a className="navbar-link" href="/locations">
                Locations
              </a>
            </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
