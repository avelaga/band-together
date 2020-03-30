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
      ticket_max: null,
      artistName: null,
      locationName: null,

      venueName: null,
      venue_address: null,
      parking_info: null,
      postal_code: null,
      image: null,
      venue_id: null,
    }
  }

  componentDidMount() {
    let ip = "http://bandtogetherapi.xyz:8000";
    let concertUrl = ip + "/restapi/concert/" + this.props.id;
    // get concert data
    axios
      .get(
        concertUrl
      )
      .then(res => {
        this.setState({
          artist: res.data.artist,
          location: res.data.location,
          venue: res.data.venue,
          date: res.data.date,
          time: res.data.time,
          concert_id: res.data.concert_id,
          ticket_min: res.data.ticket_min,
          ticket_max: res.data.ticket_max,
          artistName: res.data.artistName,
          locationName: res.data.locationName
        })
        // get venue data
        axios
          .get(
            this.state.venue
          )
          .then(res => {
            this.setState({
              venueName: res.data.name,
              venue_address: res.data.venue_address,
              parking_info: res.data.parking_info,
              postal_code: res.data.postal_code,
              image: res.data.image,
              venue_id: res.data.venue_id
            });
          })
          .catch(err => {
            console.log(err);
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
          <img src={this.state.image} className="details-card-img"></img>
        </div>
        <div style={cardText}>
          <h1>{this.state.artistName}</h1>
          <h5>{this.state.venueName}, {this.state.venue_address}, {this.state.locationName}, {this.state.postal_code}</h5>
          <h5>{this.state.date}, {this.state.time}</h5>
          <h5>${this.state.ticket_min} - ${this.state.ticket_max}</h5>
          <h6>Parking Notes: {this.state.parking_info}</h6>
          <div className="details-card-stats">

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
  marginLeft: '10px',
  width: '680px',
  overflowWrap: 'normal'
}