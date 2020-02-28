import React, { Component, Children } from "react";
import PostImg from '../../../dist/images/post_malone.png';
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
        <ConcertCard name={"Post Malone"} img={PostImg} city={"Austin, TX"} venue={"Frank C. Erwin, Jr. Special Events Center"} city_url={"/locations/1"} date={"Tuesday, March 10th"} time={"8:00 PM"} concert_url={"concerts/1"} artist_url={"artists/1"} />
        <ConcertCard name={"Post Malone"} img={PostImg} city={"Austin, TX"} venue={"Frank C. Erwin, Jr. Special Events Center"} city_url={"/locations/1"} date={"Tuesday, March 10th"} time={"8:00 PM"} concert_url={"concerts/1"} artist_url={"artists/1"} />
      </div>
    );
  }
}

export default ConcertListPage;
