import React, { Component } from "react";

export class LocationDetailsCard extends Component {
  render() {
    return (
      <div className="location-details wrap">
        <div className="details-img">
          <img src={this.props.img} className="details-card-img"></img>
        </div>
        <div className="location-details-text">
          <h1>{this.props.name}</h1>
          <h5>Population of {this.props.population}</h5>
          <h5>Founded in {this.props.founded}</h5>
          <h5>Crime rating of {this.props.crime_rating}</h5>
          <h5>Weather forecast: {this.props.weather}</h5>
        </div>
        <div className="map-img">
            <img src={this.props.map} className="details-card-img"></img>
        </div>
        <div className="location-details-bio">
            <h5>{this.props.bio}</h5>
            <h5><a href={this.props.food_url}>Food Info</a> / <a href={this.props.hotel_url}>Hotel Info</a> / <a href={this.props.airport_url}>Airport Info</a></h5>
        </div>
      </div>
    );
  }
}

export default LocationDetailsCard;