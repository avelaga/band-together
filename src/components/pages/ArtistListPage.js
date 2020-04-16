import React, { Component } from "react";
import ArtistCard from '../layout/ArtistCard.js';
import { Pagination } from "semantic-ui-react";
import SearchField from "react-search-field";
import MediaQuery from 'react-responsive'
import Slider from '@material-ui/core/Slider';
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
      searched: false,
      query: '',
      sortBy: "name",
      ascending: 1,
      minFollowers: 0,
      maxFollowers: 34000000,
      minPop: 0,
      maxPop: 100,
      genre: '',
      default: {
        count: null,
        next: null,
        prev: null,
        results: null,
        page: 1,
        searched: false,
        query: '',
        sortBy: "name",
        ascending: 1,
        minFollowers: 0,
        maxFollowers: 34000000,
        minPop: 0,
        maxPop: 100,
        genre: ''
      }
    }
  }

  newSearch(value) {
    console.log(value);
    if (value === "") {
      console.log("it was null");
      this.setState({
        query: value,
        searched: false
      }, this.updateState);
    } else {
      this.setState({
        query: value,
        searched: true
      }, this.updateState);
    }
  }

  updateState() {
    let url = "http://72.182.112.17:8000/restapi/artist";
    let options = {
      params: {
        page: this.state.page,
        query: this.state.query,
        sortBy: this.state.sortBy,
        ascending: this.state.ascending,
        minFollowers: this.state.minFollowers,
        maxFollowers: this.state.maxFollowers,
        minPop: this.state.minPop,
        maxPop: this.state.maxPop,
        genre: this.state.genre,
      }
    };
    axios
      .get(
        url, options
      )
      .then(res => {
        this.setState({
          count: res.data.count,
          next: res.data.next,
          prev: res.data.previous,
          results: res.data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.setState({ page: 1 }, this.updateState);
  }

  setPageNum = (event, { activePage }) => {
    this.setState({ page: activePage }, this.updateState);
  };

  sortName = (event) => {
    this.setState({ sortBy: "name" }, this.updateState);
  }

  sortGenre = (event) => {
    this.setState({ sortBy: "genre" }, this.updateState);
  }

  sortFollowers = (event) => {
    this.setState({ sortBy: "num_spotify_followers" }, this.updateState);
  }

  sortPopularity = (event) => {
    this.setState({ sortBy: "popularity_score" }, this.updateState);
  }

  sortAscending = (event) => {
    this.setState({ ascending: 1 }, this.updateState);
  }

  sortDescending = (event) => {
    this.setState({ ascending: -1 }, this.updateState);
  }

  popularitySlidersChange = (event, newValue) => {
    this.setState({
      minPop: newValue[0],
      maxPop: newValue[1]
    }, this.updateState);
  };

  followerSlidersChange = (event, newValue) => {
    this.setState({
      minFollowers: newValue[0],
      maxFollowers: newValue[1]
    }, this.updateState);
  };

  reset = (event) => {
    this.setState({
      count: null,
      next: null,
      prev: null,
      results: null,
      page: 1,
      searched: false,
      query: '',
      sortBy: "name",
      ascending: 1,
      minFollowers: 0,
      maxFollowers: 34000000,
      minPop: 0,
      maxPop: 100,
      genre: ''
    }, this.updateState);
  }

  render() {
    return (
      <div className="body">
        <div className="appear-second">
          <h1 className="title">Artists</h1>
          {!this.state.results && <div className="lds-ripple"><div></div><div></div></div>}
          {this.state.results &&

            <div>
              <div className="search-div flex">
                <div className="title">sort by: </div>
                <div style={buttonStyle} onClick={this.sortName}>Name</div>
                <div style={buttonStyle} onClick={this.sortGenre}>Genre</div>
                <div style={buttonStyle} onClick={this.sortFollowers}>Followers</div>
                <div style={buttonStyle} onClick={this.sortPopularity}>Populairty</div>
                <div style={buttonStyle} onClick={this.sortAscending}>Ascending</div>
                <div style={buttonStyle} onClick={this.sortDescending}>Descending</div>

                <div className="title">filter by: </div>

                <div style={sliderDiv}>
                  <h6>Popularity</h6>
                  <Slider
                    value={[this.state.minPop, this.state.maxPop]}
                    onChange={this.popularitySlidersChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    style={sliderStyle}
                  />
                </div>

                <div style={sliderDiv}>
                  <h6>Followers</h6>
                  <Slider
                    value={[this.state.minFollowers, this.state.maxFollowers]}
                    onChange={this.followerSlidersChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    style={sliderStyle}

                    min={0}
                    max={34000000}
                  />
                </div>

                <SearchField
                  placeholder="Search..."
                  onEnter={(e) => { this.newSearch(e) }}
                  onSearchClick={(e) => { this.newSearch(e) }}
                />

                <div style={buttonStyle} onClick={this.reset}>RESET</div>

              </div>
              {/* If count = 0, show no results page */}
              {(this.state.count === 0) &&
                <div className="flex" style={white}>
                  <h1>No results found</h1>
                </div>
              }
              {/* If count > 0, show results + pagination menu */}
              {(this.state.count > 0) &&
                <div>
                  <div className="flex">
                    {this.state.results.map((value, index) => {
                      return <ArtistCard key={index} name={value.name} genre={value.genre} img={value.image} artist_url={"artists/" + value.id} spotify_url={value.spotify_url} twitter_url={value.twitter_url} wiki_url={value.wiki_url} website={value.website} followers={value.num_spotify_followers} popularity={value.popularity_score} query={this.state.query} searched={this.state.searched}/>
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
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ArtistListPage;

const white = {
  color: 'white',
  textAlign: 'center'
}

const buttonStyle = {
  backgroundColor: 'rgb(0, 119, 255)',
  borderRadius: '5px',
  padding: '7px',
  marginRight: '5px',
  color: 'white'
}

const mobileButtonStyle = {
  backgroundColor: 'rgb(0, 119, 255)',
  width: '85vw',
  borderRadius: '5px',
  padding: '7px',
  margin: '5px',
  fontSize: '30px',
  lineHeight: '70px'
}

const sliderStyle = {
  width: '150px'
}

const sliderDiv = {
  padding: '10px',
  color: 'white',
  textAlign: 'center'
}