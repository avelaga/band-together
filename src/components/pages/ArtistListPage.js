import React, { Component } from "react";
import ArtistCard from '../layout/ArtistCard.js';
import { Pagination } from "semantic-ui-react";
import SearchField from "react-search-field";
import MediaQuery from 'react-responsive'
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
      searchTerm: '',
      searched: false
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
          page: 1,
          searched: true
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
        <div className="appear-second">
        <h1 className="title">Artists</h1>
        {!this.state.results && <div className="lds-ripple"><div></div><div></div></div>}
        {(this.state.results && this.state.count > 0) &&

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
                return <ArtistCard key={index} name={value.name} genre={value.genre} img={value.image} artist_url={"artists/" + value.id} spotify_url={value.spotify_url} twitter_url={value.twitter_url} wiki_url={value.wiki_url} website={value.website} followers={value.num_spotify_followers} popularity={value.popularity_score} search={this.state.searched} />
              })}
            </div>
            <div className="pagination-menu">

              {/* desktop */}
              <MediaQuery minDeviceWidth={500}>
                <Pagination
                  activePage={this.state.page}
                  totalPages={Math.ceil(this.state.count / 10)}
                  siblingRange={1}
                  onPageChange={this.setPageNum}
                  
                />
              </MediaQuery>

              {/* mobile */}
              <MediaQuery maxDeviceWidth={500}>
                <Pagination
                  activePage={this.state.page}
                  totalPages={Math.ceil(this.state.count / 10)}
                  siblingRange={1}
                  onPageChange={this.setPageNum}
                  ellipsisItem={null}
                  boundaryRange={0}
                />
              </MediaQuery>
            </div>
          </div>
        }

        {/* If count = 0, show no results page */}
        {(this.state.count === 0) &&
          <div>
            <div className="search-div">
              <SearchField
                placeholder="Search..."
                onEnter={(e) => { this.newSearch(e) }}
                onSearchClick={(e) => { this.newSearch(e) }}
              />
            </div>
            <div className="flex" style={noResults}>
              <h1>No results found</h1>
            </div>
          </div>
        }
        </div>
      </div>
    );
  }
}

export default ArtistListPage;

const noResults = {
  color: 'white'
}