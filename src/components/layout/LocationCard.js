import React, { Component } from "react";

export class LocationCard extends Component {
  render() {
    return (
      <div className="card" style={height}>
        <a href={this.props.city_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h2>{checkHighlight(this.props.city, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.city}</mark> : this.props.city}</h2>
          <h6>{checkHighlight(this.props.region, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.region}</mark> : this.props.region}, USA</h6>
          <hr className="card-line"/>
          <div className="attribute">Timezone:</div> <h6>{checkHighlight(this.props.timezone, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.timezone}</mark> : this.props.timezone}</h6>
          <hr className="card-line"/>
          <div className="attribute">Population: </div><h6>{checkHighlight(this.props.pop.toString(), this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.pop}</mark> : this.props.pop}</h6>
          <hr className="card-line"/>
          <div className="attribute">Elevation: </div><h6>{checkHighlight(this.props.elevation.toString(), this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.elevation}</mark> : this.props.elevation} ft</h6>
        </div>
      </div>
    );
  }
}

export default LocationCard;

const height = {
  maxHeight: '700px'
}

const highlight = {
  backgroundColor: 'lightBlue'
}

function checkHighlight(str1, str2, bool) {
  if (str1 == undefined || str2 == undefined) {
    return false
  }
  if (!bool) {
    return false;
  }
  return str1.toLowerCase().includes(str2.toLowerCase());
}