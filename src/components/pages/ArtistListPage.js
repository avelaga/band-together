import React, { Component } from "react";
import ArtistCard from '../layout/ArtistCard.js';
import { Pagination } from "semantic-ui-react";
import SearchField from "react-search-field";
const axios = require("axios").default;

export class ArtistListPage extends Component {
  constructor() {
    super();
    this.state = {
      count: null,
      next: null,
      prev: null,
      results: null,
      page: 1,
      searchTerm: ''
    }
  }

  newSearch(value) {
    this.setState({
      searchTerm: "query=" + value
    });

    let url = "http://192.168.1.170:8000/restapi/artist/search?" + "query=" + value;
    axios
      .get(
        url
      )
      .then(res => {
        this.setState({
          count: res.data.count,
          next: res.data.next,
          prev: res.data.previous,
          results: res.data.results,
          page: 1
        });
      })
      .catch(err => {
        console.log(err);
      });
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
    let url = "http://192.168.1.170:8000/restapi/artist/search?";
    axios
      .get(
        url + "page=" + activePage + "&" + this.state.searchTerm
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

        {!this.state.results && <div className="lds-ripple"><div></div><div></div></div>}
        {this.state.results &&

          <div>
            <div className="search-div">
              <SearchField
                placeholder="Search..."
                onEnter={(e) => { this.newSearch(e) }}
                onSearchClick={(e) => { this.newSearch(e) }}
              />
            </div>
            <div className="flex">
              {this.state.results.map((value, index) => {
                return <ArtistCard key={index} name={value.name} genre={value.genre} img={value.image} artist_url={"artists/" + value.id} spotify_url={value.spotify_url} twitter_url={value.twitter_url} wiki_url={value.wiki_url} website={value.website} />
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
        }
      </div>
    );
  }
}

export default ArtistListPage;