import React, { Component } from "react";

export class ConcertCard extends Component {
  render() {
    return (
      <div className="card concert-card-height">
        <a href={this.props.concert_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h2>{checkHighlight(this.props.name, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.name}</mark> : this.props.name}</h2>
          <hr className="card-line" />
          <div className="attribute">Venue: </div><h6>{checkHighlight(this.props.venueName, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.venueName}</mark> : this.props.venueName}</h6>
          <hr className="card-line" />
          <div className="attribute">City: </div><h6>{checkHighlight(this.props.city, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.city}</mark> : this.props.city}, {checkHighlight(this.props.region, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.region}</mark> : this.props.region}</h6>
          <hr className="card-line" />
          
          <div className="attribute">Date/Time: </div><h6>{checkHighlight(this.props.date, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.date}</mark> : this.props.date}, {this.props.time}</h6>
          <hr className="card-line" />
          {this.props.artistGenre && <div><div className="attribute">Genre: </div><h6>{checkHighlight(this.props.artistGenre, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.artistGenre}</mark> : this.props.artistGenre}</h6><hr className="card-line" /></div>}
          {this.props.ticket_min && <div><div className="attribute">Price: </div><h6>${checkHighlight(this.props.ticket_min, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.ticket_min}</mark> : this.props.ticket_min} - ${checkHighlight(this.props.ticket_max, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.ticket_max}</mark> : this.props.ticket_max}</h6><hr className="card-line" /></div>}
          <div className="card-stats">
            <h6><a href={this.props.location_url}>Location Info</a> / <a href={this.props.artist_url}>Artist Info</a></h6>
          </div>
        </div>
      </div>
    );
  }
}

export default ConcertCard;

const highlight = {
  backgroundColor: 'lightBlue'
}

function checkHighlight(str1, str2, bool) {
  if (str1 == undefined || str2 == undefined) {
    return false
  }
  if (!bool) {
    return false;
  }
  return str1.toLowerCase().includes(str2.toLowerCase());
}