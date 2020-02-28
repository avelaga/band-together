import React, { Component } from "react";
import AustinImg from '../../../dist/images/austin.jpg';
import ChicagoImg from '../../../dist/images/chicago.jpg';
import LAImg from '../../../dist/images/losangeles.jpeg';
import LocationCard from '../layout/LocationCard.js';
import "./pages.css";

const concerts = "/concerts"
const artists = "/artists"

export class LocationListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body flex">
        <LocationCard city={"Austin, TX"} crime_rate={39} venues={250} img={AustinImg} city_url={"/locations/1"} pop={"950,715"} concert_url={concerts} artist_url={artists} />
        <LocationCard city={"Chicago, IL"} crime_rate={43} img={ChicagoImg} city_url={"/locations/2"} pop={"2,716,000"} concert_url={concerts} artist_url={artists} />
        <LocationCard city={"Los Angeles, CA"} crime_rate={33} img={LAImg} city_url={"/locations/3"} pop={"4,000,000"} concert_url={concerts} artist_url={artists} />
      </div>
    );
  }
}


export default LocationListPage
