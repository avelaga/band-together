import React, { Component } from "react";

export class LocationCard extends Component {
  render() {
    return (
      <div className="card" style={height}>
        <a href={this.props.city_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
        <h2>{checkHighlight(this.props.city, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.city}</mark> : this.props.city}</h2>
          <h6>{this.props.region}, {this.props.country}, {this.props.area_code}</h6>
          <h6>Timezone: {checkHighlight(this.props.timezone, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.timezone}</mark> : this.props.timezone}</h6>
          <h6>Population of {checkHighlight(this.props.pop, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.pop}</mark> : this.props.pop}</h6>
          <h6>Elevation of {checkHighlight(this.props.elevation, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.elevation}</mark> : this.props.elevation} ft</h6>
        </div>
      </div>
    );
  }
}

export default LocationCard;

const height = {
  maxHeight: '625px'
}

const highlight = {
  backgroundColor: 'lightBlue'
}

function checkHighlight(str1, str2, bool){
  if(!bool){
    return false;
  }
  return str1.toLowerCase().includes(str2.toLowerCase());
}