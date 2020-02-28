import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import KISSImg from "../../../dist/images/kiss.jpg"
import BillieImg from "../../../dist/images/billie_eilish.jpg"
import PostImg from "../../../dist/images/post_malone.jpg"

export class ConcertDetailPage extends Component {
  concerts = [
    {
      name: "Post Malone",
      genre: "Pop/Hip hop",
      venue: "Frank C. Erwin, Jr. Special Events Center",
      address: "1701 Red River St, Austin, TX",
      capacity: 16734,
      ticket_price: 53.50,
      date: "Tuesday, March 10th",
      start_time: "8:00 PM",
      image: PostImg
    },

    {
      name: "Billie Eilish",
      genre: "Alt rock, Pop",
      venue: "United Center",
      address: "1901 W Madison St, Chicago, IL",
      capacity: 23500,
      ticket_price: 241,
      date: "Tuesday, March 24th",
      start_time: "7:30 PM",
      image = BillieImg,
    },
    {
      name: "KISS",
      image: KISSImg,
      genre: "Rock",
      venue: "STAPLES Center",
      address: "1111 S Figueroa St, Los Angeles, CA",
      capacity: 20000,
      ticket_price: 39.50,
      date: "Wednesday, March 4th",
      start_time: "7:30 PM",
    }
  ];
  render() {
    const id = this.props.match.params.id;

    return (
      <div className="concert-detail-page">
        <div className="concert-detail">
          <div className="concert-detail-left">
            <img src={this.concerts[id-1].image} className="concert-detail-image"/>
          </div>
          <div className="concert-detail-right">
            <h1>{this.concerts[id - 1].name}</h1>
            <p>Genre: {this.concerts[id - 1].genre}</p>
            <p>Venue: {this.concerts[id-1].venue}</p>
          </div>
          <div className="clear" />
          <div className="concert-detail-bottom">
            <p>Bio:</p>
            <p>{this.concerts[id - 1].bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ConcertDetailPage;
