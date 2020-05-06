import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import spotifyLogo from "../../../dist/images/spotify.png";
import twitterLogo from "../../../dist/images/twitter.png";
import wikiLogo from "../../../dist/images/wikipedia.png";

export class ArtistCard extends Component {

  render() {
    return (
      <div className="card artist-card-height">
        <a href={this.props.artist_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h2>{checkHighlight(this.props.name, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.name}</mark> : this.props.name}</h2>
          <div className="attribute">Genre: </div><h6>{checkHighlight(this.props.genre, this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.genre}</mark> : this.props.genre}</h6>
          <hr className="card-line" />
          <div className="attribute">Spotify Followers: </div><h6>{checkHighlight(this.props.followers.toString(), this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.followers}</mark> : this.props.followers}</h6>
          <hr className="card-line" />
          <div className="attribute">Popularity Score: </div><h6>{checkHighlight(this.props.popularity.toString(), this.props.query, this.props.searched) ? <mark style={highlight}>{this.props.popularity}</mark> : this.props.popularity}</h6>
          <hr className="card-line" />
          {this.props.website && <div className="card-button"><a href={this.props.website}><Button variant="secondary" >Artist Website</Button></a></div>}
          {!this.props.compareSelected && <div className="card-button compare"><Button variant="secondary" onClick={() => { this.props.compare(this.props.id) }}>Compare</Button></div>}
          {this.props.compareSelected && <div className="card-button compare"><Button variant="primary" onClick={() => { this.props.compare(this.props.id) }}>Compare</Button></div>}
          <div className="flex" style={links}>
            <a href={this.props.spotify_url}><img src={spotifyLogo} style={logo}></img></a>
            {this.props.twitter_url && <a href={this.props.twitter_url}><img src={twitterLogo} style={logo}></img></a>}
            {this.props.wiki_url && <a href={this.props.wiki_url}><img src={wikiLogo} style={logo}></img></a>}
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistCard;

const logo = {
  height: '20px',
  width: '20px',
  marginRight: '5px',
  marginBottom: '10px'
}

const highlight = {
  backgroundColor: 'lightBlue'
}

const links = {
  marginTop: '8px'
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