import React, { Component, useState } from "react";
const axios = require("axios").default;

export class AboutPage extends Component {
  state = {
    commits: null
  };

  componentDidMount() {
    const headers = {
      headers: {
        "PRIVATE-TOKEN": "7pfMsQdxg_6z_8PEMssw"
      }
    };

    const commits = axios
      .get(
        "https://gitlab.com/api/v4/projects/17041074/repository/commits",
        headers
      )
      .then(res => {
        console.log(res);
        this.setState({ commits: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.commits);
    return (
      <div>
        {/* <h1>{commits}</h1> */}
        <table>
          <tbody>
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
          </tbody>
        </table>
        <ul>{this.state.commits && this.state.commits.map(x => <h1>{x.author_name}</h1>)}</ul>
      </div>
    );
  }
}

export default AboutPage;
