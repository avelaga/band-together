import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class LocationListPage extends Component {

  locationOne = (
     <Link to = "/locations/:id = 1">
       <image style = {
         {width: '150px'}, 
         {height: '150px'}
        }
       src = 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/625b0c80-d52e-33fe-4294-826781c6abec/630x355.jpg'
       alt = "Austin, Texas"
       >
       </image>
      </Link>
  );

  locationTwo = (
     <Link to = "/locations/:id = 2">
       <image style = {
         {width: '250px'}, 
         {height: '150px'}
        }
       src = 'https://www.sandiego.org/-/media/images/sdta-site/articles/about-sd/1233x860/sdta-articles-11917-1230x860-0000s-0000-about-sd.jpg?bc=white&h=500&w=700&c=1'
       alt = "Austin, Texas"
       >
       </image>
      </Link>
  );

  locationThree = (
     <Link to = "/locations/:id = 3">
       <image style = {
         {width: '150px'}, 
         {height: '150px'}
        }
       src = 'https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg'
       alt = "Austin, Texas"
       >
       </image>
      </Link>
  );

  render() {
    return (
      <div>      
      {this.locationOne}
      {this.locationTwo}
      {this.locationThree}
      </div>
    );
  }
}

export default LocationListPage;
