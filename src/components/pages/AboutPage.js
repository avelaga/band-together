import React, { Component, useState } from "react";
import "./pages.css";

const axios = require("axios").default;

export class AboutPage extends Component {
  state = {
    commits: null,
    abhi: 0,
    adam: 0,
    faezah: 0,
    jason: 0,
    gavin: 0,
    abhiIssues: 0,
    adamIssues: 0,
    faezahIssues: 0,
    gavinIssues: 0,
    jasonIssues: 0,
  };

  // https://gitlab.com/api/v4/projects/17041074/issues_statistics?assignee_username=avelaga

  componentDidMount() {

    const headers = {
      headers: {
        "PRIVATE-TOKEN": "7pfMsQdxg_6z_8PEMssw"
      }
    };

    // commit api
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

    // issue api
    axios
      .get(
        "https://gitlab.com/api/v4/projects/17041074/issues_statistics?assignee_username=avelaga",
        headers
      )
      .then(res => {
        this.setState({ abhiIssues: res.data.statistics.counts.closed });
      })
      .catch(err => {
        console.log(err);
      });

      axios
      .get(
        "https://gitlab.com/api/v4/projects/17041074/issues_statistics?assignee_username=Adam-Bomb",
        headers
      )
      .then(res => {
        this.setState({ adamIssues: res.data.statistics.counts.closed });
      })
      .catch(err => {
        console.log(err);
      });

      axios
      .get(
        "https://gitlab.com/api/v4/projects/17041074/issues_statistics?assignee_username=faezahali",
        headers
      )
      .then(res => {
        this.setState({ faezahIssues: res.data.statistics.counts.closed });
      })
      .catch(err => {
        console.log(err);
      });

      axios
      .get(
        "https://gitlab.com/api/v4/projects/17041074/issues_statistics?assignee_username=gavinhr",
        headers
      )
      .then(res => {
        this.setState({ gavinIssues: res.data.statistics.counts.closed });
      })
      .catch(err => {
        console.log(err);
      });

      axios
      .get(
        "https://gitlab.com/api/v4/projects/17041074/issues_statistics?assignee_username=jason.moy42",
        headers
      )
      .then(res => {
        this.setState({ jasonIssues: res.data.statistics.counts.closed });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="about-page">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Commits</th>
              <th>Issues</th>
            </tr>
            <tr>
              <td>Adam</td>
              <td>{this.state.commits && this.state.adam}</td>
              <td>{this.state.commits && this.state.adamIssues}</td>
            </tr>
            <tr>
              <td>Abhi</td> 
              <td>{this.state.commits && this.state.abhi}</td>
              <td>{this.state.commits && this.state.abhiIssues}</td>
            </tr>
            <tr>
              <td>Faezah</td>
              <td>{this.state.commits && this.state.faezah}</td>
              <td>{this.state.commits && this.state.faezahIssues}</td>
            </tr>
            <tr>
              <td>Gavin</td>
              <td>{this.state.commits && this.state.gavin}</td>
              <td>{this.state.commits && this.state.gavinIssues}</td>
            </tr>
            <tr>
              <td>Jason</td>
              <td>{this.state.commits && this.state.jason}</td>
              <td>{this.state.commits && this.state.jasonIssues}</td>
            </tr>
          </tbody>
        </table>
        {/* <ul>{this.state.commits && this.state.commits.map(x => <h1>{x.title}</h1>)}</ul> */}
      </div>
    );
  }
}

export default AboutPage;
