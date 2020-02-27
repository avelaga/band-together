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

        var abhiCount = 0;
        var adamCount = 0;
        var faezahCount = 0;
        var gavinCount = 0;
        var jasonCount = 0;
        for (const property in res.data) {
          if(res.data[property].author_name === "Abhi Velaga"){
            abhiCount++;
            this.setState({ abhi: abhiCount });
          }else if(res.data[property].author_name === "Adam Martin"){
            adamCount++;
            this.setState({ adam: adamCount });
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
              <td>{this.state.commits && this.state.adam}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Abhi</td>
              <td>{this.state.commits && this.state.abhi}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Faezah</td>
              <td>{this.state.commits && this.state.faezah}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Gavin</td>
              <td>{this.state.commits && this.state.gavin}</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Jason</td>
              <td>{this.state.commits && this.state.jason}</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        {/* <ul>{this.state.commits && this.state.commits.map(x => <h1>{x.title}</h1>)}</ul> */}
      </div>
    );
  }
}

export default AboutPage;
