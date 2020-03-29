import React, { Component } from "react";
import ConcertDetailsCard from "../layout/ConcertDetailsCard.js"

export class ConcertDetailPage extends Component {

  render() {
    return (
        <div className="body flex">
          <ConcertDetailsCard id={this.props.match.params.id} />
        </div>
      );
  }
}

export default ConcertDetailPage;


