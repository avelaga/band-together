import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import austin from '../../../dist/images/austin.jpg';
import chicago from '../../../dist/images/chicago.jpg';
import losangeles from '../../../dist/images/losangeles.jpeg';
import "./pages.css";

const concerts = "https://bandtogether.events/concerts"
const artists = "https://bandtogether.events/artists"

export class LocationListPage extends Component {

  renderTableRow(img, city_url, city, pop, concert_url, artist_url){
    return (<tr>
              <td width = "300">
              <img className = "location-image" src={img}></img><br></br>
              </td>
              <a className="location-table-links " href={city_url}>{city}</a>&nbsp;&#183;&nbsp;
              <td><h4>{pop}</h4> 
              <a className="location-table-links " href={concert_url}>Concerts</a>&nbsp;&#183;&nbsp;
              <a className="location-table-links " href={artist_url}>Artists</a>&nbsp;&#183;&nbsp;
              </td>
            </tr>);
  }

  render(){
    return( 
      <div className="location-list">
        <Table bordered striped hover variant="dark">
          <thead>
            <tr>
              <th><h2>Location</h2></th>
              <th><h2>City</h2></th>
              <th><h2>Information</h2></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableRow(austin, "https://bandtogether.events/locations/1/",
             "Austin, TX", "Population: 950,715 ", concerts, artists)}
            {this.renderTableRow(chicago, "https://bandtogether.events/locations/1/",
             "Chicago, IL","Population: 2,716,000", concerts, artists)}
            {this.renderTableRow(losangeles, "https://bandtogether.events/locations/3/",
             "Los Angeles, CA", "Population: 4,000,000", concerts, artists)}
          </tbody>
        </Table>
      </div>
    );
  }
}


export default LocationListPage
