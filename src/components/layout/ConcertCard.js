import React, { Component } from "react";

export class ConcertCard extends Component {
  render() {
    return (
      <div className="card" style={height}>
        <a href={this.props.concert_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h2>{this.props.search ? <mark style={highlight}>{this.props.name}</mark> : this.props.name}</h2>
          <h6>{this.props.city}</h6>
          <h6>{this.props.venueName}</h6>
          <h6>{this.props.date}, {this.props.time}</h6>
          { this.props.ticket_min && <h6>${this.props.ticket_min} - ${this.props.ticket_max}</h6> }
          <div className="card-stats">
          <h6><a href={this.props.location_url}>Location Info</a> / <a href={this.props.artist_url}>Artist Info</a></h6>
          </div>
        </div>
      </div>
    );
  }
}

export default ConcertCard;


const height = {
  maxHeight: '590px'
}

const highlight = {
  backgroundColor: 'lightBlue'
}