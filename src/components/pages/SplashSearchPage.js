import React, { Component } from 'react'
import ArtistCard from '../layout/ArtistCard.js';
import ConcertCard from '../layout/ConcertCard.js';
import LocationCard from '../layout/LocationCard.js';
import { Pagination } from "semantic-ui-react";
import SearchField from "react-search-field";
import MediaQuery from 'react-responsive'
const axios = require("axios").default;

export class SplashSearchPage extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      count: 0,
      results: [],
      page: 1
    }
  }

  componentDidMount() {
    this.newSearch(this.props.location.state.searchTerm);
  }

  newSearch(value) {
    this.setState({
      searchTerm: "query=" + value
    });
    let url = "https://bandtogetherapi.xyz/restapi/artist/search?" + "query=" + value;
    axios
      .get(
        url
      )
      .then(res => {
        this.setState({
          results: res.data,
          count: res.data.length
        });
        url = "https://bandtogetherapi.xyz/restapi/concert/search?" + "query=" + value;
        axios
          .get(
            url
          )
          .then(res => {
            let newArray = this.state.results.concat(res.data);
            let newCount = this.state.count + res.data.length;
            this.setState({
              results: newArray,
              count: newCount
            });
            url = "https://bandtogetherapi.xyz/restapi/location/search?" + "query=" + value;
            axios
              .get(
                url
              )
              .then(res => {
                let newArray = this.state.results.concat(res.data);
                let newCount = this.state.count + res.data.length;
                this.setState({
                  results: newArray,
                  count: newCount
                });
              })
              .catch(err => {
                console.log(err);
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
  };

  render() {
    return (
      <div className="body">
        <div className="appear-second">
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
                  if (index >= ((this.state.page * 10) - 10) && index < (this.state.page * 10)) {
                    if (value.object_type === "Artist") {
                      return <ArtistCard key={index} name={value.name} genre={value.genre} img={value.image} artist_url={"artists/" + value.id} spotify_url={value.spotify_url} twitter_url={value.twitter_url} wiki_url={value.wiki_url} website={value.website} followers={value.num_spotify_followers} popularity={value.popularity_score} />
                    }
                    if (value.object_type === "Concert") {
                      return <ConcertCard key={index} name={value.artistName} img={value.venueImage ? value.venueImage : value.artistImage} city={value.locationName} date={value.date} time={value.time} ticket_min={value.ticket_min} ticket_max={value.ticket_max} location_url={"locations/" + value.id} artist_url={"artists/" + value.artistId} concert_url={"concerts/" + value.id} venueName={value.venueName} />
                    }
                    if (value.object_type === "Location") {
                      return <LocationCard key={index} city={value.city} country={value.country} timezone={value.timezone} region={value.region} area_code={value.area_code} img={value.image} city_url={"/locations/" + value.id} pop={value.population} elevation={value.elevation} />
                    }
                  }
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
    )
  }
}

export default SplashSearchPage

const noResults = {
  color: 'white'
}