import React, { Component } from "react";

// <Card name={"Abhi"} img={AbhiImg} commits={this.state.abhi} issues={this.state.abhiIssues} bio={"Man with the minivan"}/>

export class Card extends Component {
  render() {
    return <div>
      <h1>
        HI, {this.props.name} IM CARD.
      </h1>
    </div>;
  }
}

export default Card;
