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
            return <ConcertCard key={index} name={value.artistName} img={value.artistImage} city={value.locationName} city_url={"/locations/"+value.locationId} date={value.date} time={value.time} concert_url={"concerts/"+value.id} artist_url={"artists/"+value.artistId} />
          })}
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

// value.
// "artist": "http://192.168.1.170:8000/restapi/artist/4",
// "location": "http://192.168.1.170:8000/restapi/location/1",
// "venue": "http://192.168.1.170:8000/restapi/venue/1",
// "date": "2020-08-29",
// "time": "18:30:00",
// "ticket_min": "39.00",
// "ticket_max": "149.00",
// "artistName": "The Lumineers",
// "locationName": "Denver",
// "artistId": 4,
// "locationId": 1,
// "artistImage": "https://i.scdn.co/image/81bc6a0807ec258fc05f5cdd70fa8c4066bd91db",
// "venueImage": null

// ASKED ADAM FOR CONCERTID SO THAT CONCERT CARD LINKS TO THAT CONCERT