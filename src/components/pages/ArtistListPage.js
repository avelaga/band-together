import React, { Component } from "react";
import ArtistCard from '../layout/ArtistCard.js';
import { List, Pagination } from "semantic-ui-react";
// import "semantic-ui-css/semantic.min.css";
const axios = require("axios").default;

export class ArtistListPage extends Component {
  constructor() {
    super();
    this.state = {
      count: null,
      next: null,
      prev: null,
      results: null,
      page: 1
    }
  }

  componentDidMount() {
    let url = "http://192.168.1.170:8000/restapi/artist";
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
      })
      .catch(err => {
        console.log(err);
      });
  }

  setPageNum = (event, { activePage }) => {
    this.setState({ page: activePage });
    let url = "http://192.168.1.170:8000/restapi/artist";
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
    console.log(this.state.page);
    return (
      <div className="body">
        <div className="flex">
          {this.state.results && this.state.results.map((value, index) => {
            return <ArtistCard key={index} name={value.name} genre={value.genre} img={value.image} artist_url={"artists/1"} concert_url={"concerts/1"} city_url={"locations/1"} spotify_url={value.spotify_url} twitter_url={value.twitter_url} wiki_url={value.wiki_url} website={value.website} />
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

export default ArtistListPage;

// value.
// genre: "australian psych"
// image: "https://i.scdn.co/image/a7cb9fc6df8b68fdb071156add87284c3c941a04"
// name: "Tame Impala"
// num_spotify_followers: 3498979
// popularity_score: 84
// spotify_url: "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
// twitter_url: null
// url: "http://192.168.1.170:8000/restapi/artist/1"
// website: null
// wiki_url: null