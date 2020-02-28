import React, { Component, Children } from "react";
import Table from 'react-bootstrap/Table';
import PostImg from '../../../dist/images/post_malone.png';
import BillieImg from '../../../dist/images/billie_eilish.jpg';
import KissImg from '../../../dist/images/kiss.jpg';


export class ArtistListPage extends Component { 

  concerts = "/concerts"
  locations = "/locations"
  renderTableRow(img, artist, artist_url, genre, location, location_url, concert, concert_url){
    return (<tr>
              <td width = "150">
              <img className = "artist-image" width = "150px" src={img}></img><br></br>
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
  return( 
    <div className="body">
      <Table bordered striped hover variant="dark">
        <thead>
          <tr>
            <th><h2>Artist</h2></th>
            <th><h2>Genre</h2></th>
            <th><h2>Tour Venue and City</h2></th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableRow(BillieImg, "Billie Eilish" ,"https://bandtogether.events/artists/1/", "Alternative Pop", 
                                          "Frank C. Erwin, Jr. Special Events Center", "https://bandtogether.events/concerts/1/" ,
                                          "Los Angeles, CA", "https://bandtogether.events/locations/3/")}
          {this.renderTableRow(KissImg, "Kiss" ,"https://bandtogether.events/artists/2/",  "Hard Rock",
                                        "United Center", "https://bandtogether.events/concerts/2/", 
                                        "Chicago, IL", "https://bandtogether.events/locations/2/")}
          {this.renderTableRow(PostImg, "Post Malone" ,"https://bandtogether.events/artists/3/", "Hip Hop",
                                        "STAPLES Center","https://bandtogether.events/concerts/3/",
                                        "Austin, TX", "https://bandtogether.events/locations/1/")}
        </tbody>
      </Table>
    </div>
  );
}
}

export default ArtistListPage;
