import React, { Component } from "react";
import MediaQuery from 'react-responsive'
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
      artistId: null,
      locationId: null,
      artistImage: null,
      venueImage: null,

      venueName: null,
      venue_address: null,
      parking_info: null,
      postal_code: null,
      image: null,
      venue_id: null,
    }
  }

  componentDidMount() {
    let ip = "https://bandtogetherapi.xyz";
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
          locationName: res.data.locationName,
          artistId: res.data.artistId,
          locationId: res.data.locationId,
          artistImage: res.data.artistImage,
          venueImage: res.data.venueImage,
          venueName: res.data.venueName
        })
        // get venue data
        axios
          .get(
            this.state.venue
          )
          .then(res => {
            this.setState({
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
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
          <div className="details">

            <div style={img}>
              <img src={this.state.venueImage ? this.state.venueImage : this.state.artistImage} className="details-img"></img>
            </div>

            <div style={cardText}>
              <a href={"/artists/" + this.state.artistId}><h1>{this.state.artistName}</h1></a>
              <h6><a href={"/locations/" + this.state.locationId}>{this.state.venueName}, {this.state.venue_address}, {this.state.locationName}, {this.state.postal_code}</a></h6>
              <h6>{this.state.date}</h6>
              <h6>{this.state.time}</h6>
              {this.state.ticket_min && <h6>${this.state.ticket_min} - ${this.state.ticket_max}</h6>}
              {this.state.parking_info && <h6>Parking Notes: {this.state.parking_info}</h6>}
            </div>
          </div>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500}>
          <div className="flex">

            <a href={"/artists/" + this.state.artistId}><h1 className="title" style={titleMargin}>{this.state.artistName}</h1></a>

            <div>
              <img src={this.state.venueImage ? this.state.venueImage : this.state.artistImage} className="mobile-details-img"></img>
            </div>

            <div className="mobile-details-text">
              <h6><a href={"/locations/" + this.state.locationId}>{this.state.venueName}, {this.state.venue_address}, {this.state.locationName}, {this.state.postal_code}</a></h6>
              <h6>{this.state.date}</h6>
              <h6>{this.state.time}</h6>
              {this.state.ticket_min && <h6>${this.state.ticket_min} - ${this.state.ticket_max}</h6>}
              {this.state.parking_info && <h6>Parking Notes: {this.state.parking_info}</h6>}
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default ConcertDetailsCard;

const cardText = {
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

const titleMargin = {
  marginBottom: '20px'
}