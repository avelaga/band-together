import React, { Component } from "react";
import { Link } from 'react-router-dom';
import austin from '../../../dist/images/austin.jpg';
import chicago from '../../../dist/images/chicago.jpg';
import losangeles from '../../../dist/images/losangeles.jpeg';
import sandiego from '../../../dist/images/sandiego.jpg';
import newyork from '../../../dist/images/newyork.jpg';
import "./pages.css";

export class LocationListPage extends Component {

  locationOne = (
    <div class="locationCont">
     <Link to = "/locations/:id = 1">
       <img style = {
         {width: '150px'}, 
         {height: '150px'}
        }
       src = {austin}
       alt = "Austin, Texas"
       >
       </img>
       <div class="bottom-left">Austin, TX</div>
      </Link>
      </div>
  );

  locationTwo = (
    <div class="locationCont">
     <Link to = "/locations/:id = 2">
       <img style = {
         {width: '150px'}, 
         {height: '150px'}
        }
       src = {chicago}
       alt = "Austin, Texas"
       >
       </img>
       <div class="bottom-left">Chicago, IL</div>
      </Link>
    </div>
  );

  locationThree = (
    <div class="locationCont">
     <Link to = "/locations/:id = 3">
       <img style = {
         {width: '150px'}, 
         {height: '150px'}
        }
       src = {losangeles}
       alt = "Los Angeles, CA"
       >
       </img>
       <div class="bottom-left">Los Angeles, CA</div>
      </Link>
      </div>
  );

  locationFour = (
    <div class="locationCont">
     <Link to = "/locations/:id = 4">
       <img style = {
         {width: '150px'}, 
         {height: '150px'}
        }
       src = {newyork}
       alt = "New York, NY"
       >
       </img>
       <div class="bottom-left">New York, NY</div>
      </Link>
      </div>
  );

  locationFive = (
    <div class="locationCont">
     <Link to = "/locations/:id = 5">
       <img style = {
         {width: '150px'}, 
         {height: '150px'}
        }
       src = {sandiego}
       alt = "San Diego, CA"
       >
       </img>
       <div class="bottom-left">San Diego, CA</div>
      </Link>
      </div>
  );

  render() {
    return (
      <div className="body">
        <table id="location table">
          <tbody>
            <tr id="row0">
              <td id="Austin">{this.locationOne}</td>
              <td id="Chicago">{this.locationTwo}</td>
              <td id="Los Angeles">{this.locationThree}</td>
              <td id="San diego">{this.locationFive}</td>
              <td id="New York">{this.locationFour}</td>
            </tr>
          </tbody>
       </table>
      </div>
    );
  }
}

export default LocationListPage
