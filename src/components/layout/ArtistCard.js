import React, { Component } from "react";

export class ArtistCard extends Component {
  render() {
    return (
      <div className="card artist-card">
        <a href={this.props.artist_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h1>{this.props.name}</h1>
          <h5>Genre: {this.props.genre}</h5>
          <h5>Year started: {this.props.started}</h5>
          <h5>Record label: {this.props.label}</h5>
          <h5>Hometown: {this.props.hometown}</h5>
          <h5>Top song: {this.props.song}</h5>
          <div className="card-stats">
            <h5><a href={this.props.city_url}>Location Info</a> / <a href={this.props.concert_url}>Concert Info</a> / <a href={this.props.artist_url}>Artist Info</a></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistCard;