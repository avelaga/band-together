import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import KISSImg from "../../../dist/images/kiss.jpeg"
import BillieImg from "../../../dist/images/billie_eilish.jpg"
import PostImg from "../../../dist/images/post_malone.png"
//import Image from 'react-native';

export class ConcertDetailPage extends Component {
  constructor(){
    super();
    /*
    const artists = ??? Fetch from database ???;
    const img_src = ???;
    const genres = ???;
    const venue = ???;
    const address = ???;
    const in_or_out = ???;
    const ticket_price = ???;
    const num_tickets_left = ???; // Not sure we can find this data
    const capacity = ???;
    const date = "";
    const start_time = ???;
    const alcohol = ???;
    const forecast = ???;
    */

    // TEMPORARY UNTIL WE CAN PULL THESE VALUES FROM API'S
    this.artists = "";
    this.img_src = "";
    this.genres = "";
    this.venue = "";
    this.address = "";
    this.indoors = true;
    this.ticket_price = -1;
    this.capacity = -1; 
    this.date = "";
    this.start_time = "";
    this.has_alcohol = true;
    this.forecast = null; // Only use if event is outdoors, using null if indoors
  }
  
  setInfo(id){
    /* THIS SECTION IS TEMPORARY FOR THE PROJECT DEADLINE */
    switch(id){
      case 1:
        this.artists = "Post Malone";
        this.img_src = PostImg;
        this.genres = "Pop/Hip hop";
        this.venue = "Frank C. Erwin, Jr. Special Events Center";
        this.address = "1701 Red River St, Austin, TX";
        this.capacity = 16734;
        this.ticket_price = 53.50;
        this.date = "Tuesday, March 10th";
        this.start_time = "8:00 PM";
        break;
      case 2:
        this.artists = "Billie Eilish";
        this.img_src = BillieImg;
        this.genres = "Alt rock, Pop";
        this.venue = "United Center";
        this.address = "1901 W Madison St, Chicago, IL";
        this.capacity = 23500;
        this.ticket_price = 241;
        this.date = "Tuesday, March 24th";
        this.start_time = "7:30 PM";
        break;
      case 3:
        this.artists = "KISS";
        this.img_src = KISSImg;
        this.genres = "Rock";
        this.venue = "STAPLES Center";
        this.address = "1111 S Figueroa St, Los Angeles, CA";
        this.capacity = 20000;
        this.ticket_price = 39.50;
        this.date = "Wednesday, March 4th";
        this.start_time = "7:30 PM";
        break;
      default:
        break;
    }
    /* ABOVE SECTION IS TEMPORARY HARDCODING */
  }

  Indoors(props){
    return <div>Venue is indoors</div>
  }

  Outdoors(props){
    return <div>Venue is outdoors</div>
  }

  render() {
    const id = this.props.match.params.id;
    const hStyle = { color: '#676767'}
    this.setInfo(parseInt(id, 10));
    let in_out;
    if(this.indoors){
      in_out = <this.Indoors />
    } else {
      in_out = <Outdoors />
    }

    return (
      <body id='container' style={{background: 'black'}}>
        <div>
          <h1 style={hStyle}><center><b>{this.artists}</b></center></h1>
          <h3 style={hStyle}><center>at <b>{this.venue}</b></center></h3>
          <h3 style={hStyle}><center>{this.genres}</center></h3>
        </div>
        <Table striped bordered responsive variant="dark" size='sm'>
          <tbody>
            <tr>
            <td rowSpan='4'><img style={{height:'400px'}} src={this.img_src}></img></td>
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
  }
}

export default ConcertDetailPage;
