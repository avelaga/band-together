import React, { Component } from "react";
import LocationDetailsCard from "../layout/LocationDetailsCard.js";
import AustinImg from "../../../dist/images/austin.jpg";
import ChicagoImg from "../../../dist/images/chicago.jpg";
import LosAngelesImg from "../../../dist/images/losangeles.jpeg";
import austin_map from "../../../dist/images/austin_map.jpg";
import LA_map from "../../../dist/images/LA_map.jpg";
import chicago_map from "../../../dist/images/chicago_map.jpg";
import "./pages.css";

export class LocationDetailPage extends Component {
  locations = [
    {
      name: "Austin, Texas: United States",
      upcoming_concerts: [],
      population: 950715,
      year_founded: 1839,
      crime_rating: "3.9%",
      food: "https://austin.eater.com/maps/best-restaurants-austin-eater-38-map",
      hotels: "https://travel.usnews.com/Hotels/Austin_TX/",
      airports: "http://www.austintexas.gov/department/abia-airport-airlines-flights",
      public_transport: "yes",
      weather: "Sunny",
      info:
        "Austin is the capital city of the U.S. state of Texas, as well as the seat and largest city of Travis County, with portions extending into Hays and Williamson counties. It is the 11th-most populous city in the United States, the fourth-most-populous city in Texas, and the second-most-populous state capital city (after Phoenix, Arizona). It is also the fastest growing large city in the United States and the southernmost state capital in the contiguous United States.",
      image: AustinImg,
      map: austin_map
    },
    {
      name: "Chicago",
      upcoming_concerts: [],
      population: 2716000,
      year_founded: 1837,
      crime_rating: "4.3%",
      food: "https://chicago.eater.com/maps/38-best-restaurants-in-chicago",
      hotels: "https://www.hotels.com/de1497539/hotels-chicago-illinois/",
      airports: "https://www.yelp.com/search?cflt=airports&find_loc=Chicago%2C+IL",
      public_transport: "yes",
      weather: "Cold, Windy",
      info:
      "Chicago, officially the City of Chicago, is the most populous city in the U.S. state of Illinois, and the third-most-populous city in the United States. With an estimated population of 2,705,994 (2018), it is also the most populous city in the Midwestern United States. Chicago is the county seat of Cook County, the second-most-populous county in the US, with a small portion of the northwest side of the city extending into DuPage County near O'Hare Airport. Chicago is the principal city of the Chicago metropolitan area, often referred to as Chicagoland. At nearly 10 million people, the metropolitan area is the third most populous in the United States.", 
      image: ChicagoImg,
      map: chicago_map
    },
    {
      name: "Los Angeles",
      upcoming_shows: [],
      population: 4000000,
      year_founded: 1850,
      crime_rating: "3%",
      food: "https://la.eater.com/maps/best-los-angeles-restaurants-eater-38-essential",
      hotels: "https://www.hotels.com/de1439028/hotels-los-angeles-california/",
      airports: "https://www.tripadvisor.com/Travel-g28926-c180227/California:United-States:Major.California.Airports.Rail.And.Bus.html",
      public_transport: "yes",
      weather: "Sunny",
      info:
      "Los Angeles (Spanish for The Angels), officially the City of Los Angeles and often known by its initials L.A., is the most populous city in California; the second most populous city in the United States, after New York City; and the third most populous city in North America, after Mexico City and New York City. With an estimated population of nearly four million people,[11] Los Angeles is the cultural, financial, and commercial center of Southern California. The city is known for its Mediterranean climate, ethnic diversity, the entertainment industry, and its sprawling metropolis.",
      image: LosAngelesImg,
      map: LA_map
    }
  ];

  render() {
    const id = this.props.match.params.id;
    if(isNaN(id)){
      return (
          <h1> 404: Page Not Found :( - Location Does Not Exist</h1>
      );
    }

    return (
      <div className="body flex">
        <LocationDetailsCard name={this.locations[id - 1].name} img={this.locations[id - 1].image} population={this.locations[id - 1].population} founded={this.locations[id - 1].year_founded} crime_rating={this.locations[id - 1].crime_rating} food_url={this.locations[id - 1].food} hotel_url={this.locations[id - 1].hotels} airport_url={this.locations[id - 1].airports} map={this.locations[id - 1].map} bio={this.locations[id - 1].info} weather={this.locations[id - 1].weather}/>
      </div>
    );
  }
}

export default LocationDetailPage;
