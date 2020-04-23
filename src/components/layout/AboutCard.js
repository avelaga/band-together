import React, { Component } from "react";
import MediaQuery from 'react-responsive'

export class AboutCard extends Component {
  render() {
    return (
      <div>

        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
          <div style={aboutCard}>
            <img src={this.props.img} style={aboutCardImg}></img>
            <div style={aboutText}>
              <h1>{this.props.name}</h1>
              <div style={role}>{this.props.role}</div>
              <div style={bio}>{this.props.bio}</div>
              <div className="card-stats">
                <h5>{this.props.commits} commits / {this.props.issues} issues / {this.props.unit_tests} unit tests</h5>
              </div>
            </div>
          </div>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500}>
          <div style={mobileAboutCard}>
            <img src={this.props.img} style={mobileAboutCardImg}></img>
            <div className="card-text">
              <h1>{this.props.name}</h1>
              <div style={mobileRole}>{this.props.role}</div>
              <div style={mobileBio}>{this.props.bio}</div>
              <div className="card-stats">
                <h5>{this.props.commits} commits / {this.props.issues} issues / {this.props.unit_tests} unit tests</h5>
              </div>
            </div>
          </div>
        </MediaQuery>

      </div>
    );
  }
}

export default AboutCard;

const role = {
  fontWeight: '400',
  fontStyle: 'italic',
  fontSize: '20px',
  paddingBottom: '5px'
}

const aboutText = {
  color: 'white',
  padding: '5px',
  textTransform: 'capitalize',
  fontSize: '15px',
  lineHeight: '23px'
}

const aboutCard = {
  backgroundColor: 'black',
  border: 'rgb(53, 53, 53)',
  borderWidth: '1px',
  borderStyle: 'solid',
  textAlign: 'center',
  width: '450px',
  height: '650px',
  margin: '30px',
  borderRadius: '3px'
}

const aboutCardImg = {
  height: '446px',
  width: '446px',
  margin: 'auto',
  borderRadius: '3px',
}

const mobileAboutCard = {
  backgroundColor: 'black',
  border: 'rgb(53, 53, 53)',
  borderWidth: '1px',
  borderStyle: 'solid',
  textAlign: 'center',
  width: '90vw',
  margin: '5vw',
  borderRadius: '3px'
}

const mobileAboutCardImg = {
  height: '90vw',
  width: '90vw',
  margin: 'auto',
  borderRadius: '3px',
}

const mobileRole = {
  fontSize: '25px',
  lineHeight: '25px',
  fontStyle: 'italic'
}

const mobileBio = {
  fontSize: '20px',
  lineHeight: '40px'
}

const bio = {
  fontSize: '15px',
  paddingBottom: '5px'
}