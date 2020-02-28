import React, { Component } from "react";

export class ConcertCard extends Component {
  render() {
    return (
      <div className="card concert-card">
        <a href={this.props.concert_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h1>{this.props.name}</h1>
          <h5>{this.props.venue}, {this.props.city}</h5>
          <h5>{this.props.date}, {this.props.time}</h5>
          <div className="card-stats">
            <h5><a href={this.props.artist_url}>Artist Info</a></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ConcertCard;