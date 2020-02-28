import React, { Component, useState } from "react";
<<<<<<< HEAD
import Card from "../layout/Card";
import AbhiImg from "../../../dist/images/abhi.jpg";
import AdamImg from "../../../dist/images/adam.jpg";
import JasonImg from "../../../dist/images/jason.jpg";
import GavinImg from "../../../dist/images/gavin.jpg";
import FaezahImg from "../../../dist/images/faezah.jpg";
=======
import AboutCard from '../layout/AboutCard.js';
import AbhiImg from '../../../dist/images/abhi.jpg';
import AdamImg from '../../../dist/images/adam.jpg';
import JasonImg from '../../../dist/images/jason.jpg';
import GavinImg from '../../../dist/images/gavin.jpg';
import FaezahImg from '../../../dist/images/faezah.jpg';
>>>>>>> ba47aaad64cbb9bc5351d0d234ac55781b7dea25

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
    jasonIssues: 0
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
    return (
      <div className="body flex">
        <AboutCard name={"Adam Martin"} img={AdamImg} commits={this.state.adam} issues={this.state.adamIssues} bio={"I am the kangaroo whisperer"}/>
        <AboutCard name={"Abhi Velaga"} img={AbhiImg} commits={this.state.abhi} issues={this.state.abhiIssues} bio={"Man with the minivan"}/>
        <AboutCard name={"Jason Moy"} img={JasonImg} commits={this.state.jason} issues={this.state.jasonIssues} bio={"I love snow"}/>
        <AboutCard name={"Faezah Ali"} img={FaezahImg} commits={this.state.faezah} issues={this.state.faezahIssues} bio={"Wrote my page with the flu. The best players play hurt."}/>
        <AboutCard name={"Gavin Rodrigue"} img={GavinImg} commits={this.state.gavin} issues={this.state.gavinIssues} bio={"The mustache speaks for itself"}/>
      </div>
    );
  }
}

export default AboutPage;
