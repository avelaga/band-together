import React, { Component } from "react";

export class AboutCard extends Component {
  render() {
    return <div style={aboutCard}>
      <img src={this.props.img} style={aboutCardImg}></img>
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

const aboutCard = {
  backgroundColor: 'black',
  border: 'rgb(53, 53, 53)',
  borderWidth: '1px',
  borderStyle: 'solid',
  textAlign: 'center',
  width: '450px',
  margin: '30px',
  borderRadius: '3px'
}

const aboutCardImg = {
  height: '446px',
  width: '446px',
  margin: 'auto',
  borderRadius: '3px',
}