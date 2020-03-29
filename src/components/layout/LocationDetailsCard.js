import React, { Component } from "react";
const axios = require("axios").default;

export class LocationDetailsCard extends Component {
  constructor() {
    super();
    this.state = {
      city : null,
      country : null,
      population : null,
      timezone : null,
      region : null,
      area_code : null,
      elevation : null,
      image : null
    }
  }

  componentDidMount() {
    let url = "http://192.168.1.170:8000/restapi/location/" + this.props.id;
    axios
      .get(
        url
      )
      .then(res => {
        console.log("got data");
        this.setState({
          city : res.data.city,
          country : res.data.country,
          population : res.data.population,
          timezone : res.data.timezone,
          region: res.data.region,
          area_code : res.data.area_code,
          elevation : res.data.elevation,
          image : res.data.image
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div style={locDetails}>
        <div className="details-img">
          <img src={this.state.image} className="details-card-img"></img>
        </div>
        <div style={detailsText}>
          <h1>{this.state.city}</h1>
          <h5>Population of {this.state.population}</h5>
          <h5>Timezone: {this.state.timezone}</h5>
          <h5>{this.state.city}, {this.state.region}, {this.state.country}, {this.state.area_code}</h5>
          <h5>Elevation of: {this.state.elevation} ft</h5>
          {/* <h5>Founded in {this.props.founded}</h5> */}
          {/* <h5>Crime rating of {this.props.crime_rating}</h5> */}
          {/* <h5>Weather forecast: {this.props.weather}</h5> */}
        </div>
        <div className="map-img">
            {/* <img src={this.props.map} className="details-card-img"></img> */}
        </div>
        <div style={detailsBio}>
            {/* <h5>{this.props.bio}</h5> */}
            {/* <h5><a href={this.props.food_url}>Food Info</a> / <a href={this.props.hotel_url}>Hotel Info</a> / <a href={this.props.airport_url}>Airport Info</a></h5> */}
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

// class Location(models.Model):
//     city = models.CharField(max_length=100, null=True)
//     country = models.CharField(max_length=100, null=True)
//     population = models.IntegerField(null=True)
//     timezone = models.CharField(max_length=100, null=True)
//     region = models.CharField(max_length = 100, null=True)
//     area_code = models.CharField(max_length=3, null=True)
//     elevation = models.IntegerField(null=True)
//     image = models.URLField(null=True)