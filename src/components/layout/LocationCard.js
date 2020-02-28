import React, { Component } from "react";

export class LocationCard extends Component {
  render() {
    return (
      <div className="card location-card">
        <a href={this.props.city_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h1>{this.props.city}</h1>
          <h5>Population of {this.props.pop}</h5>
          <font class='longtext'>Concert Venues: {this.props.venues}</font><br />
          <font class='longtext'>Main Airport: {this.props.airport}</font><br />
          <font size='3'>{this.props.crime_rate} crimes per 1000 people</font><br />
          <div className="card-stats">
            <h5><a href={this.props.city_url}>Location Info</a></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationCard;
