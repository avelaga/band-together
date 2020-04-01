import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


export class BandMap extends Component {

  render() {
    return (
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