import React, { Component, Children } from "react";
import ConcertCard from '../layout/ConcertCard.js';
import PostImg from '../../../dist/images/post_malone.jpg';
import BillieImg from '../../../dist/images/billie_eilish.jpg';
import KISSImg from '../../../dist/images/kiss.jpg';

export class ConcertListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body flex">
        <ConcertCard name={"Post Malone"} img={PostImg} city={"Austin, TX"} venue={"Frank C. Erwin, Jr. Special Events Center"} city_url={"/locations/1"} date={"Tuesday, March 10th"} time={"8:00 PM"} concert_url={"concerts/1"} artist_url={"artists/1"} />
        <ConcertCard name={"Billie Eilish"} img={BillieImg} city={"Chicago, IL"} venue={"United Center"} city_url={"/locations/2"} date={"Tuesday, March 24th"} time={"7:30 PM"} concert_url={"concerts/2"} artist_url={"artists/2"} />
        <ConcertCard name={"KISS"} img={KISSImg} city={"Los Angeles, CA"} venue={"STAPLES Center"} city_url={"/locations/3"} date={"Wednesday, March 4th"} time={"7:30 PM"} concert_url={"concerts/3"} artist_url={"artists/3"} />
      </div>
    );
  }
}

export default ConcertListPage;