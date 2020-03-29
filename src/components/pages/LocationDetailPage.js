import React, { Component } from "react";
import LocationDetailsCard from "../layout/LocationDetailsCard.js";
import "./pages.css";

export class LocationDetailPage extends Component {
  render() {
    return (
      <div className="body flex">
        <LocationDetailsCard id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default LocationDetailPage;
