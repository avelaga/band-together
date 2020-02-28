import React, { Component, Children } from "react";
import Table from 'react-bootstrap/Table';
import ArtistCard from '../layout/ArtistCard.js';
import PostImg from '../../../dist/images/post_malone.jpg';
import BillieImg from '../../../dist/images/billie_eilish.jpg';
import KISSImg from '../../../dist/images/kiss.jpg';


export class ArtistListPage extends Component {

  concerts = "/concerts"
  locations = "/locations"
  renderTableRow(img, artist, artist_url, genre, location, location_url, concert, concert_url) {
    return (<tr>
      <td width="150">
        <img className="artist-image" width="150px" src={img}></img><br></br>
        <a className="artist-table-links " href={artist_url}><h5>{artist}</h5></a>
      </td>
      <td>{genre}</td>
      <td>
        <a className="artist-table-links " href={location_url}>{location}</a>  <t></t>
        <a className="artist-table-links " href={concert_url}>{concert}</a>

      </td>
    </tr>);
  }

  render() {
    return (
      // <div className="body">
      //   <Table bordered striped hover variant="dark">
      //     <thead>
      //       <tr>
      //         <th><h2>Artist</h2></th>
      //         <th><h2>Genre</h2></th>
      //         <th><h2>Tour Venue and City</h2></th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //     {this.renderTableRow(PostImg, "Post Malone", "/artists/1/", "Hip Hop",
      //         "Frank C. Erwin, Jr. Special Events Center", "/concerts/1/",
      //         "Austin, TX", "/locations/1/")}
      //       {this.renderTableRow(BillieImg, "Billie Eilish", "/artists/2/", "Alternative Pop",
      //         "United Center", "/concerts/2/",
      //         "Chicago, IL", "/locations/3/")}
      //       {this.renderTableRow(KissImg, "Kiss", "/artists/3/", "Hard Rock",
      //         "STAPLES Center", "/concerts/3/",
      //         "Los Angeles, CA", "/locations/3/")}
      //     </tbody>
      //   </Table>
      // </div>

      <div className="body flex">
        <ArtistCard name={"Post Malone"} genre={"Hip-Hop"} started={2013} label={"Republlic Records"} hometown={"Syracuse, New York"} song={"Congratulations"} img={PostImg} artist_url={"artists/1"} concert_url={"concerts/1"} city_url={"locations/1"} />
        <ArtistCard name={"Billie Eilish"} genre={"Alternative Pop"} started={2015} label={"Interscope"} hometown={"Los Angeles, CA"} song={"ocean eyes"} img={BillieImg} artist_url={"artists/2"} concert_url={"concerts/2"} city_url={"locations/2"} />
        <ArtistCard name={"Kiss"} genre={"Hard Rock"} started={1973} label={"Republlic Records"} hometown={"New York City, New York"} song={"I Was Made For Lovin' You"} img={KISSImg} artist_url={"artists/3"} concert_url={"concerts/3"} city_url={"locations/3"} />
      </div>

    );
  }
}

export default ArtistListPage;

{/* <ConcertCard name={"Post Malone"} img={PostImg} city={"Austin, TX"} venue={"Frank C. Erwin, Jr. Special Events Center"} city_url={"/locations/1"} date={"Tuesday, March 10th"} time={"8:00 PM"} concert_url={"concerts/1"} artist_url={"artists/1"} /> */}
