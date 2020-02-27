import React, { Component, useState } from "react";
const axios = require("axios").default;

export class AboutPage extends Component {
  state = {
    commits: null,
    abhi: 0,
    adam: 0,
    faezah: 0,
    jason: 0,
    gavin: 0,
  };

  componentDidMount() {

    const headers = {
      headers: {
        "PRIVATE-TOKEN": "7pfMsQdxg_6z_8PEMssw"
      }
    };

    axios
      .get(
        "https://gitlab.com/api/v4/projects/17041074/repository/commits",
        headers
      )
      .then(res => {
        this.setState({ commits: res.data });
        // this.commits.map(a => {
        //   if(a.author_name === "Abhi Velaga"){
        //     abhi++;
        //   }
        // })
        var abhiCount = 0;
        for (const property in res.data) {
          // for (const property2 in property) {
          
          //   console.log(`${property2}: ${property[property2]}`);
          // } 
          console.log(`${property}: ${res.data[property].author_name}`);
          if(res.data[property].author_name === "Abhi Velaga"){
            // abhi = this.state.abhi;
            abhiCount++;
            this.setState({ abhi: abhi });
          }
        }

      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.commits);
    return (
      <div>
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
        <ul>{this.state.commits && this.state.commits.map(x => <h1>{x.title}</h1>)}</ul>
        <ul>{this.state.commits && this.state.abhi}</ul>
      </div>
    );
  }
}

export default AboutPage;
