import React, { Component } from "react";
import ConcertCard from '../layout/ConcertCard.js';
import Navbar from '../layout/Navbar';
import Pagination from '@material-ui/lab/Pagination';
import SearchField from "react-search-field";
import MediaQuery from 'react-responsive';
import Slider from '@material-ui/core/Slider';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
const axios = require("axios").default;

export class ConcertListPage extends Component {
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
      query: null,
      sortBy: "date",
      ascending: 1,
      minDate: "0000-00-00",
      maxDate: "2099-01-01",
      city: null,
      minTicket: 0,
      maxTicket: 300,
      default: {
        count: null,
        next: null,
        prev: null,
        results: null,
        page: 1,
        searched: false,
        query: null,
        sortBy: "date",
        ascending: 1,
        minDate: "0000-00-00",
        maxDate: "2099-01-01",
        city: "",
        minTicket: 0,
        maxTicket: 300,
      }
    }
  }

  newSearch(value) {
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
    let url = "https://bandtogetherapi.xyz/restapi/concert";
    let options = {
      params: {
        page: this.state.page,
        query: this.state.query,
        sortBy: this.state.sortBy,
        ascending: this.state.ascending,
        minTicket: this.state.minTicket,
        maxTicket: this.state.maxTicket,
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

  sortDate = (event) => {
    this.setState({ sortBy: "date" }, this.updateState);
  }

  sortVenue = (event) => {
    this.setState({ sortBy: "venue__name" }, this.updateState);
  }

  sortLocation = (event) => {
    this.setState({ sortBy: "location__city" }, this.updateState);
  }

  sortArtist = (event) => {
    this.setState({ sortBy: "artist__name" }, this.updateState);
  }

  sortTicket = (event) => {
    this.setState({ sortBy: "ticket_min" }, this.updateState);
  }

  sortAscending = (event) => {
    this.setState({ ascending: 1 }, this.updateState);
  }

  sortDescending = (event) => {
    this.setState({ ascending: -1 }, this.updateState);
  }

  ticketSlidersChange = (event, newValue) => {
    this.setState({
      minTicket: newValue[0],
      maxTicket: newValue[1]
    });
  };

  onChangeCommitted = (event, newValue) => {
    this.updateState();
  }

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
      query: null,
      sortBy: "date",
      ascending: 1,
      minDate: "0000-00-00",
      maxDate: "2099-01-01",
      city: null,
      minTicket: 0,
      maxTicket: 300
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
        <Navbar name={"concerts"} />
        <div className="appear-second">
          <h1 className="title">Concerts</h1>
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
                  <Dropdown.Item style={this.state.sortBy === "date" ? activeDropdown : inactiveDropdown} onClick={this.sortDate}>Date</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "venue__name" ? activeDropdown : inactiveDropdown} onClick={this.sortVenue}>Venue</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "location__city" ? activeDropdown : inactiveDropdown} onClick={this.sortLocation}>Location</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "artist__name" ? activeDropdown : inactiveDropdown} onClick={this.sortArtist}>Artist</Dropdown.Item>
                  <Dropdown.Item style={this.state.sortBy === "ticket_min" ? activeDropdown : inactiveDropdown} onClick={this.sortTicket}>Ticket Price</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Order by" className="margin-right mobile-margin">
                  <Dropdown.Item style={this.state.ascending === 1 ? activeDropdown : inactiveDropdown} onClick={this.sortAscending}>Ascending</Dropdown.Item>
                  <Dropdown.Item style={this.state.ascending === -1 ? activeDropdown : inactiveDropdown} onClick={this.sortDescending}>Descending</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Filter by" className="margin-right mobile-margin">
                  <Dropdown.Item>
                    <div className="slider-div">
                      <h6>Ticket Price</h6>
                      <Slider
                        value={[this.state.minTicket, this.state.maxTicket]}
                        onChange={this.ticketSlidersChange}
                        onChangeCommitted={this.onChangeCommitted}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        style={sliderStyle}
                        min={0}
                        max={300}
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
                      return <ConcertCard key={index} compare={this.callback} compareSelected={this.state.compareIdList.includes(value.id)} id={value.id} name={value.artistName} img={value.venueImage ? value.venueImage : value.artistImage} city={value.locationName} region={value.region} date={value.date} time={value.time} ticket_min={value.ticket_min} ticket_max={value.ticket_max} location_url={"locations/" + value.locationId} artist_url={"artists/" + value.artistId} concert_url={"concerts/" + value.id} venueName={value.venueName} artistGenre={value.artistGenre} searched={this.state.searched} query={this.state.query} />
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
                  return <ConcertCard key={index} compare={this.callback} compareSelected={this.state.compareIdList.includes(value.id)} id={value.id} name={value.artistName} img={value.venueImage ? value.venueImage : value.artistImage} city={value.locationName} region={value.region} date={value.date} time={value.time} ticket_min={value.ticket_min} ticket_max={value.ticket_max} location_url={"locations/" + value.locationId} artist_url={"artists/" + value.artistId} concert_url={"concerts/" + value.id} venueName={value.venueName} artistGenre={value.artistGenre} searched={this.state.searched} query={this.state.query} />
                })}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ConcertListPage;

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