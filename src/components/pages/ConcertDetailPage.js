import React, { Component } from "react";
import ConcertDetailsCard from "../layout/ConcertDetailsCard.js"
import KISSImg from "../../../dist/images/kiss.jpg"
import BillieImg from "../../../dist/images/billie_eilish.jpg"
import PostImg from "../../../dist/images/post_malone.jpg"
import {Redirect} from 'react-router-dom';
import ErrorPage from "../../App"

export class ConcertDetailPage extends Component {
  constructor(){
    super();
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
          <ConcertDetailsCard name={this.artists} img={this.img_src} genre={this.genres} venue={this.venue} address={this.address} capacity={this.capacity} ticket_price={this.ticket_price} date={this.date} time={this.start_time} city_url={"/locations/1"} artist_url={"artists/1"} />
        </div>
      );
  }
}

export default ConcertDetailPage;
