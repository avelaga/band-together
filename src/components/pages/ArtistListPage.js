import React, { Component, Children } from "react";
import Table from 'react-bootstrap/Table';
import PostImg from '../../../dist/images/post_malone.png';
import BillieImg from '../../../dist/images/billie_eilish.jpg';
import KISSImg from '../../../dist/images/kiss.jpg';

export class ArtistListPage extends Component { 
  renderTableRow(img, city_url, city, pop, concert_url, location_url){
    return (<tr>
              <td width = "300">
              <img className = "artist-image" src={img}></img><br></br>
              </td>
              <a className="location-table-links " href={city_url}><h5>{city}</h5></a>
              <td><h4>{pop}</h4> 
              <a className="location-table-links " href={concert_url}>Concerts</a>;
              <a className="location-table-links " href={location_url}>Locations</a>;
              </td>
            </tr>);
  }
}

render();{
  return( 
    <div className="body">
      <Table bordered striped hover variant="dark">
        <thead>
          <tr>
            <th><h2>Artist</h2></th>
            <th><h2>Genre</h2></th>
            <th><h2>Touring City</h2></th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableRow(PostMalone, "https://bandtogether.events/artists/1/", "Hip-Hop", concerts, locations)}
          {this.renderTableRow(BillieEilish, "https://bandtogether.events/artists/2/", "Alternative-Pop", concerts, locations)}
          {this.renderTableRow(Kiss, "https://bandtogether.events/artists/3/", "Hard Rock", concerts, locations)}
        </tbody>
      </Table>
    </div>
  );
}

export default ArtistListPage;


/*
  render(){
    return( 
      <div className="body">
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

export default ConcertListPage;
 */