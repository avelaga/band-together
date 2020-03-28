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

// import "./pages.css";

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
var repos = ["https://gitlab.com/api/v4/projects/17041074/repository/contributors", 
"https://gitlab.com/api/v4/projects/17240838/repository/contributors"];

for(let repo of repos){
  window.alert(repo);
  axios.get(repo, request_headers)
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
}

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
    <center><h1 style={aboutText}><b>Our Purpose</b></h1></center>
    <p style={aboutText}><center>
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

  <hr style={line}/>

  <div className="flex">

  <div style={aboutStats}>
    <div style={aboutTop}>
      <h1>Repository Stats</h1>
    </div>
    <div style={aboutDown}>
      <h3>{repo_commits} Commits</h3>
      <h3>{repo_issues} Issues</h3>
    < h3>{repo_unit_tests} Unit Tests</h3>
    </div>
  </div>

  <div style={aboutStats}>
    <div style={aboutTop}>
      <h1>Data Sources</h1>
    </div>
    <div style={aboutDown}>
    <a href="https://www.songkick.com"><img src={SongkickImg} style={srcImg}></img></a>
    <a href="https://www.ticketmaster.com"><img src={TicketmasterImg} style={srcImg}></img></a>
    <a href="https://www.en.wikipedia.com"><img src={WikiImg} style={srcImg}></img></a>
    </div>
  </div>

  <div style={aboutStats}>
    <div style={aboutTop}>
      <h1>Tools</h1>
    </div>
    <div style={aboutDown}>
      <img src={ReactImg} style={srcImg}></img>
      <img src={AWSImg} style={srcImg}></img>
      <img src={PostmanImg} style={srcImg}></img>
    </div>
  </div>
  </div>
  
  <div style={aboutLinks} >
    <div><h1><a href="https://gitlab.com/Adam-Bomb/band-together" style = {buttonStyle}>GitLab Repo</a></h1></div>

    <div><h1><a href="https://documenter.getpostman.com/view/7804306/SzKYQxJR" style = {buttonStyle}>Postman API</a></h1></div>
  </div>
</div>
);
}
}

// local styles
const srcImg = {
  width: '100px',
  height: '100px',
  margin: '10px'
}

const aboutText = {
  color: 'white',
  width: '950px',
  margin: 'auto',
  justifyContent: 'center'
}

const aboutLinks = {
  display: 'flex',
  paddingBottom: '30px',
  justifyContent: 'space-between',
  width: '450px',
  margin: 'auto'
}

const buttonStyle = {
  backgroundColor: 'rgb(0, 119, 255)',
  width: '300px',
  borderRadius: '5px',
  padding: '7px'
}

const line = {
  backgroundColor: 'rgb(53, 53, 53)',
  height: '.1',
  margin: '40px'
}

const aboutStats = {
  color: 'white',
  display: 'inline-block',
  margin: '30px',
  borderRadius: '3px'

}

const aboutTop = {
  textAlign: 'center',
  borderBottom: 'solid rgb(53, 53, 53)',
  borderWidth: '1px',
  borderRadius: '3px',
  padding: '10px'
}

const aboutDown = {
  margin: '10px',
  textAlign: 'center',
  padding: '10px'
}

export default AboutPage;
