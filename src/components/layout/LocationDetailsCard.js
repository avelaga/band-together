import React, { Component } from "react";

export class LocationDetailsCard extends Component {
  render() {
    return (
      <div style={locDetails}>
        <div className="details-img">
          <img src={this.props.img} className="details-card-img"></img>
        </div>
        <div style={detailsText}>
          <h1>{this.props.name}</h1>
          <h5>Population of {this.props.population}</h5>
          <h5>Founded in {this.props.founded}</h5>
          <h5>Crime rating of {this.props.crime_rating}</h5>
          <h5>Weather forecast: {this.props.weather}</h5>
        </div>
        <div className="map-img">
            <img src={this.props.map} className="details-card-img"></img>
        </div>
        <div style={detailsBio}>
            <h5>{this.props.bio}</h5>
            <h5><a href={this.props.food_url}>Food Info</a> / <a href={this.props.hotel_url}>Hotel Info</a> / <a href={this.props.airport_url}>Airport Info</a></h5>
        </div>
      </div>
    );
  }
}

export default LocationDetailsCard;

const detailsText = {
  color: 'white',
  textAlign: 'left',
  marginLeft: '10px',
  marginTop: '10px',
  height: '300px',
  width: '680px'
}

const detailsBio = {
  color: 'rgb(170, 170, 170)',
  margin: '10px',
  width: '670px',
  textAlign: 'left'
}

const locDetails = {
  display: 'flex',   
  flexWrap: 'wrap',
  minWidth: '1000px',
  height: '612px',
  backgroundColor: 'black',
  border: 'rgb(53, 53, 53)',
  borderWidth: '1px',
  borderStyle: 'solid',
  textAlign: 'center',
  width: '450px',
  margin: '60px',
  borderRadius: '3px'
}