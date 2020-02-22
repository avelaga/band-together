import React, { Component } from "react";
import Logo from '../../../dist/images/Logo.png';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a href="#"><img src={Logo}/></a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;