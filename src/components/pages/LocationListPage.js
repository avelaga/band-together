import React, { Component } from "react";
import LocationCard from '../layout/LocationCard.js';
import { Pagination } from "semantic-ui-react";
import SearchField from "react-search-field";
import MediaQuery from 'react-responsive'
const axios = require("axios").default;
import "./pages.css";

const concerts = "/concerts"
const artists = "/artists"

export class LocationListPage extends Component {
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

    let url = "https://bandtogetherapi.xyz/restapi/location/search?" + "query=" + value;
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
    let url = "https://bandtogetherapi.xyz/restapi/location";
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
    let url = "https://bandtogetherapi.xyz/restapi/location/search?";
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
          <h1 className="title">Locations</h1>
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
                  return <LocationCard key={index} city={value.city} country={value.country} timezone={value.timezone} region={value.region} area_code={value.area_code} img={value.image} city_url={"/locations/" + value.id} pop={value.population} elevation={value.elevation} />
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

export default LocationListPage

const noResults = {
  color: 'white'
}