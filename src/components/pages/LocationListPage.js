import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import austin from '../../../dist/images/austin.jpg';
import chicago from '../../../dist/images/chicago.jpg';
import losangeles from '../../../dist/images/losangeles.jpeg';
import "./pages.css";

const concerts = "https://bandtogether.events/concerts"
const artists = "https://bandtogether.events/artists"

export class LocationListPage extends Component {

  renderTableRow(location_url, img, city, pop, concert_url, artist_url){
    return (<tr>
              <td>
                <b><h3>{name}</h3></b><img className = "location-image" style={{height:'150px', float: 'right'}} src={img}></img><br></br>
                <a className="location-table-links " href={location_url}>Location Info</a>&nbsp;&#183;&nbsp;
              </td>
              <td><h3>{city}</h3></td>
              <td><h3>{pop}</h3> 
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
            {this.renderTableRow("https://bandtogether.events/locations/1/",
             austin, "Austin, TX", "Population: 950,715 ", concerts, artists)}
            {this.renderTableRow("https://bandtogether.events/locations/2/",
             chicago, "Chicago, IL", "Population: 2,716,000", concerts, artists)}
            {this.renderTableRow("https://bandtogether.events/locations/3/",
             losangeles, "Los Angeles, CA", "Population: 4,000,000", concerts, artists)}
          </tbody>
        </Table>
      </div>
    );
  }
}


export default LocationListPage
