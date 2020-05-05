import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import spotifyLogo from "../../../dist/images/spotify.png";
import twitterLogo from "../../../dist/images/twitter.png";
import wikiLogo from "../../../dist/images/wikipedia.png";
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
      wiki_url: null,
      nextVenueName: null,
      nextConcertId: null,
      nextConcertDate: null,
      nextConcertTime: null,
      nextLocationName: null,
      nextLocationId: null,
      bio: null
    }
  }

  componentDidMount() {
    let url = "http://192.168.1.170:8000/restapi/artist/" + this.props.id;
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
          wiki_url: res.data.wiki_url,
          nextVenueName: res.data.nextVenueName,
          nextConcertId: res.data.nextConcertId,
          nextLocationName: res.data.nextLocationName,
          nextLocationId: res.data.nextLocationId,
          nextConcertDate: res.data.nextConcertDate,
          nextConcertTime: res.data.nextConcertTime,
          bio: res.data.bio
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
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
          <div className="details">

            <div style={img}>
              <img src={this.state.image} className="details-img"></img>
            </div>

            <div style={bio}>
              <h1>{this.state.name}</h1>
              <h6>{this.state.bio}</h6>
              <h6>Genre: {this.state.genre}</h6>
              <h6>Popularity Score: {this.state.popularity_score}</h6>
              <h6>Spotify Followers: {this.state.num_spotify_followers}</h6>

              <h6>Next Concert: <a href={"/concerts/" + this.state.nextConcertId}><i>{this.state.nextVenueName}</i></a> in <a href={"/locations/" + this.state.nextLocationId}><i>{this.state.nextLocationName}</i></a></h6>

              {this.state.website && <h6><a href={this.state.website}><i>Website</i></a></h6>}
              <a href={this.state.spotify_url}><img src={spotifyLogo} style={logo}></img></a>
              {this.state.twitter_url && <a href={this.state.twitter_url}><img src={twitterLogo} style={logo}></img></a>}
              {this.state.wiki_url && <a href={this.state.wiki_url}><img src={wikiLogo} style={logo}></img></a>}
            </div>
          </div>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500}>
          <div className="flex">

            <h1 className="title">{this.state.name}</h1>

            <div>
              <img src={this.state.image} className="mobile-details-img"></img>
            </div>

            <div className="mobile-details-text">
              <div className="attribute">Genre: </div><h6>{this.state.genre}</h6>
              <hr className="card-line" />
              <div className="attribute">Popularity Score: </div><h6>{this.state.popularity_score}</h6>
              <hr className="card-line" />
              <div className="attribute">Spotify Followers: </div><h6>{this.state.num_spotify_followers}</h6>
              <hr className="card-line" />
              <div className="attribute">Next Concert: </div><h6><a href={"/concerts/" + this.state.nextConcertId}><i>{this.state.nextVenueName}</i></a> in <a href={"/locations/" + this.state.nextLocationId}><i>{this.state.nextLocationName}</i></a></h6>
              <hr className="card-line" />
              {this.state.website && <h6><a href={this.state.website}><i>Website</i></a></h6>}
              <a href={this.state.spotify_url}><img src={spotifyLogo} style={logo}></img></a>
              {this.state.twitter_url && <a href={this.state.twitter_url}><img src={twitterLogo} style={logo}></img></a>}
              {this.state.wiki_url && <a href={this.state.wiki_url}><img src={wikiLogo} style={logo}></img></a>}
            </div>
          </div>
        </MediaQuery>
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

const logo = {
  height: '30px',
  width: '30px',
  marginRight: '5px'
}