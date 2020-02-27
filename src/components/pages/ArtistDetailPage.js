import React, { Component } from "react";
import BillieImg from '../../../dist/images/billie.jpg'
import "./pages.css";

export class ArtistDetailPage extends Component {

  artists = [
    {
      name: "Billie Eilish",
      genre: "Alternative Rock",
      upcoming_shows: [],
      members: ["Billie Eilish"],
      year_started: 2015,
      bio: "Test bio"

    }
  ]

  render() {
    const id = this.props.match.params.id;

  return (
    <div className="artist-detail-page">
      <div className="artist-detail">
        <img src={BillieImg} className="artist-detail-image" />
        <h1 className="artist-name">{this.artists[id-1].name}</h1>
      </div>
    </div>
  );
  }
}

export default ArtistDetailPage;
