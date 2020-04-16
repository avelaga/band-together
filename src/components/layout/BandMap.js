import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MediaQuery from 'react-responsive'


export class BandMap extends Component {

  render() {
    return (
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
          <Map
            google={this.props.google}
            zoom={8}
            containerStyle={mapStyles}
            initialCenter={{ lat: this.props.lat, lng: this.props.long }}
          >
            <Marker position={{
              lat: this.props.lat,
              lng: this.props.long
            }} />
          </Map>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500}>
          <Map
            google={this.props.google}
            zoom={8}
            containerStyle={mobileMap}
            initialCenter={{ lat: this.props.lat, lng: this.props.long }}
          >
            <Marker position={{
              lat: this.props.lat,
              lng: this.props.long
            }} />
          </Map>
        </MediaQuery>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAgOSWSEKCcFLlHQKPyg4MEWHW1Xo8HiHE'
})(BandMap);

const mapStyles = {
  width: '1000px',
  height: '300px',
};

const mobileMap = {
  width: '90vw',
  height: '90vw',
}