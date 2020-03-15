import React, { Component } from "react";
import ArtistCard from '../layout/ArtistCard.js';
import PostImg from '../../../dist/images/post_malone.jpg';
import BillieImg from '../../../dist/images/billie_eilish.jpg';
import KISSImg from '../../../dist/images/kiss.jpg';

export class ArtistListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body flex">
        <ArtistCard name={"Post Malone"} genre={"Hip-Hop"} started={2013} label={"Republlic Records"} hometown={"Syracuse, New York"} song={"Congratulations"} img={PostImg} artist_url={"artists/1"} concert_url={"concerts/1"} city_url={"locations/1"} />
        <ArtistCard name={"Billie Eilish"} genre={"Alternative Pop"} started={2015} label={"Interscope"} hometown={"Los Angeles, CA"} song={"ocean eyes"} img={BillieImg} artist_url={"artists/2"} concert_url={"concerts/2"} city_url={"locations/2"} />
        <ArtistCard name={"Kiss"} genre={"Hard Rock"} started={1973} label={"Universal Music Group"} hometown={"New York City, New York"} song={"I Was Made For Lovin' You"} img={KISSImg} artist_url={"artists/3"} concert_url={"concerts/3"} city_url={"locations/3"} />
      </div>
    );
  }
}

export default ArtistListPage;
