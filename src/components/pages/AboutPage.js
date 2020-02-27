import React, { Component, useState } from "react";
const axios = require("axios").default;

export class AboutPage extends Component {
  // state = {
  //   commitInfo: []
  // };
  // constructor(){
  //   super();
  // }
  render() {
    const headers = {
      headers: {
        "PRIVATE-TOKEN": "7pfMsQdxg_6z_8PEMssw"
      }
    };
    const commits = axios
      .get("https://gitlab.com/api/v4/projects/17041074/repository/commits", headers)
      .then(res => {

        // this.setState(({
        //   commitInfo: [res],
        // }));
        console.log(res);
        // console.log(commitInfo);
      })
      .catch(err => {
        // console.log(err);
      });
    return (
      <div>
      <h1>{commits}</h1>
      <table >
        <tr>
          <th>Name</th>
          <th>Commits</th>
          <th>Issues</th>
          <th>Unit Tests</th>
        </tr>
        <tr>
          <td>Adam</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Abhi</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Faezah</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Gavin</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Jason</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </table>
      </div>
    );
  }
}

export default AboutPage;