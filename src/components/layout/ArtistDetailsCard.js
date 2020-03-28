import React, { Component } from "react";

export class ArtistDetailsCard extends Component {
  render() {
    return (
      <div className="details">
        <div style={img}>
          <img src={this.props.img} className="details-card-img"></img>
        </div>
        <div style={bio}>
          <h1>{this.props.name}</h1>
          <h5>Year started: {this.props.started}</h5>
          <h5>Genre: {this.props.genre}</h5>
          <h6>{this.props.bio}</h6>

        </div>
      </div>
    );
  }
}

export default ArtistDetailsCard;

const bio = {
  fontSize: '2px',
  color: 'white',
  textAlign: 'left',
  marginLeft: '10px',
  marginTop: '10px',
  height: '300px',
  width: '990px',
  marginRight: '10px'
}

const img = {
  float: 'left',
  height: '300px',
  width: '300px',
  marginRight: '10px'
}