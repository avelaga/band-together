import React, { Component } from "react";
import ArtistDetailsCard from "../layout/ArtistDetailsCard.js";
import "./pages.css";

export class ArtistDetailPage extends Component {
  render() {
    return (
      <div className="body flex">
          <ArtistDetailsCard id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ArtistDetailPage;

