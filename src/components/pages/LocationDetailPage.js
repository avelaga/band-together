import React, { Component } from "react";
import LocationDetailsCard from "../layout/LocationDetailsCard.js";
import {Redirect} from 'react-router-dom';
import "./pages.css";

export class LocationDetailPage extends Component {
  render() {
    const id = this.props.match.params.id;
    if(isNaN(id)){
        return <Redirect to="/error"/>
    }

    return (
      <div className="body flex">
        <LocationDetailsCard id={this.props.match.params.id} />
      </div>
    );
  }
}

export default LocationDetailPage;
