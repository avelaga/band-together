import React, { Component } from "react";
import AustinImg from "../../../dist/images/austin.jpg";
import ChicagoImg from "../../../dist/images/chicago.jpg";
import LosAngelesImg from "../../../dist/images/losangeles.jpeg";
import "./pages.css";

export class ArtistDetailPage extends Component {
  artists = [
    {
      name: "Austin",
      upcoming_concerts: [],
      population: 950715,
      year_founded: 1839,
      info:
        "Austin is the capital city of the U.S. state of Texas, as well as the seat and largest city of Travis County, with portions extending into Hays and Williamson counties. It is the 11th-most populous city in the United States, the fourth-most-populous city in Texas, and the second-most-populous state capital city (after Phoenix, Arizona). It is also the fastest growing large city in the United States and the southernmost state capital in the contiguous United States.",
      image: AustinImg
    },
    {
      name: "Chicago",
      upcoming_concerts: [],
      population: 2716000,
      year_founded: 1837,
      info:
      "Chicago, officially the City of Chicago, is the most populous city in the U.S. state of Illinois, and the third-most-populous city in the United States. With an estimated population of 2,705,994 (2018), it is also the most populous city in the Midwestern United States. Chicago is the county seat of Cook County, the second-most-populous county in the US, with a small portion of the northwest side of the city extending into DuPage County near O'Hare Airport. Chicago is the principal city of the Chicago metropolitan area, often referred to as Chicagoland. At nearly 10 million people, the metropolitan area is the third most populous in the United States.", 
      image: ChicagoImg
    },
    {
      name: "Los Angeles",
      upcoming_shows: [],
      population: 4000000,
      year_founded: 1850,
      info:
      "Los Angeles (Spanish for The Angels), officially the City of Los Angeles and often known by its initials L.A., is the most populous city in California; the second most populous city in the United States, after New York City; and the third most populous city in North America, after Mexico City and New York City. With an estimated population of nearly four million people,[11] Los Angeles is the cultural, financial, and commercial center of Southern California. The city is known for its Mediterranean climate, ethnic diversity, the entertainment industry, and its sprawling metropolis.",
      image: LosAngelesImg
    }
  ];

  render() {
    const id = this.props.match.params.id;

    return (
      <div className="artist-detail-page">
        <div className="artist-detail">
          <div className="artist-detail-left">
            <img
              src={this.artists[id - 1].image}
              className="artist-detail-image"
            />
          </div>
          <div className="artist-detail-right">
            <h1>{this.artists[id - 1].name}</h1>
            <p>Population: {this.artists[id - 1].population}</p>
            <p>Founded: {this.artists[id - 1].year_founded}</p>
          </div>
          <div className="clear" />
          <div className="artist-detail-bottom">
            <p>Bio:</p>
            <p>{this.artists[id - 1].info}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistDetailPage;
