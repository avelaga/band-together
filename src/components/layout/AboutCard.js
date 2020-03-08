import React, { Component } from "react";

export class AboutCard extends Component {
  render() {
    return <div className="card">
      <img src={this.props.img} className="card-img"></img>
      <div className="card-text">
        <h1>{this.props.name}</h1>
        <h4><i>{this.props.role}</i></h4>
        <h5>{this.props.bio}</h5>
        <div className="card-stats">
          <h5>{this.props.commits} commits / {this.props.issues} issues / {this.props.unit_tests} unit tests</h5>  
        </div>
      </div>
    </div>;
  }
}

export default AboutCard;
