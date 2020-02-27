import React, { Component, useState } from "react";
import Table from 'react-bootstrap/Table';
import Card from '../layout/Card';
import AbhiImg from '../../../dist/images/abhi.jpg';
import AdamImg from '../../../dist/images/adam.jpg';
import JasonImg from '../../../dist/images/jason.jpg';
import GavinImg from '../../../dist/images/gavin.jpg';
import FaezahImg from '../../../dist/images/faezah.jpg';

import "./pages.css";

const axios = require("axios").default;

export class AboutPage extends Component {
  constructor(props){
    super(props);
  }
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
            </tr>);
  }

  render() {
    return (
      <div className="body">
        <Card name={"Abhi"} img={AbhiImg} commits={this.state.abhi} issues={this.state.abhiIssues} bio={"Man with the minivan"}/>

        <Table striped variant="dark" className="list-table">
          <thead>
            <tr>
              <th><h2>Name</h2></th>
              <th></th>
              <th><h2>Bio</h2></th>
              <th><h2>Commits</h2></th>
              <th><h2>Issues</h2></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableRow("Abhi", AbhiImg, this.state.abhi, this.state.abhiIssues, "Man with the minivan")}
            {this.renderTableRow("Adam", AdamImg, this.state.adam, this.state.adamIssues, "I am the kangaroo whisperer")}
            {this.renderTableRow("Jason", JasonImg, this.state.jason, this.state.jasonIssues, "I love snow")}
            {this.renderTableRow("Faezah", FaezahImg, this.state.faezah, this.state.faezahIssues, "Wrote my page with the flu. The best players play hurt.")}
            {this.renderTableRow("Gavin", GavinImg, this.state.gavin, this.state.gavinIssues, "The mustache speaks for itself")}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AboutPage;
