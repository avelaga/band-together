import React, { Component } from "react";
import Logo from "../../../dist/images/dark-logo.png";
import "./layout.css";

export class Navbar extends Component {
  render() {
    return (
      <nav 
      // className="navbar navbar-expand-sm navbar-light band-navbar"
      style={bandNavbar}
      >
       
          <a href="/">
            <img style={navbarLogo} src={Logo} />
          </a>
            <div style={linksContainer}>
              <a style={navbarLink} href="/about">
                About
              </a>
              <a style={navbarLink} href="/concerts">
                Concerts
              </a>
              <a style={navbarLink} href="/artists">
                Artists
              </a>
              <a style={navbarLink} href="/locations">
                Locations
              </a>
            </div>
     
      </nav>
    );
  }
}

const navbarLogo = {
  width: '5vh',
  height: '50px',
  float: 'left'
}

const bandNavbar = {
  backgroundColor: 'black',
  height: '50px',
  width: '100%'
}

const linksContainer = {
  float: 'right',
  width: '100%',
}

const navbarLink = {
  color: '#ffffff',
  fontSize: '2em',
  paddingLeft: '1em',
  float: 'right'
}

export default Navbar;
