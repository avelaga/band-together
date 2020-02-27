import React, { Component, useState } from "react";
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

        for (const property in res.data) {
          if(res.data[property].author_name === "Abhi Velaga"){
            this.setState({ abhi: this.state.abhi + 1 });
          }else if(res.data[property].author_name === "Adam Martin"){
            this.setState({ adam: this.state.adam + 1 });
          }
          else if(res.data[property].author_name === "Gavin Rodrigue"){
            this.setState({ gavin: this.state.gavin + 1 });
          }
          else if(res.data[property].author_name === "Jason Moy"){
            this.setState({ jason: this.state.jason + 1 });
          }
          else if(res.data[property].author_name === "Faezah Ali"){
            this.setState({ faezah: this.state.faezah + 1 });
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
      <div className="body flex">
        <Card name={"Adam Martin"} img={AdamImg} commits={this.state.adam} issues={this.state.adamIssues} bio={"I am the kangaroo whisperer"}/>
        <Card name={"Abhi Velaga"} img={AbhiImg} commits={this.state.abhi} issues={this.state.abhiIssues} bio={"Man with the minivan"}/>
        <Card name={"Jason Moy"} img={JasonImg} commits={this.state.jason} issues={this.statejasonIssues} bio={"I love snow"}/>
        <Card name={"Faezah Ali"} img={FaezahImg} commits={this.state.faezah} issues={this.state.faezahIssues} bio={"Wrote my page with the flu. The best players play hurt."}/>
        <Card name={"Gavin Rodrigue"} img={GavinImg} commits={this.state.gavin} issues={this.state.gavinIssues} bio={"The mustache speaks for itself"}/>
      </div>
    );
  }
}

export default AboutPage;
