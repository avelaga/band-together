import React, { Component } from "react";
const axios = require("axios").default;

export class AboutPage extends Component {
  render() {
    const headers = {
      headers: {
        "PRIVATE-TOKEN": "7pfMsQdxg_6z_8PEMssw"
      }
    };
    const commits = axios
      .get("https://gitlab.com/api/v4/projects/17041074/repository/commits", headers)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    return <h1>About Page</h1>;
  }
}

export default AboutPage;