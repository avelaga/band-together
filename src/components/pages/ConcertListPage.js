import React, { Component, Children } from "react";
import Table from 'react-bootstrap/Table';

export class ConcertListPage extends Component {
  renderTableRow(name, name_url, artist_url, img, city, venue, date, time){
    return (<tr>
              <td><b><h3>{name}</h3></b><br></br>
              <a className="concert-link" href={name_url}>Concert Info</a>&nbsp;&#183;&nbsp;<a className="artist-link" href={artist_url}>Artist Info</a>
              <image></image></td>
              <td><h3>{city}</h3></td>
              <td><h3>{venue}</h3><br></br>{date}&#183;{time}</td>
            </tr>);
  }

  render(){
    return(  
      <div className="ConcertList">
        <Table bordered striped hover>
          <thead>
            <tr>
              <th><h2>Concert</h2></th>
              <th><h2>City</h2></th>
              <th><h2>Venue</h2></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableRow("Post Malone", "https://bandtogether.events/concerts/000001/", "https://bandtogether.events/artists/000001/",
             null, "Austin, TX", "Frank C. Erwin, Jr. Special Events Center", "Tuesday, March 10th", "8:00 PM")}
            {this.renderTableRow("Billie Eilish", "https://bandtogether.events/concerts/000002/", "https://bandtogether.events/artists/000002",
             null, "Chicago, IL", "United Center", "Tuesday, March 24th", "7:30 PM")}
            {this.renderTableRow("KISS", "https://bandtogether.events/concerts/000003/", "https://bandtogether.events/artists/000003",
             null, "Los Angeles, CA", "STAPLES Center", "Wednesday, March 4th", "7:30 PM")}
          </tbody>
        </Table>
      </div>
    );
  }
}

// class Concert extends Component {
  
//   }
// }

export default ConcertListPage;
