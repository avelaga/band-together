import React, { Component, useState } from "react";
import Table from 'react-bootstrap/Table';
import AbhiImg from '../../../dist/images/abhi.jpeg';
import AdamImg from '../../../dist/images/adam.png';
import JasonImg from '../../../dist/images/jason.jpg';

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

  componentDidMount() {

    const headers = {
      headers: {
        "PRIVATE-TOKEN": "7pfMsQdxg_6z_8PEMssw"
      }
    };

    // commit api
    axios
      .get(
        "https://gitlab.com/api/v4/projects/17041074/repository/commits?per_page=100&all=true",
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
          else if(res.data[property].author_name === "Gavin Rodrigue"){
            gavinCount++;
            this.setState({ gavin: gavinCount });
          }
          else if(res.data[property].author_name === "Jason Moy"){
            jasonCount++;
            this.setState({ jason: jasonCount });
          }
          else if(res.data[property].author_name === "Faezah Ali"){
            faezahCount++;
            this.setState({ faezah: faezahCount });
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

  renderTableRow(name, img, commits, issues, bio){
    return (<tr>
              <td><b><h3>{name}</h3></b></td>
              <td><img className="list-img" src={img}></img></td>
              <td><h3>{bio}</h3></td>
              <td><h3>{commits}</h3></td>
              <td><h3>{issues}</h3></td>
              {/* <td><h3>{issues}</h3><br></br>{date}&#183;{time}</td> */}
            </tr>);
  }

  render() {
    return (
      <div className="body">
        {/* <table>
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
        </table> */}
        <Table    variant="dark" className="list-table">
          <thead>
            <tr>
              <th><h2>Name</h2></th>
              <th><h2> </h2></th>
              <th><h2>Bio</h2></th>
              <th><h2>Commits</h2></th>
              <th><h2>Issues</h2></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableRow("Abhi", AbhiImg, this.state.abhi, this.state.abhiIssues, "man with the minivan")}
            {this.renderTableRow("Adam", AdamImg, this.state.adam, this.state.adamIssues, "im the most badass skateboarder ever")}
            {this.renderTableRow("Jason", JasonImg, this.state.jason, this.state.jasonIssues, "i love snow")}
            {this.renderTableRow("Faezah", JasonImg, this.state.faezah, this.state.faezahIssues, "i want a profile pic")}
            {this.renderTableRow("Gavin", JasonImg, this.state.gavin, this.state.gavinIssues, "me 2")}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AboutPage;
