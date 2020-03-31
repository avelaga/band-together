import React, { Component, Children } from "react";
import ConcertCard from '../layout/ConcertCard.js';
import { Pagination } from "semantic-ui-react";
const axios = require("axios").default;

export class ConcertListPage extends Component {
  constructor() {
    super();
    this.state = {
      count: null,
      next: null,
      prev: null,
      results: null,
      page: 1,
      image: null
    }
  }

  componentDidMount() {
    let url = "http://192.168.1.170:8000/restapi/concert";
    axios
      .get(
        url
      )
      .then(res => {
        this.setState({
          count: res.data.count,
          next: res.data.next,
          prev: res.data.previous,
          results: res.data.results
        });
        console.log(res.data.results[0].artist);
        // get artist image
        axios
          .get(
            res.data.results[0].artist
          )
          .then(res => {
            this.setState({
              image: res.data.image
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });

  }

  setPageNum = (event, { activePage }) => {
    this.setState({ page: activePage });
    let url = "http://192.168.1.170:8000/restapi/concert";
    axios
      .get(
        url + "?page=" + activePage
      )
      .then(res => {
        this.setState({
          count: res.data.count,
          next: res.data.next,
          prev: res.data.previous,
          results: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="body">
        <div className="flex">
          {this.state.results && this.state.results.map((value, index) => {
            return <ConcertCard key={index} name={value.artistName} img={this.state.image} city={"Austin, TX"} venue={"Frank C. Erwin, Jr. Special Events Center"} city_url={"/locations/1"} date={"Tuesday, March 10th"} time={"8:00 PM"} concert_url={"concerts/1"} artist_url={"artists/1"} />
          })}
          {/* <ConcertCard name={"Post Malone"} img={PostImg} city={"Austin, TX"} venue={"Frank C. Erwin, Jr. Special Events Center"} city_url={"/locations/1"} date={"Tuesday, March 10th"} time={"8:00 PM"} concert_url={"concerts/1"} artist_url={"artists/1"} />
        <ConcertCard name={"Billie Eilish"} img={BillieImg} city={"Chicago, IL"} venue={"United Center"} city_url={"/locations/2"} date={"Tuesday, March 24th"} time={"7:30 PM"} concert_url={"concerts/2"} artist_url={"artists/2"} />
        <ConcertCard name={"KISS"} img={KISSImg} city={"Los Angeles, CA"} venue={"STAPLES Center"} city_url={"/locations/3"} date={"Wednesday, March 4th"} time={"7:30 PM"} concert_url={"concerts/3"} artist_url={"artists/3"} /> */}
        </div>
        <div className="pagination-menu">
          <Pagination
            activePage={this.state.page}
            totalPages={Math.ceil(this.state.count / 10)}
            siblingRange={1}
            onPageChange={this.setPageNum}
          />
        </div>
      </div>
    );
  }
}

export default ConcertListPage;

// "count": 3750,
//     "next": "http://192.168.1.170:8000/restapi/concert?page=2",
//     "previous": null,
//     "results": [
//         {

// "artist": "http://192.168.1.170:8000/restapi/artist/4",
//             "location": "http://192.168.1.170:8000/restapi/location/1",
//             "venue": "http://192.168.1.170:8000/restapi/venue/1",
//             "date": "2020-08-29",
//             "time": "18:30:00",
//             "ticket_min": "39.00",
//             "ticket_max": "149.00",
//             "artistName": "The Lumineers",
//             "locationName": "Denver"