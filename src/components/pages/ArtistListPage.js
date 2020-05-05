import React, { Component } from "react";
import Navbar from '../layout/Navbar';
import ArtistCard from '../layout/ArtistCard.js';
import Pagination from '@material-ui/lab/Pagination';
import SearchField from "react-search-field";
import MediaQuery from 'react-responsive';
import Slider from '@material-ui/core/Slider';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
const axios = require("axios").default;

export class ArtistListPage extends Component {
  constructor() {
    super();
    this.state = {
      compareList: [],
      compareIdList: [],
      compareOpen: false,
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
      },

    }
  }

  newSearch(value) {
    console.log(value);
    if (value === "") {
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
    let url = "http://192.168.1.170:8000/restapi/artist";
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

  setPageNum = (event, page) => {
    this.setState({ page: page }, this.updateState);
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
    });
  };

  onChangeCommitted = (event, newValue) => {
    this.updateState();
  };

  followerSlidersChange = (event, newValue) => {
    this.setState({
      minFollowers: newValue[0],
      maxFollowers: newValue[1]
    });
  };

  reset = (event) => {
    this.setState({
      compareList: [],
      compareIdList: [],
      compareOpen: false,
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

  callback = (arg) => {
    if (!this.state.compareIdList.includes(arg)) { // add
      this.state.results.map((value, index) => {
        if (value.id === arg) {
          this.setState({
            compareList: this.state.compareList.concat(this.state.results[index]),
            compareIdList: this.state.compareIdList.concat(arg)
          }, this.printCompare);
        }
      })
    }
    else { // remove
      let objIndex = 0;
      this.state.compareList.map((value, index) => {
        if (value.id === arg) {
          objIndex = index;
        }
      })
      let newObjArr = this.state.compareList;
      newObjArr.splice(objIndex, 1);

      const idIndex = this.state.compareIdList.indexOf(arg);
      let newIdArr = this.state.compareIdList;
      newIdArr.splice(idIndex, 1);

      this.setState({
        compareIdList: newIdArr,
        compareList: newObjArr
      }, this.printCompare);
    }
  }

  printCompare() {
    console.log(this.state.compareList);
    console.log(this.state.compareOpen);
  }

  showCompare = () => {
    console.log("gonna show compare");
    this.setState({
      compareOpen: !this.state.compareOpen
    })
  }

  render() {
    return (
      <div className="body">
        <Navbar name={"artists"} />
        <div className="appear-second">
          <h1 className="title">Artists</h1>
          {!this.state.results && <div className="lds-ripple"><div></div><div></div></div>}

          {(this.state.results && !this.state.compareOpen) &&
            <div>
              <div className="search-div flex">
                {(this.state.compareList.length >= 2) &&
                  <Button variant="primary" onClick={this.showCompare} className="margin-right mobile-margin">Compare</Button>
                }
                {(this.state.compareList.length < 2) &&
                  <Button variant="secondary" onClick={this.showCompare} disabled={true} className="margin-right mobile-margin">Compare</Button>
                }
                <DropdownButton id="dropdown-basic-button" title="Sort by" className="margin-right mobile-margin">
                  <Dropdown.Item style={this.state.sortBy === "name" ? activeDropdown : inactiveDropdown} onClick={this.sortName}>Name</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "genre" ? activeDropdown : inactiveDropdown} onClick={this.sortGenre}>Genre</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "num_spotify_followers" ? activeDropdown : inactiveDropdown} onClick={this.sortFollowers}>Followers</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "popularity_score" ? activeDropdown : inactiveDropdown} onClick={this.sortPopularity}>Popularity</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Order by" className="margin-right mobile-margin">
                  <Dropdown.Item style={this.state.ascending === 1 ? activeDropdown : inactiveDropdown} onClick={this.sortAscending}>Ascending</Dropdown.Item>
                  <Dropdown.Item style={this.state.ascending === -1 ? activeDropdown : inactiveDropdown} onClick={this.sortDescending}>Descending</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Filter by" className="margin-right mobile-margin">
                  <Dropdown.Item >
                    <div className="slider-div">
                      <h6>Popularity</h6>
                      <Slider
                        value={[this.state.minPop, this.state.maxPop]}
                        onChange={this.popularitySlidersChange}
                        onChangeCommitted={this.onChangeCommitted}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        style={sliderStyle}
                      />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div className="slider-div">
                      <h6>Followers</h6>
                      <Slider
                        value={[this.state.minFollowers, this.state.maxFollowers]}
                        onChange={this.followerSlidersChange}
                        onChangeCommitted={this.onChangeCommitted}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        style={sliderStyle}
                        min={0}
                        max={34000000}
                      />
                    </div>
                  </Dropdown.Item>
                </DropdownButton>
                <div className="margin-right mobile-margin">
                  <SearchField
                    placeholder="Search..."
                    onEnter={(e) => { this.newSearch(e) }}
                    onSearchClick={(e) => { this.newSearch(e) }}
                  />
                </div>
                <Button variant="secondary" onClick={this.reset}>Reset</Button>
              </div>

              {/* If count = 0, show no results page */}
              {(this.state.count === 0) &&
                <div className="flex white">
                  <h1>No results found</h1>
                </div>
              }

              {/* If count > 0, show results + pagination menu */}
              {(this.state.count > 0) &&

                <div>
                  <div className="flex">
                    {this.state.results.map((value, index) => {
                      return <ArtistCard key={index} compare={this.callback} compareSelected={this.state.compareIdList.includes(value.id)} id={value.id} name={value.name} genre={value.genre} img={value.image} artist_url={"artists/" + value.id} spotify_url={value.spotify_url} twitter_url={value.twitter_url} wiki_url={value.wiki_url} website={value.website} followers={value.num_spotify_followers} popularity={value.popularity_score} query={this.state.query} searched={this.state.searched} />
                    })}
                  </div>
                  <div className="pagination-menu">
                    {/* desktop */}
                    <MediaQuery minDeviceWidth={500}>
                      <Pagination
                        color="primary"
                        size="large"
                        page={this.state.page}
                        count={Math.ceil(this.state.count / 10)}
                        onChange={this.setPageNum}
                      />
                    </MediaQuery>
                    {/* mobile */}
                    <MediaQuery maxDeviceWidth={500}>
                      <Pagination
                        color="primary"
                        size="size"
                        page={this.state.page}
                        count={Math.ceil(this.state.count / 10)}
                        onChange={this.setPageNum}
                        siblingCount={0}
                      />
                    </MediaQuery>
                  </div>
                </div>
              }
            </div>
          }

          {/* show compare options  */}
          {(this.state.results && this.state.compareOpen) &&
            <div>
              <div className="search-div flex">
                <Button variant="secondary" onClick={this.showCompare} className="margin-right mobile-margin">Close</Button>
              </div>
              <div className="flex">
                {this.state.compareList.map((value, index) => {
                  return <ArtistCard key={index} compare={this.callback} compareSelected={this.state.compareIdList.includes(value.id)} id={value.id} name={value.name} genre={value.genre} img={value.image} artist_url={"artists/" + value.id} spotify_url={value.spotify_url} twitter_url={value.twitter_url} wiki_url={value.wiki_url} website={value.website} followers={value.num_spotify_followers} popularity={value.popularity_score} query={this.state.query} searched={this.state.searched} />
                })}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ArtistListPage;

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

const inactiveDropdown = {
  backgroundColor: 'white',
  color: 'black'
}

const activeDropdown = {
  fontWeight: '1000',
  backgroundColor: 'rgb(0, 119, 255)',
  color: 'white'
}