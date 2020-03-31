import React, { Component } from "react";

export class LocationCard extends Component {
  render() {
    return (
      <div className="card" style={height}>
        <a href={this.props.city_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h2>{this.props.city}</h2>
          {this.props.region}, {this.props.country}, {this.props.area_code}
          <h5>Population of {this.props.pop}</h5>
          <div className="card-stats">
            {/* <h5><a href={this.props.city_url}>Location Info</a></h5> */}
          </div>
        </div>
      </div>
    );
  }
}

export default LocationCard;

const height = {
  maxHeight: '625px'
}
