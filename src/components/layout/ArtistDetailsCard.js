import React, { Component } from "react";

export class ArtistDetailsCard extends Component {
  render() {
    return (
      <div className="details">
        <div className="artist-img">
          <img src={this.props.img} className="details-card-img"></img>
        </div>
        <div className="artist-bio">
          <h1>{this.props.name}</h1>
          <h5>Year started: {this.props.started}</h5>
          <h5>Genre: {this.props.genre}</h5>
          <h6>{this.props.bio}</h6>
          {/* <div className="details-card-stats">
            <h5><a href={this.props.city_url}>Location Info</a> / <a href={this.props.artist_url}>Artist Info</a></h5>
          </div> */}
        </div>
      </div>
    );
  }
}

export default ArtistDetailsCard;

{/* <ArtistDetailsCard name={this.artists[id - 1].name} img={this.artists[id-1].image} genre={this.artists[id - 1].genre} started={this.artists[id-1].year_started} bio={this.artists[id - 1].bio} /> */}