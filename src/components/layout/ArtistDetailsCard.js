import React, { Component } from "react";
import spotifyLogo from "../../../dist/images/spotify.png";
const axios = require("axios").default;

export class ArtistDetailsCard extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      popularity_score: null,
      genre: null,
      image: null,
      spotify_url: null,
      num_spotify_followers: null,
      website: null,
      twitter_url: null,
      wiki_url: null
    }
  }

  componentDidMount() {
    let url = "http://bandtogetherapi.xyz:8000/restapi/artist/" + this.props.id;
    axios
      .get(
        url
      )
      .then(res => {
        this.setState({
          name: res.data.name,
          popularity_score: res.data.popularity_score,
          genre: res.data.genre,
          image: res.data.image,
          spotify_url: res.data.spotify_url,
          num_spotify_followers: res.data.num_spotify_followers,
          website: res.data.website,
          twitter_url: res.data.twitter_url,
          wiki_url: res.data.wiki_url
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.name)
      return null;
    return (
      <div className="details">
        <div style={img}>
          <img src={this.state.image} className="details-card-img"></img>
        </div>
        <div style={bio}>
          <h1>{this.state.name}</h1>
          <h5>Genre: {this.state.genre}</h5>
          <h5>Popularity Score: {this.state.popularity_score}</h5>
          <h5>Spotify Followers: {this.state.num_spotify_followers}</h5>
          <h5><a href={this.state.spotify_url}>
            <img src={spotifyLogo} style={spotify}></img></a></h5>
        </div>
      </div>
    );
  }
}

export default ArtistDetailsCard;

const bio = {
  fontSize: '2px',
  color: 'white',
  textAlign: 'left',
  marginLeft: '10px',
  marginTop: '10px',
  height: '300px',
  width: '990px',
  marginRight: '10px'
}

const img = {
  float: 'left',
  height: '300px',
  width: '300px',
  marginRight: '10px'
}

const spotify = {
  height: '30px',
  width: '30px'
}