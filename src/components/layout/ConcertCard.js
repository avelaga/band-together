import React, { Component } from "react";

export class ConcertCard extends Component {
  render() {
    return (
      <div className="card" style={height}>
        <a href={this.props.concert_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h2>{checkHighlight(this.props.name, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.name}</mark> : this.props.name}</h2>
          <h6>{checkHighlight(this.props.city, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.city}</mark> : this.props.city}</h6>
          <h6>{checkHighlight(this.props.venueName, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.venueName}</mark> : this.props.venueName}</h6>
          <h6>{checkHighlight(this.props.date, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.date}</mark> : this.props.date}, {this.props.time}</h6>
          <h6>{checkHighlight(this.props.artistGenre, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.artistGenre}</mark> : this.props.artistGenre}</h6>
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

function checkHighlight(str1, str2, bool){
  if(!bool){
    return false;
  }
  return str1.includes(str2);
}