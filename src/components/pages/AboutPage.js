import React, { Component, useState } from "react";
import AboutCard from '../layout/AboutCard.js';
import AbhiImg from '../../../dist/images/abhi.jpg';
import AdamImg from '../../../dist/images/adam.jpg';
import JasonImg from '../../../dist/images/jason.jpg';
import GavinImg from '../../../dist/images/gavin.jpg';
import FaezahImg from '../../../dist/images/faezah.jpg';
import WikiImg from '../../../dist/images/wikipedia.png';
import TicketmasterImg from '../../../dist/images/ticketmaster.jpg';
import SongkickImg from '../../../dist/images/songkick.png';
import ReactImg from '../../../dist/images/react.png';
import PostmanImg from '../../../dist/images/postman.png';
import AWSImg from '../../../dist/images/aws.png';

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
    <AboutCard name={"Adam Martin"} img={AdamImg} commits={this.state.adam} issues={this.state.adamIssues} unit_tests={this.state.adamTests} bio={"I am the kangaroo whisperer"} role={"Full Stack Developer"}/>
    <AboutCard name={"Abhi Velaga"} img={AbhiImg} commits={this.state.abhi} issues={this.state.abhiIssues} unit_tests={this.state.abhiTests} bio={"Man with the minivan"} role={"Front-End Developer"}/>
    <AboutCard name={"Jason Moy"} img={JasonImg} commits={this.state.jason} issues={this.state.jasonIssues} unit_tests={this.state.jasonTests} bio={"Secret asian man"} role={"Full Stack Developer"}/>
    <AboutCard name={"Faezah Ali"} img={FaezahImg} commits={this.state.faezah} issues={this.state.faezahIssues} unit_tests={this.state.faezahTests} bio={"Wrote my page with the flu. The best players play hurt."} role={"Full Stack Developer"}/>
    <AboutCard name={"Gavin Rodrigue"} img={GavinImg} commits={this.state.gavin} issues={this.state.gavinIssues} unit_tests={this.state.gavinTests} bio={"The mustache speaks for itself"} role={"Front-End Developer"}/>
  </div>

  <hr className="line"/>

  <div className="flex">

  <div className="about-stats">
    <div className="about-top">
      <h1>Repository Stats</h1>
    </div>
    <div class="about-down">
      <h3>{repo_commits} Commits</h3>
      <h3>{repo_issues} Issues</h3>
    < h3>{repo_unit_tests} Unit Tests</h3>
    </div>
  </div>

  <div className="about-stats">
    <div className="about-top">
      <h1>Data Sources</h1>
    </div>
    <div class="about-down">
    <a href="https://www.songkick.com"><img src={SongkickImg} className="src-img"></img></a>
    <a href="https://www.ticketmaster.com"><img src={TicketmasterImg} className="src-img"></img></a>
    <a href="https://www.en.wikipedia.com"><img src={WikiImg} className="src-img"></img></a>
    </div>
  </div>

  <div className="about-stats">
    <div className="about-top">
      <h1>Tools</h1>
    </div>
    <div class="about-down">
      <img src={ReactImg} className="src-img"></img>
      <img src={AWSImg} className="src-img"></img>
      <img src={PostmanImg} className="src-img"></img>
    </div>
  </div>
  </div>
  
  <div className="about-links" >
    <div><h1><a href="https://gitlab.com/Adam-Bomb/band-together" style = {buttonStyle}>GitLab Repo</a></h1></div>

    <div><h1><a href="https://documenter.getpostman.com/view/7804306/SzKYQxJR" style = {buttonStyle}>Postman API</a></h1></div>
  </div>
</div>
);
}
}

const buttonStyle = {
  backgroundColor: 'rgb(0, 119, 255)',
  width: '300px',
  borderRadius: '5px',
  padding: '10px'
}

export default AboutPage;
