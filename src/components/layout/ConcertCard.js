import React, { Component } from "react";

export class ConcertCard extends Component {
  render() {
    return (
      <div className="card">
        <a href={this.props.city_url}><img src={this.props.img} className="card-img"></img></a>
        <div className="card-text">
          <h1>{this.props.city}</h1>
          <h5>Population of {this.props.pop}</h5>
          <div className="card-stats">
            <h5><a href={this.props.concert_url}>Concert Info</a> / <a href={this.props.artist_url}>Artist Info</a></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ConcertCard;

/*

<tr>
              <td>
                <b><h3>{name}</h3></b><img style={{height:'150px', float: 'right'}} src={img}></img><br></br>
                <a className="concert-link" href={name_url}>Concert Info</a> / <a className="artist-link" href={artist_url}>Artist Info</a>
              </td>
              <td><h3>{city}</h3></td>
              <td><h3>{venue}</h3><br></br>{date}, {time}</td>
            </tr>

*/
