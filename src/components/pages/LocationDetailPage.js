import React, { Component } from "react";

export class LocationDetailPage extends Component {
  render() {
    const id = this.props.match.params.id;
    return <h1>Location {id} Detail</h1>;
  }
}

export default LocationDetailPage;
