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
<<<<<<< HEAD
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
=======
      <body id='container' class="body">
        <div>
          <h1 style={hStyle}><center><b>{this.artists}</b></center></h1>
          <h3 style={hStyle}><center>at <b>{this.venue}</b></center></h3>
          <h3 style={hStyle}><center>{this.genres}</center></h3>
        </div>
        <Table striped bordered responsive variant="dark" size='sm'>
          <tbody>
            <tr>
            <td rowSpan='4' width='400'><img style={{height:'400px'}} src={this.img_src}></img></td>
              <th>Who:</th>
              <td>{this.artists}</td>
            </tr>
            <tr>
              <th>Where:</th>
              <td>{this.venue}<br />
              {this.address}<br />
              Capacity: {this.capacity}<br />
              {in_out}
              </td>
            </tr>
            <tr>
              <th>When:</th>
              <td>{this.date} at {this.start_time}</td>
            </tr>
            <tr>
              <th>Tickets?</th>
              <td>${this.ticket_price} each</td>
            </tr>
          </tbody>
        </Table>
      </body>
      );
>>>>>>> ccccf32ed9c943c835ea9eab8553fd565d35ba03
  }
}

export default ConcertDetailPage;
