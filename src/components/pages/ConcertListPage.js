import React, { Component, Children } from "react";
import ConcertCard from '../layout/ConcertCard.js';
import { Pagination } from "semantic-ui-react";
import SearchField from "react-search-field";
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
      searchTerm: ''
    }
  }

  newSearch(value) {
    this.setState({
      searchTerm: "query=" + value
    });

    let url = "http://192.168.1.170:8000/restapi/concert/search?" + "query=" + value;
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
                return <ConcertCard key={index} name={value.artistName} img={value.venueImage ? value.venueImage : value.artistImage} city={value.locationName} date={value.date} time={value.time} ticket_min={value.ticket_min} ticket_max={value.ticket_max} location_url={"locations/" + value.id} artist_url={"artists/" + value.artistId} concert_url={"concerts/" + value.id} />
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
    );
  }
}

export default ConcertListPage;

const noResults = {
  color: 'white'
}