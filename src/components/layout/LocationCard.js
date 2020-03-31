import React, { Component } from "react";

export class LocationCard extends Component {
  render() {
    return (
      <div className="card" style={height}>
        <a href={this.props.city_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h2>{this.props.city}</h2>
          <h6>{this.props.region}, {this.props.country}, {this.props.area_code}</h6>
          <h6>Timezone: {this.props.timezone}</h6>
          <h6>Population of {this.props.pop}</h6>
          <h6>Elevation of {this.props.elevation} ft</h6>
        </div>
      </div>
    );
  }
}

export default LocationCard;

const height = {
  maxHeight: '625px'
}
