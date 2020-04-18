import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import HamburgerMenu from 'react-hamburger-menu';
import Logo from "../../../dist/images/dark-logo.png";
import "./layout.css";

export class Navbar extends Component {

  constructor(props) {
    super(props);
  }
  state = {
    open: false
  };


  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
          <nav
            className="navbar navbar-expand-sm navbar-light band-navbar"
          >
            <div
              className="collapse navbar-collapse band-navbar"
            >
              <a href="/">
                <img style={navbarLogo} src={Logo} />
              </a>
              <div style={linksContainer}>
                <a style={this.props.name==="about" ? activeLink : inactiveLink} href="/about">
                  About
              </a>
                <a style={this.props.name==="concerts" ? activeLink : inactiveLink} href="/concerts">
                  Concerts
              </a>
                <a style={this.props.name==="artists" ? activeLink : inactiveLink} href="/artists">
                  Artists
              </a>
                <a style={this.props.name==="locations" ? activeLink : inactiveLink} href="/locations">
                  Locations
              </a>
              </div>
            </div>
          </nav>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500}>
          <div style={mobileNav}>
            <div><a href="/"><img style={mobileNavbarLogo} src={Logo} /></a></div>
            <div style={navMenu}>
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={40}
              height={40}
              strokeWidth={2}
              rotate={0}
              color='white'
              borderRadius={0}
              animationDuration={0.5}
            />
            </div>
            {this.state.open &&
              <div className="flex">
                <hr style={line} className="appear-first"/>
                <a style={mobileNavbarLink} className="appear-second" href="/locations">Locations</a>
                <a style={mobileNavbarLink} className="appear-third" href="/artists">Artists</a>
                <a style={mobileNavbarLink} className="appear-fourth" href="/concerts">Concerts</a>
                <a style={mobileNavbarLink} className="appear-fifth" href="/about">About</a>
                <hr style={line} className="appear-sixth"/>
              </div>
            }
          </div>
        </MediaQuery>
      </div>

    );
  }
}

const line = {
  backgroundColor: 'rgb(53, 53, 53)',
  height: '.1',
  width: '90vw'
}

const mobileNavbarLink = {
  color: '#ffffff',
  fontSize: '25px',
  width: '100vw',
  textAlign: 'center',
  lineHeight: '40px'
}

const mobileNav = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  backgroundColor: 'black'
}

const navMenu = {
  paddingTop: '10px',
  paddingRight: '10px',
}

const navbarLogo = {
  width: '50px',
  height: '50px',
  float: 'left'
}

const mobileNavbarLogo = {
  width: '60px',
  height: '60px',
}

const linksContainer = {
  float: 'right',
  width: '100%',
}

const activeLink = {
  color: 'grey',
  fontSize: '2em',
  paddingLeft: '1em',
  float: 'right'
}

const inactiveLink = {
  color: '#ffffff',
  fontSize: '2em',
  paddingLeft: '1em',
  float: 'right'
}

export default Navbar;