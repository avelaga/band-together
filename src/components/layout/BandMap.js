import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';


export class BandMap extends Component {

    render() {
        return (
            <Map
            google={this.props.google}
            zoom={8}
            containerStyle={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}

  export default GoogleApiWrapper({
    apiKey: ''
  })(BandMap);

  const mapStyles = {
    width: '1000px',
    height: '300px',
  };