import React, { Component } from "react";
import ConcertDetailsCard from "../layout/ConcertDetailsCard.js"
import {Redirect} from 'react-router-dom';
import "./pages.css";

export class ConcertDetailPage extends Component {
  render() {
    const id = this.props.match.params.id;
    if(isNaN(id)){
        return <Redirect to="/error"/>
    }
    return (
      <div className="body flex">
        <ConcertDetailsCard id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ConcertDetailPage;


