import React, { Component, useState } from "react";
import AboutCard from '../layout/AboutCard.js';
import AbhiImg from '../../../dist/images/abhi.jpg';
import AdamImg from '../../../dist/images/adam.jpg';
import JasonImg from '../../../dist/images/jason.jpg';
import GavinImg from '../../../dist/images/gavin.jpg';
import FaezahImg from '../../../dist/images/faezah.jpg';

import "./pages.css";

const axios = require("axios").default;

export class AboutPage extends Component {
  constructor(props) {
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
    abhiTests: 0,
    adamTests: 0,
    faezahTests: 0,
    jasonTests: 0,
    gavinTests: 0,
  };

  componentDidMount() {
    const request_headers = {
      headers: {
        "PRIVATE-TOKEN": "7pfMsQdxg_6z_8PEMssw"
      }
    };

    // commit api
    axios
      .get(
        "https://gitlab.com/api/v4/projects/17041074/repository/contributors",
        request_headers
      )
      .then(res => {
        for (const property in res.data) {
          const current = res.data[property];
          if (current.name === "Abhi Velaga") {
            this.setState({ abhi: this.state.abhi + current.commits });
          } else if (current.name === "Adam Martin") {
            this.setState({ adam: this.state.adam + current.commits });
          } else if (current.name === "Gavin Rodrigue") {
            this.setState({ gavin: this.state.gavin + current.commits });
          } else if (current.name === "Jason Moy") {
            this.setState({ jason: this.state.jason + current.commits });
          } else if (current.name === "Faezah Ali") {
            this.setState({ faezah: this.state.faezah + current.commits });
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
        request_headers
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
        request_headers
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
        request_headers
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
        request_headers
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
        request_headers
      )
      .then(res => {
        this.setState({ jasonIssues: res.data.statistics.counts.closed });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const repo_commits = this.state.adam + this.state.abhi + this.state.jason + this.state.faezah + this.state.gavin;
    const repo_issues = this.state.adamIssues + this.state.abhiIssues + this.state.jasonIssues + this.state.faezahIssues + this.state.gavinIssues;
    const repo_unit_tests = this.state.adamTests + this.state.abhiTests + this.state.jasonTests + this.state.faezahTests + this.state.gavinTests;
    return (
      <div className="body center">
        <div>
        <center><h1 class="about-text"><b>Our Purpose</b></h1></center>
        <p class="about-text"><center>
          Concerts are huge these days, but finding concerts from bands or artists you like can be a real headache. We're aiming to make the process as simple
          and pain-free as possible so you can spend more time planning and enjoying the live music, and less time trying to scour the internet for all the
          information you need.
          </center></p>
      </div>
      <div className="flex">
        <AboutCard name={"Adam Martin"} img={AdamImg} commits={this.state.adam} issues={this.state.adamIssues} unit_tests={this.state.adamTests} bio={"I am the kangaroo whisperer"} />
        <AboutCard name={"Abhi Velaga"} img={AbhiImg} commits={this.state.abhi} issues={this.state.abhiIssues} unit_tests={this.state.abhiTests} bio={"Man with the minivan"} />
        <AboutCard name={"Jason Moy"} img={JasonImg} commits={this.state.jason} issues={this.state.jasonIssues} unit_tests={this.state.jasonTests} bio={"Secret asian man"} />
        <AboutCard name={"Faezah Ali"} img={FaezahImg} commits={this.state.faezah} issues={this.state.faezahIssues} unit_tests={this.state.faezahTests} bio={"Wrote my page with the flu. The best players play hurt."} />
        <AboutCard name={"Gavin Rodrigue"} img={GavinImg} commits={this.state.gavin} issues={this.state.gavinIssues} unit_tests={this.state.gavinTests} bio={"The mustache speaks for itself"} />
      </div>
      <div class='about-text'>
        <center><h1>Repository Stats</h1></center>
        <center><h3>{repo_commits} Commits</h3></center>
        <center><h3>{repo_issues} Issues</h3></center>
        <center><h3>{repo_unit_tests} Unit Tests</h3></center>
      </div>
      <div class='about-text'>
        <center><h1>Data Sources</h1></center>
        <center><h3>Data was collected from <a href='www.songkick.com'>Songkick</a>, <a href="www.ticketmaster.com">Ticketmaster</a>, and <a href="www.en.wikipedia.com">Wikipedia.</a></h3></center>
      </div>
      <div class='about-text'>
        <center><h1>Tools</h1></center>
        <center><h3>Amazon Web Services (AWS) is our server host, React Bootstrap is our frontend tool, and Postman is being used to generate our API</h3></center>
      </div>
      <div class='about-text'>
        <center><a href="https://gitlab.com/Adam-Bomb/band-together">GitLab Repo</a></center>
        <center><a href="https://documenter.getpostman.com/view/7804306/SzKYQxJR">Postman API</a></center>
      </div>
      </div>
    );
  }
}

export default AboutPage;
