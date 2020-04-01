import React, { Component } from "react";
import BandMap from '../layout/BandMap';
const axios = require("axios").default;

export class LocationDetailsCard extends Component {
  constructor() {
    super();
    this.state = {
      city: null,
      country: null,
      population: null,
      timezone: null,
      region: null,
      area_code: null,
      elevation: null,
      image: null,
      nextVenueName: null,
      nextConcertId: null,
      nextArtistName: null,
      nextArtistId: null,
      lat: null,
      long: null
    }
  }

  componentDidMount() {
    let url = "http://bandtogetherapi.xyz/restapi/location/" + this.props.id;
    axios
      .get(
        url
      )
      .then(res => {
        this.setState({
          city: res.data.city,
          country: res.data.country,
          population: res.data.population,
          timezone: res.data.timezone,
          region: res.data.region,
          area_code: res.data.area_code,
          elevation: res.data.elevation,
          image: res.data.image,
          nextVenueName: res.data.nextVenueName,
          nextConcertId: res.data.nextConcertId,
          nextArtistName: res.data.nextArtistName,
          nextArtistId: res.data.nextArtistId,
          lat: res.data.lat,
          long: res.data.lon
          // lat: 47.444,
          // long: -122.176
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.city)
      return null;
    return (
      <div style={locDetails}>
        <div className="details-img">
          <img src={this.state.image} className="details-card-img"></img>
        </div>
        <div style={detailsText}>
          <h1>{this.state.city}</h1>
          <h6>Population of {this.state.population}</h6>
          <h6>Timezone: {this.state.timezone}</h6>
          <h6>{this.state.region}, {this.state.country}, {this.state.area_code}</h6>
          <h6>Elevation of: {this.state.elevation} ft</h6>
          <h6>Next Concert: <a href={"/artists/"+this.state.nextArtistId}><i>{this.state.nextArtistName}</i></a> at <a href={"/concerts/"+this.state.nextConcertId}><i>{this.state.nextVenueName}</i></a></h6>
        </div>
        <div style={map}>
          <BandMap lat={this.state.lat} long={this.state.long}/>
        </div>
      </div>
    );
  }
}

export default LocationDetailsCard;

const map = {
  width: '1000px',
  height: '300px',
}

const detailsText = {
  color: 'white',
  textAlign: 'left',
  marginLeft: '10px',
  marginTop: '10px',
  height: '290px',
  width: '680px'
}

const locDetails = {
  display: 'flex',
  flexWrap: 'wrap',
  minWidth: '1000px',
  height: '600px',
  backgroundColor: 'black',
  border: 'rgb(53, 53, 53)',
  borderWidth: '1px',
  borderStyle: 'solid',
  textAlign: 'center',
  width: '450px',
  margin: '60px',
  borderRadius: '3px'
}
