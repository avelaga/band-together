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
    const hStyle = { color: '#676767'}
    this.setInfo(parseInt(id, 10));
    let in_out;
    if(this.indoors){
      in_out = <this.Indoors />
    } else {
      in_out = <Outdoors />
    }

    return (
      <div className="body flex">
        <ConcertDetailsCard id={this.props.match.params.id} />
      </div>
    );
  }
}

export default ConcertDetailPage;


