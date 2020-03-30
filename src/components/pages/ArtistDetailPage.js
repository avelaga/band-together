import React, { Component } from "react";
import ArtistDetailsCard from "../layout/ArtistDetailsCard.js";
import {Redirect} from 'react-router-dom';
import "./pages.css";

export class ArtistDetailPage extends Component {
  render() {
    const id = this.props.match.params.id;
    if(isNaN(id)){
      return <Redirect to="/error"/>
    }

    return (
      <div className="body flex">
        <ArtistDetailsCard id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ArtistDetailPage;

