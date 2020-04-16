import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import spotifyLogo from "../../../dist/images/spotify.png";
import twitterLogo from "../../../dist/images/twitter.png";
import wikiLogo from "../../../dist/images/wikipedia.png";

export class ArtistCard extends Component {
  render() {
    return (
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
          <div className="card" style={height}>
            <a href={this.props.artist_url}><img src={this.props.img} className="card-img"></img></a>
            <div className="card-text">
              <h2>{this.props.search ? <mark style={highlight}>{this.props.name}</mark> : this.props.name}</h2>
              <h6>Genre: {this.props.genre}</h6>
              <h6>{this.props.followers} Spotify followers</h6>
              <h6>Popularity Score: {this.props.popularity}</h6>
              {this.props.website && <h6><a href={this.props.website}><i>Website</i></a></h6>}
              <a href={this.props.spotify_url}><img src={spotifyLogo} style={logo}></img></a>
              {this.props.twitter_url && <a href={this.props.twitter_url}><img src={twitterLogo} style={logo}></img></a>}
              {this.props.wiki_url && <a href={this.props.wiki_url}><img src={wikiLogo} style={logo}></img></a>}
            </div>
          </div>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500}>
          <div className="card" style={mobileHeight}>
            <a href={this.props.artist_url}><img src={this.props.img} className="card-img"></img></a>
            <div className="card-text">
              <h2>{this.props.name}</h2>
              <h6>Genre: {this.props.genre}</h6>
              <h6>{this.props.followers} Spotify followers</h6>
              <h6>Popularity Score: {this.props.popularity}</h6>
              {this.props.website && <h6><a href={this.props.website}><i>Website</i></a></h6>}
              <a href={this.props.spotify_url}><img src={spotifyLogo} style={logo}></img></a>
              {this.props.twitter_url && <a href={this.props.twitter_url}><img src={twitterLogo} style={logo}></img></a>}
              {this.props.wiki_url && <a href={this.props.wiki_url}><img src={wikiLogo} style={logo}></img></a>}
            </div>
          </div>
        </MediaQuery>
      </div>

    );
  }
}

export default ArtistCard;

const height = {
  height: '400px'
}

const mobileHeight = {
  maxHeight: '700px'
}

const logo = {
  height: '20px',
  width: '20px',
  marginRight: '5px',
  marginBottom: '10px'
}

const highlight = {
  backgroundColor: 'lightBlue'
}