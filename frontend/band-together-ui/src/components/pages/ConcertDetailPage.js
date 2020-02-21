import React, { Component } from "react";

export class ConcertDetailPage extends Component {
  render() {
    const id = this.props.match.params.id;

    return <h1>Concert {id} Detail</h1>;
  }
}

export default ConcertDetailPage;
