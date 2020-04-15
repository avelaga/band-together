import React, { Component } from "react";
import MediaQuery from 'react-responsive'
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
      elevation: null,
      image: null,
      nextVenueName: null,
      nextConcertId: null,
      nextArtistName: null,
      nextArtistId: null,
      lat: null,
      long: null,
      bio: null,
      nextConcertDate: null,
      nextConcertTime: null,
      viewMore: false
    }
  }

  componentDidMount() {
    let url = "http://192.168.1.170:8000/restapi/location/" + this.props.id;
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
          elevation: res.data.elevation,
          image: res.data.image,
          nextVenueName: res.data.nextVenueName,
          nextConcertId: res.data.nextConcertId,
          nextArtistName: res.data.nextArtistName,
          nextArtistId: res.data.nextArtistId,
          lat: res.data.lat,
          long: res.data.lon,
          bio: res.data.bio,
          nextConcertDate: res.data.nextConcertDate,
          nextConcertTime: res.data.nextConcertTime
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  viewMore = (event) => {
    this.setState({
      viewMore: !this.state.viewMore
    });
  }

  render() {
    if (!this.state.city)
      return null;
    return (
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
          <div style={locDetails}>
            <div>
              <img src={this.state.image} className="details-img"></img>
            </div>
            <div style={detailsText}>
              <h1>{this.state.city}</h1>
              <h6>Population of {this.state.population}</h6>
              <h6>Timezone: {this.state.timezone}</h6>
              <h6>{this.state.region}, {this.state.country}</h6>
              <h6>Elevation of: {this.state.elevation} ft</h6>
              <h6>Next Concert: <a href={"/artists/" + this.state.nextArtistId}><i>{this.state.nextArtistName}</i></a> at <a href={"/concerts/" + this.state.nextConcertId}><i>{this.state.nextVenueName}</i></a>, {this.state.nextConcertDate}, {this.state.nextConcertTime}</h6>
              <h6>{this.state.bio}</h6>
            </div>
            <div style={map}>
              <BandMap lat={this.state.lat} long={this.state.long} />
            </div>
          </div>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500}>
          <div className="flex">

            <h1 className="title">{this.state.city}</h1>

            <div>
              <img src={this.state.image} className="mobile-details-img"></img>
            </div>

            <div className="mobile-details-text">
              <h6>Population of {this.state.population}</h6>
              <h6>Timezone: {this.state.timezone}</h6>
              <h6>{this.state.region}, {this.state.country}</h6>
              <h6>Elevation of: {this.state.elevation} ft</h6>
              <h6>Next Concert: <a href={"/artists/" + this.state.nextArtistId}><i>{this.state.nextArtistName}</i></a> at <a href={"/concerts/" + this.state.nextConcertId}><i>{this.state.nextVenueName}</i></a>, {this.state.nextConcertDate}, {this.state.nextConcertTime}</h6>

              {!this.state.viewMore &&
                <div>
                  <div className="truncate"><h6>{this.state.bio}</h6></div>
                  <div 
                    style={mobileButtonStyle}
                    onClick={(e) => { this.viewMore(e) }}
                  >
                    View More
                  </div>
                </div>
              }

              {this.state.viewMore &&
                <div>
                  <div><h6>{this.state.bio}</h6></div>
                  <div
                    style={mobileButtonStyle}
                    onClick={(e) => { this.viewMore(e) }}
                  >
                    View Less
                  </div>
                </div>
              }
            </div>

            <div style={mobileMap}>
              <BandMap lat={this.state.lat} long={this.state.long} />
            </div>

          </div>
        </MediaQuery>
      </div>

    );
  }
}

export default LocationDetailsCard;

const mobileButtonStyle = {
  backgroundColor: 'rgb(0, 119, 255)',
  width: '30vw',
  borderRadius: '5px',
  padding: '7px',
  margin: 'auto',
  fontSize: '15px',
  lineHeight: '30px'
}

const map = {
  width: '1000px',
  height: '300px',
}

const mobileMap = {
  width: '90vw',
  height: '90vw',
  marginBottom: '20px'
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
