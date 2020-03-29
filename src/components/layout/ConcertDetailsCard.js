import React, { Component } from "react";
const axios = require("axios").default;

export class ConcertDetailsCard extends Component {
  constructor() {
    super();
    this.state = {
      artist: null,
      location: null,
      venue: null,
      date: null,
      time: null,
      concert_id: null,
      ticket_min: null,
      ticket_max: null
    }
  }

  componentDidMount() {
    let ip= "http://192.168.1.170:8000";
    let concertUrl = ip + "/restapi/concert/" + this.props.id;
    axios
      .get(
        concertUrl
      )
      .then(res => {
        console.log("got data");
        
        let artistUrl = ip + "/restapi/artist/" + res.data.artist;
        let locationUrl = ip + "/restapi/location/" + res.data.location;
        let venueUrl = ip + "/restapi/venue/" + res.data.venue;
        
        this.setState({
          artist: res.data.artist,
          location: res.data.location,
          venue: res.data.venue,
          date: res.data.date,
          time: res.data.time,
          concert_id: res.data.concert_id,
          ticket_min: res.data.ticket_min,
          ticket_max: res.data.ticket_max
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.artist)
      return null;
    return (
      <div className="details">
        <div className="details-img">
          {/* <img src={this.props.img} className="details-card-img"></img> */}
        </div>
        <div style={cardText}>
          <h1>{this.state.artist}</h1>
          <h5>{this.state.venue}, {this.state.location}</h5>
          {/* <h5>{this.props.capacity} capacity</h5> */}
          <h5>{this.state.date}, {this.state.time}</h5>
          <h5>${this.state.ticket_min} - ${this.state.ticket_max}</h5>
          <div className="details-card-stats">
            {/* <h5><a href={this.props.city_url}>Location Info</a> / <a href={this.props.artist_url}>Artist Info</a></h5> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ConcertDetailsCard;

const cardText = {
  color: 'white',
  float: 'left',
  textAlign: 'left',
  marginLeft: '10px'
}