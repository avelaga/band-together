import React, { Component } from "react";

export class ArtistDetailPage extends Component {

  render() {
    const id = this.props.match.params.id;

  return (
    <div>
      <h1>Artist {id} Detail</h1>
    </div>
  );
  }
}

export default ArtistDetailPage;
