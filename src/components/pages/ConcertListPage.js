import React, { Component, Children } from "react";
import Table from 'react-bootstrap/Table';
import PostImg from '../../../dist/images/post_malone.png';
import BillieImg from '../../../dist/images/billie_eilish.jpg';
import KISSImg from '../../../dist/images/kiss.jpg';

export class ConcertListPage extends Component {
  renderTableRow(name, name_url, artist_url, img, city, venue, date, time){
    return (<tr>
              <td>
                <b><h3>{name}</h3></b><img style={{height:'150px', float: 'right'}} src={img}></img><br></br>
                <a className="concert-link" href={name_url}>Concert Info</a>&nbsp;&#183;&nbsp;<a className="artist-link" href={artist_url}>Artist Info</a>
              </td>
              <td><h3>{city}</h3></td>
              <td><h3>{venue}</h3><br></br>{date}&#183;{time}</td>
            </tr>);
  }

  render(){
    return(  
      <div className="concert-list">
        <Table bordered striped hover variant="dark">
          <thead>
            <tr>
              <th><h2>Concert</h2></th>
              <th><h2>City</h2></th>
              <th><h2>Venue</h2></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableRow("Post Malone", "https://bandtogether.events/concerts/1/", "https://bandtogether.events/artists/1/",
             PostImg, "Austin, TX", "Frank C. Erwin, Jr. Special Events Center", "Tuesday, March 10th", "8:00 PM")}
            {this.renderTableRow("Billie Eilish", "https://bandtogether.events/concerts/2/", "https://bandtogether.events/artists/2",
             BillieImg, "Chicago, IL", "United Center", "Tuesday, March 24th", "7:30 PM")}
            {this.renderTableRow("KISS", "https://bandtogether.events/concerts/3/", "https://bandtogether.events/artists/3",
             KISSImg, "Los Angeles, CA", "STAPLES Center", "Wednesday, March 4th", "7:30 PM")}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ConcertListPage;
