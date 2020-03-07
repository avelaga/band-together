import React, { Component } from "react";

export class DetailsCard extends Component {
  render() {
    return (
      <div className="details">
        <div className="details-img">
          <img src={this.props.img} className="details-card-img"></img>
        </div>
        <div className="details-card-text">
          <h1>{this.props.name}</h1>
          <h5>{this.props.venue}, {this.props.address}</h5>
          <h5>{this.props.capacity} capacity</h5>
          <h5>{this.props.date}, {this.props.time}</h5>
          <h5>${this.props.ticket_price}</h5>
          <div className="details-card-stats">
            <h5><a href={this.props.city_url}>Location Info</a> / <a href={this.props.artist_url}>Artist Info</a></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsCard;