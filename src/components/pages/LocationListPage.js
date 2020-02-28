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
        <LocationCard city={"Austin, TX"} crime_rate={39} img={AustinImg} city_url={"/locations/1"} pop={"950,715"} venues={"Frank Erwin Center, ACL Live, etc."} airport={"Austin-Bergstrom International Airport (AUS)"}/>
        <LocationCard city={"Chicago, IL"} crime_rate={43} img={ChicagoImg} city_url={"/locations/2"} pop={"2,716,000"} venues={"House of Blues, United Center, etc."} airport={"O'Hare International Airport (ORD)"} />
        <LocationCard city={"Los Angeles, CA"} crime_rate={33} img={LAImg} city_url={"/locations/3"} pop={"4,000,000"} venues={"STAPLES Center, Microsoft Theater, etc."} airport={"Los Angeles International Airport (LAX)"} />
      </div>
    );
  }
}


export default LocationListPage
